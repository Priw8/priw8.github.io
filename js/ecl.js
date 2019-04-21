const VARS = {
	"-10000": 		[10,	"$",	"ro",	"g",	"RAND",			"Random integer, very large range."],
	"-9999": 		[10,	"%",	"ro",	"g",	"RANDF",		"Random float from 0.0f to 1.0f."],
	"-9998": 		[10,	"%",	"ro",	"g",	"RANDANGLE",	"Random float from -pi to pi."],
	"-9997": 		[10,	"%",	"ro",	"l",	"FINAL_X",		"Final X position of the enemy."],
	"-9996": 		[10,	"%",	"ro",	"l",	"FINAL_Y",		"Final Y position of the enemy."],
	"-9995": 		[10,	"%",	"ro",	"l",	"ABS_X",		"Absolute X position of the enemy."],
	"-9994": 		[10,	"%",	"ro",	"l",	"ABS_Y",		"Absolute Y position of the enemy."],
	"-9993": 		[10,	"%",	"ro",	"l",	"REL_X",		"Relative X position of the enemy."],
	"-9992": 		[10,	"%",	"ro",	"l",	"REL_Y",		"Relative Y position of the enemy."],
	"-9991": 		[10,	"%",	"ro",	"g",	"PLAYER_X",		"Player's X position."],
	"-9990": 		[10,	"%",	"ro",	"g",	"PLAYER_Y",		"Player's Y position."],
	"-9989": 		[10,	"%",	"ro",	"l",	"ANGLE_PLAYER",	"Angle from the enemy to the player."],
	"-9988": 		[10,	"$",	"ro",	"l",	"TIME",			"Time elapsed (TODO: check whether this is time since the enemy spawned or time in the current sub)"],
	"-9987": 		[10,	"%",	"ro",	"g",	"RANDFS",		"Random float from -1.0f to 1.0f."],
	"-9986": 		[10,	"$",	"ro",	"g",	"TIMEOUT",		"Set to 1 by the engine when a timeout occurs."],
	"-9985": 		[10,	"$",	"rw",	"l",	"LOCAL1",		"Local integer variable, inherited by spawned enemies."],
	"-9984": 		[10,	"$",	"rw",	"l",	"LOCAL2",		"Local integer variable, inherited by spawned enemies."],
	"-9983": 		[10,	"$",	"rw",	"l",	"LOCAL3",		"Local integer variable, inherited by spawned enemies."],
	"-9982": 		[10,	"$",	"rw",	"l",	"LOCAL4",		"Local integer variable, inherited by spawned enemies."],
	"-9981": 		[10,	"%",	"rw",	"l",	"LOCALF1",		"Local float variable, inherited by spawned enemies."],
	"-9980": 		[10,	"%",	"rw",	"l",	"LOCALF2",		"Local float variable, inherited by spawned enemies."],
	"-9979": 		[10,	"%",	"rw",	"l",	"LOCALF3",		"Local float variable, inherited by spawned enemies."],
	"-9978": 		[10,	"%",	"rw",	"l",	"LOCALF4",		"Local float variable, inherited by spawned enemies."],
	"-9977": 		[10,	"%",	"ro",	"l",	"FINAL_X2",		"Same as FINAL_X?"],
	"-9976": 		[10,	"%",	"ro",	"l",	"FINAL_Y2",		"Same as FINAL_Y?"],
	"-9975": 		[10,	"%",	"ro",	"l",	"ABS_X2",		"Same as ABS_X?"],
	"-9974": 		[10,	"%",	"ro",	"l",	"ABS_Y2",		"Same as ABS_Y?"],
	"-9973": 		[10,	"%",	"ro",	"l",	"REL_X2",		"Same as REL_X?"],
	"-9972": 		[10,	"%",	"ro",	"l",	"REL_Y2",		"Same as REL_Y?"],
	"-9971": 		[10,	"%",	"ro",	"l",	"ABS_ANGLE",	"Angle of enemy's absolute movement."],
	"-9970": 		[10,	"%",	"ro",	"l",	"REL_ANGLE",	"Angle of enemy's relative movement."],
	"-9969": 		[10,	"%",	"ro",	"l",	"ABS_SPEED",	"Speed of enemy's absolute movement."],
	"-9968": 		[10,	"%",	"ro",	"l",	"REL_SPEED",	"Speed of enemy's relative movement."],
	"-9967": 		[10,	"%",	"ro",	"l",	"ABS_ORIGIN_DIST","Distance from the origin of enemy's absolute circular movement (radius of the circle)."],
	"-9966": 		[10,	"%",	"ro",	"l",	"REL_ORIGIN_DIST","Distance from the origin of enemy's relative circular movement (radius of the circle)."],
	"-9965": 		[10,	"%",	"ro",	"g",	"PLAYER_X2",	"Same as PLAYER_X?"],
	"-9964": 		[10,	"%",	"ro",	"g",	"PLAYER_Y2",	"Same as PLAYER_Y?"],
	"-9963": 		[10,	"%",	"ro",	"g",	"BOSS_X",		"Final X position of the boss."],
	"-9962": 		[10,	"%",	"ro",	"g",	"BOSS_Y",		"Final Y position of the boss."],
	"-9961": 		[10,	"$",	"ro",	"g",	"UNKNOWN61",	"Unknown variable."],
	"-9960": 		[10,	"$",	"ro",	"g",	"RANK",			"TODO: check what this actually is."],
	"-9959": 		[10,	"$",	"ro",	"g",	"DIFF",			"Difficulty (E=0, N=1, H=2, L=3, EX=4, O=5"],
	"-9958": 		[10,	"%",	"ro",	"l",	"FINAL_ANGLE",	"Final angle of enemy's movement."],
	"-9957": 		[10,	"$",	"ro",	"g",	"TRUE",			"Always set to 1?"],
	"-9956": 		[10,	"%",	"ro",	"l",	"ABS_ANGLE_PLAYER","Angle to the player from enemy's absolute position."],
	"-9955": 		[10,	"%",	"ro",	"l",	"REL_ANGLE_PLAYER","Angle to the player from enemy's relative position."],
	"-9954": 		[10,	"$",	"ro",	"l",	"LIFE",			"Enemy's current HP."],
	"-9953": 		[10,	"$",	"ro",	"g",	"EASY",			"Set to 1 if difficulty is easy, othewise it's 0."],
	"-9952": 		[10,	"$",	"ro",	"g",	"NORMAL",		"Set to 1 if difficulty is normal, othewise it's 0."],
	"-9951": 		[10,	"$",	"ro",	"g",	"HARD",			"Set to 1 if difficulty is hard, othewise it's 0."],
	"-9950": 		[10,	"$",	"ro",	"g",	"LUNATIC",		"Set to 1 if difficulty is lunatic, othewise it's 0."],
	"-9949": 		[11,	"$",	"rw",	"g",	"MISS_COUNT",	"Increased by 1 every time the player dies."],
	"-9948": 		[11,	"$",	"rw",	"g",	"BOMB_COUNT",	"Increased by 1 every time the player bombs."],
	"-9947": 		[11,	"$",	"rw",	"g",	"CAPTURE",		"Set to 0 when the player dies, bombs, or uses a game-specific mechanic that \"fails\" a spell."],
	"-9946": 		[11,	"$",	"ro",	"g",	"ENM_COUNT",	"Amount of enemies alive (including main and MapleEnemy)."],
	"-9945": 		[11,	"$",	"ro",	"g",	"SHOTTYPE",		"Numeric value that represents player's shottype, the first shottype is 0."],
	"-9944": 		[11,	"%",	"ro",	"l",	"DIST_PLAYER",	"Distance from the enemy to the player."],
	"-9943": 		[11,	"$",	"rw",	"l",	"BOSS1",		"Local integer variable of the boss (TODO: how does it work exactly?)"],
	"-9942": 		[11,	"$",	"rw",	"l",	"BOSS2",		"Local integer variable of the boss (TODO: how does it work exactly?)"],
	"-9941": 		[11,	"$",	"rw",	"l",	"BOSS3",		"Local integer variable of the boss (TODO: how does it work exactly?)"],
	"-9940": 		[11,	"$",	"rw",	"l",	"BOSS4",		"Local integer variable of the boss (TODO: how does it work exactly?)"],
	"-9939": 		[11,	"%",	"rw",	"l",	"BOSSF1",		"Local float variable of the boss (TODO: how does it work exactly?)"],
	"-9938": 		[11,	"%",	"rw",	"l",	"BOSSF2",		"Local float variable of the boss (TODO: how does it work exactly?)"],
	"-9937": 		[11,	"%",	"rw",	"l",	"BOSSF3",		"Local float variable of the boss (TODO: how does it work exactly?)"],
	"-9936": 		[11,	"%",	"rw",	"l",	"BOSSF4",		"Local float variable of the boss (TODO: how does it work exactly?)"],
	"-9935": 		[11,	"%",	"rw",	"l",	"LOCALF5",		"Local float variable (TODO: is it inherited by spawned enemies?)"],
	"-9934": 		[11,	"%",	"rw",	"l",	"LOCALF6",		"Local float variable (TODO: is it inherited by spawned enemies?)"],
	"-9933": 		[11,	"%",	"rw",	"l",	"LOCALF7",		"Local float variable (TODO: is it inherited by spawned enemies?)"],
	"-9932": 		[11,	"%",	"rw",	"l",	"LOCALF8",		"Local float variable (TODO: is it inherited by spawned enemies?)"],
	"-9931": 		[12,	"$",	"ro",	"g",	"LAST_ENM_ID",	"ID of the last spawned enemy."],
	"-9930": 		[12,	"$",	"ro",	"g",	"POWER",		"Player's power (4.00 => 400)"],
	"-9929": 		[125,	"$",	"ro",	"g",	"DS1",			"Used in Double Spoiler, unknown."],
	"-9928": 		[125,	"$",	"ro",	"g",	"DS2",			"Used in Double Spoiler, unknown."],
	"-9927": 		[125,	"$",	"ro",	"g",	"DS3",			"Used in Double Spoiler, unknown."],
	"-9926": 		[125,	"$",	"rw",	"g",	"GLOBAL1",		"Global integer variable."],
	"-9925": 		[125,	"$",	"rw",	"g",	"GLOBAL2",		"Global integer variable."],
	"-9924": 		[125,	"$",	"rw",	"g",	"GLOBAL3",		"Global integer variable."],
	"-9923": 		[125,	"$",	"rw",	"g",	"GLOBAL4",		"Global integer variable."],
	"-9922": 		[125,	"%",	"rw",	"g",	"GLOBALF1",		"Global float variable."],
	"-9921": 		[125,	"%",	"rw",	"g",	"GLOBALF2",		"Global float variable."],
	"-9920": 		[125,	"%",	"rw",	"g",	"GLOBALF3",		"Global float variable."],
	"-9919": 		[125,	"%",	"rw",	"g",	"GLOBALF4",		"Global float variable."],
	"-9918": 		[125,	"%",	"rw",	"g",	"GLOBALF5",		"Global float variable."],
	"-9917": 		[125,	"%",	"rw",	"g",	"GLOBALF6",		"Global float variable."],
	"-9916": 		[125,	"%",	"rw",	"g",	"GLOBALF7",		"Global float variable."],
	"-9915": 		[125,	"%",	"rw",	"g",	"GLOBALF8",		"Global float variable."],
	"-9914": 		[125,	"$",	"ro",	"l",	"ID",			"ID of the enemy."],
	"-9913": 		[125,	"$",	"ro",	"g",	"DS_PHOTOCOUNT","Used in Double Spoiler, amount of photos taken."],
	"-9912": 		[125,	"$",	"ro",	"g",	"DS4",			"Used in Double Spoiler, unknown."],
	"-9911": 		[125,	"%",	"ro",	"g",	"ANGLE_BOSS",	"Angle at which the boss moves (TODO: verify)"],
	"-9910": 		[125,	"$",	"ro",	"g",	"UNKNOWN10",	"Unknown."],
	"-9909": 		[128,	"$",	"ro",	"l",	"UNKNOWN9",		"Unknown."],
	"-9908": 		[13,	"$",	"ro",	"g",	"KILLABLE_ENM_COUNT","Amount of killable enemies alive (that is, doesn't include hitboxless/intangible enemies etc)."],
	"-9907": 		[13,	"$",	"ro",	"g",	"SPELL_ID",		"Spellcard ID, used by spell practice. Unknown meaning in LoLK."],
	"-9906": 		null,
	"-9905": 		null,
	"-9904": 		[15,	"$",	"ro",	"g",	"MISS_COUNT_GLOBAL","Amount of misses throughout the entire game."],
	"-9903": 		[16,	"$",	"ro",	"g",	"SUBSEASON",	"Selected subseason (TODO: which season is which number?)"],
};

