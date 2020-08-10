let currentMap = null;
let cachedMaps = {};

async function loadEclmap(file, name, game) {
    if (cachedMaps[name]) {
        currentMap = cachedMaps[name];
        return;
    }

    let txt;
    if (file == null) txt = await autoEclmap(game);
    else txt = await fileEclmap(file);
    
    const map = parseEclmap(txt);
    if (!cachedMaps[name]) cachedMaps[name] = map;
}

async function fileEclmap(file) {
    const fr = new FileReader();
    fr.readAsText(file);
    const txt = await new Promise((resolve, reject) => {
        fr.onload = () => resolve(fr.result);
    });
    return txt;
}

function parseEclmap(txt, name) {
    const map = new Eclmap(txt);
    currentMap = map; 
    return map;
}

async function autoEclmap(game) {
    let groups = [
        [6],
        [7],
        [8, 9, 9.5],
        [10, 10.3, 11, 12, 12.5, 12.8],
        [13, 14, 14.3, 15, 16, 16.5, 17],
        [GAME_ECLPLUS]
    ];

    let group = null;
    for (g=0; g<groups.length; ++g) {
        if (groups[g].indexOf(game) > -1) {
            group = groups[g];
            break;
        }
    }
    
    if (group[0] == GAME_ECLPLUS) {
        const res = await fetch("eclplus/ECLinclude/ECLplus.eclm");
        if (res.ok) {
            const txt = await res.text();
            return txt;
        } else return "!eclmap";
    }

    if (group == null) return "!eclmap";

    // Generally prioritize getting eclmap for the exact same version
    // if not found, try the earlier versions, and if there are no earlier versions,
    // try to find it in later versions...
    group.sort((a, b) => {
        if (a == game) return -1;
        else if (b == game) return 1;
        else if (a > game && b < game) return 1;
        else if (b > game && a < game) return -1;
        else if (a > game && b > game) return a - b;
        else return b - a;
    });
    
    for (let i=0; i<group.length; ++i) {
        const ver = normalizeGameVersion(group[i]);
        const strver = ver < 10 ? `0${ver}` : `${ver}`;

        const res = await fetch(`eclmap/eclmap/th${strver}.eclm`);
        if (res.ok) {
            const txt = await res.text();
            return txt;
        } else return "!eclmap";
    }

    return "!eclmap";
}

class Eclmap {
    constructor(txt) {
        this.ins = [];
        this.timeline_ins = [];
        this.var = [];
        this.ins_sig = [];
        this.timeline_ins_sig = [];
        this.var_types = [];

        this.currentSeqmap = null;
        this.ident = 0;

        txt = txt.replace(/\r/g, "");
        this.file = txt.split("\n");
        this.strtok_tmp = "";
        this.line = 0;
        this.parse();
    }
    getMnemonic(num) {
        let ent = this.seqmapGet(this.ins, num);
        if (ent != null)
            return ent.name;
        return `ins_${num}`;
    }
    getTimelineMnemonic(num) {
        let ent = this.seqmapGet(this.timeline_ins, num);
        if (ent != null)
            return ent.name;

        return `ins_${num}`;
    }
    getGlobal(num) {
        let ent = this.seqmapGet(this.var, num);
        if (ent != null)
            return ent.name;

        return `[${num}]`;
    }
    err(txt) {
        alert(`eclmap parse error at line ${this.line}: ${txt}`);
    }
    fgets() {
        ++this.line;
        if (this.file.length == 0) return null;
        return this.file.splice(0, 1)[0];
    }
    strtok(str, delim) {
        if (str != null) this.strtok_tmp = str;
        let pos = 0;
        while(this.strtok_tmp.length > pos && delim.indexOf(this.strtok_tmp[pos]) > -1) ++pos;

        this.strtok_tmp = this.strtok_tmp.substring(pos);
        pos = 0;
        while(this.strtok_tmp.length > pos && delim.indexOf(this.strtok_tmp[pos]) == -1) ++pos;
        
        const ret = this.strtok_tmp.substring(0, pos);
        this.strtok_tmp = this.strtok_tmp.substring(pos);
        return ret;
    }
    parse() {
        const magic = this.fgets();
        this.control("!ins_names"); // default
        this.seqmapLoad("!eclmap", this.set.bind(this), this.control.bind(this), magic);
    }

