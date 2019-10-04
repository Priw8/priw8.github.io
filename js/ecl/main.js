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

function normalizeGameVersion(num) {
	while(Math.floor(num) != num) num *= 10;
	return num;
}

function getGroups(game) {
	switch(game) {
		case 13:  return GROUPS_13;
		case 14:  return GROUPS_14;
		case 143: return GROUPS_143;
		case 15:  return GROUPS_15;
		case 16:  return GROUPS_16;
		case 165: return GROUPS_165;
		case 17:  return GROUPS_17;
	}
}

function getOpcodeFromList(list, num) {
	let ret = list[num];
	if (typeof ret == "undefined") return null;
	return ret;
}

function getOpcodeNoCheck(game, num) {
	let ret = null;
	switch(game) {
		// Inherits ins from previous versions.
		case 17:
			ret = getOpcodeFromList(INS_17, num);
		case 165:
			if (!ret) ret = getOpcodeFromList(INS_165, num);
		case 16:
			if (!ret) ret = getOpcodeFromList(INS_16, num);
		case 15:
			if (!ret) ret = getOpcodeFromList(INS_15, num);
		case 143:
			if (!ret) ret = getOpcodeFromList(INS_143, num);
		case 14:
			if (!ret) ret = getOpcodeFromList(INS_14, num);
		case 13:
			if (!ret) ret = getOpcodeFromList(INS_13, num);
	}
	return ret;
}

function getOpcode(game, num) {
	game = normalizeGameVersion(game);
	const groups = getGroups(game);
	// check if the given opcode number exists in the given version.
	let exists = false;
	for (let i=0; i<groups.length; ++i) {
		const group = groups[i];
		if (group.min <= num && group.max >= num) {
			exists = true;
			break;
		}
	}

	if (exists) return getOpcodeNoCheck(game, num);

	return null;
}

function generateOpcodeTable(game) {
	const normalized = normalizeGameVersion(game);
	let html = MD.makeHtml(`Current table: [game=${normalized}] version ${game}[/game]`);
	// let handledOpcodes = [];
	let table = "";

	let total = 0;
	let documented = 0;
	const groups = getGroups(normalized);
	for (let i=0; i<groups.length; ++i) {
		const group = groups[i];

		table += `<br><h2>${group.min}-${group.max}: ${group.title}</h2>`;
		table += "<table class='ins-table'>";
		table += "<tr><th class='ins-id'>ID</th><th class='ins-name'>name</th><th class='ins-args'>parameters</th><th class='ins-desc'>description</th></tr>";

		for (let num=group.min; num<=group.max; ++num) {
			const ins = getOpcodeNoCheck(normalized, num);
			total += 1;
			if (ins != null) documented += 1;
			table += generateOpcodeTableEntry(ins, num);
		}

		table += "</table>";
	}
	html += `Documented instructions: ${documented}/${total} (${(documented/total*100).toFixed(2)}%)`;
	html += table;
	return html;
}

function generateOpcodeTableEntry(ins, num) {
	return `
<tr>
	<td>${num}</td>
	<td>${getOpcodeName(num)}
	<td>${generateOpcodeParameters(ins)}
	<td>${generateOpcodeDesc(ins)}</td>
</tr>
`;
}

function getOpcodeName(num) {
	if (currentMap != null) 
		return currentMap.getMnemonic(num);
	else
		return `ins_${num}`; 
}

function generateOpcodeParameters(ins) {
	if (ins == null) return "<span style='color:gray'>No data available.</span>";;

	let ret = "";
	for (let i=0; i<ins.args.length; ++i) {
		if (i != 0) ret += ", ";
		ret += ARGTYPES[ins.args[i]] + " " + ins.argnames[i];
	}
	return ret;
}

function generateOpcodeDesc(ins) {
	if (ins == null) return "<span style='color:gray'>No description available.</span>";

	let ret = ins.description;
	for (let i=0; i<ins.args.length; i++) {
		ret = ret.replace(new RegExp("%"+(i+1), "g"), "`"+ins.argnames[i]+"`");
	}
	return MD.makeHtml(ret);
}

function getOpcodeTip(ins) {
	return escapeTip(`<br><b>${ins.number} - ${getOpcodeName(ins.number)}(${generateOpcodeParameters(ins)})</b><br><hr>${generateOpcodeDesc(ins)}`);
}

function escapeTip(tip) {
	return tip.replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/_/g, "_").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\[ins=\]/, "[ins_notip=");
}