let generatedVarTable = "";
function generateVarTable() {
	if (generatedVarTable) return generatedVarTable;
	let html = "";
	html += "<table>";
	html += "<tr><th>ID</th><th>type</th><th>access</th><th>scoping</th><th>name</th><th>description</th></tr>";
	for (let i=-10000; typeof VARS[i] != "undefined"; i++) {
		html += getVarTableRow(VARS[i], i);
	}
	html += "</table>";
	html = MD.makeHtml(html);
	generatedVarTable = html;
	return html;
}

function getVarTableRow(entry, id) {
	if (entry == null) return "";
	let [game, type, access, scope, name, desc] = entry;
	let idString = id + (type == "$" ? "" : ".0f");
	let typeString = type == "$" ? "int" : "float";
	let accessString = access == "rw" ? "read/write" : "read-only";
	let scopeString = scope == "g" ? "global" : "local";
	return `<tr style='color:%GAMECOLOR-${game}%'><td>${idString}</td><td>${typeString}</td><td>${accessString}</td><td>${scopeString}</td><td>${type+name}</td><td>${desc}</td></tr>`;
}

const INS = {
	518: {
		number: 518,
		game: 13,
		args: "S",
		argnames: ["dialogueId"],
		name: "Dialogue_read",
		description: "Starts a dialogue, %1 is the ID of an entry in the .msg file. Apart from that, has the effect of opcode 525 (killOtherEnemies)."
	},
	525: {
		number: 525,
		game: 13,
		args: "",
		argnames: [],
		name: "killOtherEnemies",
		description: "Kills all other enemies (unless they have a flag that prevents that set)."
	},
	547: {
		number: 547,
		game: 13,
		args: "f",
		argnames: ["s"],
		name: "gameSpeed",
		description: "Sets game speed to %1 of the normal speed. In [game=143]ISC[/game], enemies with flag 13 (dec=8192) set will ignore effects of this opcode."
	},
	615: {
		number: 615,
		game: 13,
		args: "f",
		argnames: ["r"],
		name: "Et_clearRadius",
		description: "Clears all bullets in a circle of radius %1 around the enemy that called it, and turns them into cancel items."
	}
}