    control(arg) {
        switch(arg) {
            case "!ins_names":
                this.ident = 1;
                this.currentSeqmap = this.ins;
                break;
            case "!ins_signatures":
                this.ident = 0;
                this.currentSeqmap = this.ins_sig;
                break;
            case "!gvar_names":
                this.ident = 1;
                this.currentSeqmap = this.var;
                break;
            case "!gvar_types":
                this.ident = 0;
                this.currentSeqmap = this.var_types;
                break;
            case "!timeline_ins_names":
                this.ident = 1;
                this.currentSeqmap = this.timeline_ins;
                break;
            case "!timeline_ins_signatures":
                this.ident = 0;
                this.currentSeqmap = this.timeline_ins_sig;
                break;
            default:
                this.err(`unknown control line: ${arg}`);
                return 1;
        }
        return 0;
    }

    is_keyword(str) {
        return [
            "anim", "ecli", "sub", "timeline",
            "var", "int", "float", "void",
            "inline", "return", "goto", "unless",
            "if", "else", "do", "while",
            "times", "switch", "case", "default",
            "break", "async", "global", "sin",
            "cos", "sqrt", "rad", "false", "true"
        ].indexOf(str) > -1;
    }

    validate_ident(str) {
        let is_ident = str.match(/^[a-zA-Z_][a-zA-Z0-9_]*$/) != null;
        if (!is_ident) {
            this.err(`'${str}' isn't a valid identifier`);
            return 1;
        }
        if (str.substring(0, 4) == "ins_") {
            this.err("mnemonic can't start with ins_");
            return 1;
        }
        if (this.is_keyword(str)) {
            this.err(`'${str}' is a keyword, ignoring`);
            return 1;
        }
        return 0;
    }

    validate_type(str) {
        if (str != "$" && str != "%") {
            this.err(`unknown type '${str}'`);
            return 1;
        }
        return 0;
    }

    validate_signature(str) {
        // not implemented
        return 0;
    }

    set(num, name) {
        if (this.ident) {
            if (this.validate_ident(name))
                return 1;
        } else if (this.currentSeqmap == this.globals_types) {
            if (this.validate_type(name))
                return 1;
        } else {
            if (this.validate_signature(name))
                return 1;
        }
        this.seqmapSet(this.currentSeqmap, num, name);
    }

    seqmapLoad(magic, set, control, line) {
        if (line != magic) {
            this.err("invalid magic");
            return;
        }
        while((line = this.fgets()) != null) {
            // Remove comments.
            line = line.split("#")[0];

            let token = this.strtok(line, " \t\n");
            if (!token) continue; // 0 tokens = empty line

            if (token[0] == "!") {
                control(token);
                continue;
            }

            const num = parseInt(token);
            if (isNaN(num)) {
                this.err("key token is not a number");
                return;
            }

            token = this.strtok(null, " \t\n");
            if (!token) {
                this.err("not enough tokens");
                return;
            }

            if (token == "_")
                token = ""; // specify empty strings with _

            set(num, token);
        }
    }

    seqmapSet(seqmap, num, name) {
        seqmap.push({
            num: num,
            name: name
        });
    }

    seqmapGet(seqmap, num) {
        for (let i=seqmap.length-1; i>=0; --i) {
            if (seqmap[i].num == num)
                return seqmap[i];
        }
        return null;
    }

    seqmapFind(seqmap, name) {
        for (let i=seqmap.length-1; i>=0; --i) {
            if (seqmap[i].name == name)
                return seqmap[i];
        }
        return null;
    }
}
