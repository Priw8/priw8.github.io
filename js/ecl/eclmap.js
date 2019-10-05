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
		[13, 14, 14.3, 15, 16, 16.5, 17]
	];
	let rgroups = [
		["06"],
		["07"],
		["08", "09", "95"],
		["10", "103", "11", "12", "125", "128"],
		["13", "14", "143", "15", "16", "165", "17"]
	];
	let group = null;
	for (g=0; g<groups.length; ++g) {
		if (groups[g].indexOf(game) > -1) {
			group = rgroups[g];
			break;
		}
	}
	if (group == null) return "eclmap";

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
		const res = await fetch(`eclmap/th${group[i]}.eclm`);
		if (res.ok) {
			const txt = await res.text();
			return txt;
		}
	}

	return "eclmap";
}

class Eclmap {
    constructor(txt) {
        this.opcodes = {};
        this.timeline_opcodes = {};
        this.globals = {};
        txt = txt.replace(/\r/g, "");
        this.file = txt.split("\n");
        this.strtok_tmp = "";
        this.line = 0;
        this.parse();
    }
    getMnemonic(num) {
        if (this.opcodes[num]) return this.opcodes[num];
        return `ins_${num}`;
    }
    getGlobal(num) {
        if (this.globals[num]) return this.globals[num];
        return `[${num}]`;
    }
    err(txt) {
        alert(`eclmap parse error at line ${this.line}: ${txt}`);
        this.file = null;
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
        if (magic != "eclmap") {
            this.err("invalid magic - "+magic);
            return;
        }
        let line;
        while((line = this.fgets()) != null) {
            // Remove comments.
            line = line.split("#")[0];
            let token = this.strtok(line, " \t\n");
            if (!token) continue; // 0 tokens = empty line
            const num = parseInt(token);
            if (isNaN(num)) return this.err("opcode is not a number")

            token = this.strtok(null, " \t\n");
            if (!token) return this.err("not enough tokens");
            const group = token == '?' ? this.opcodes : (token == '@' ? this.timeline_opcodes : this.globals);

            token = this.strtok(null, " \t\n");
            if (!token) return this.err("not enough tokens");

            // validate mnemonic
            if (!token.match(/[a-zA-Z_][a-zA-Z_0-9]*/)) return this.err(token + "isn't a valid identifier");
            if (token.substring(0, 4) == "ins_") return this.err("mnemonic can't start with ins_");

            group[num] = token;
        }
    }
}