const ARGTYPES = {
	"S": "int",
	"f": "float"
}

function addTooltips(txt) {
	let codeTags = txt.match(/`(.*?)`/g);
	let dupes = [];
	if (codeTags == null) return txt;
	for (let i=0; i<codeTags.length; i++) {
		let expr = codeTags[i].substring(1, codeTags[i].length-1);
		if (dupes.indexOf(expr) > -1) continue;
		dupes.push(expr);
		let tip;
		if (expr.charAt(0) == "%" || expr.substring(0, 2) == "¨D") tip = getVarTip(expr);
		else tip = getOpcodeTip(expr);
		if (tip) {
			tip = MD.makeHtml(tip).replace(/'/g, "&apos;");
			txt = txt.replace(new RegExp("`"+expr+"`", "g"), "<span data-tip='"+tip+"'>`"+expr+"`</span>");
		}
	}
	return txt;
}

function getVarTip(expr) {
	let [entry, id] = getVariableByName(expr);
	if (entry == null) return "";
	let [game, type, access, scope, name, desc] = entry;
	let idString = id + (type == "$" ? "" : ".0f");
	let typeString = type == "$" ? "int" : "float";
	let accessString = access == "rw" ? "read/write" : "read-only";
	let scopeString = scope == "g" ? "global" : "local";
	let tip = `**${idString} - ${type+name}** - ${scopeString}, ${accessString}, ${typeString} variable[br][hr]${desc}`;
	return tip;
}

function getVariableByName(expr) {
	let type, name;
	if (expr.charAt(0) == "%") {
		type = "%";
		name = expr.substring(1);
	} else {
		type = "$";
		name = expr.substring(2);
	}
	for (let i in VARS) {
		if (VARS[i] == null) continue;
		if (VARS[i][4] == name && VARS[i][1] == type) return [VARS[i], i];
	}
	return [null, -1];
}

function getOpcodeTip(expr) {
	let opcode = getOpcodeByName(expr);
	if (opcode == null) return "";
	let args = "";
	let desc = opcode.description;
	for (let i=0; i<opcode.args.length; i++) {
		if (i > 0) args += ", ";
		args += ARGTYPES[opcode.args[i]] + " " + opcode.argnames[i];
		desc = desc.replace("%"+(i+1), "`"+opcode.argnames[i]+"`");
	}
	return `**${opcode.number} - ${opcode.name}(${args})**[br][hr]${desc}`;
}

function getOpcodeByName(name) {
	for (let i in INS) {
		if (INS[i].name == name) return INS[i];
	}
	return null;
}