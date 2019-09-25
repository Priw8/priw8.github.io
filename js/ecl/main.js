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

function getOpcode(game, num) {
	for (let i=0; i<INS.length; ++i) {
		const ins = INS[i];
		if (game >= ins.game && ins.number == num) return ins;
	}
	return null;
}

function generateOpcodeTable(game) {
	let html = "";
	let handledOpcodes = [];
	html += "<table>";
	html += "<tr><th>ID</th><th>name</th><th>parameters</th><th>description</th></tr>";
	for (let i=0; i<INS.length; ++i) {
		const ins = INS[i];
		if (game >= ins.game && handledOpcodes.indexOf(ins.number) == -1) {
			handledOpcodes.push(ins.number);
			html += generateOpcodeTableEntry(ins);
		}
	}
	return html;
}

function generateOpcodeTableEntry(ins) {
	return `
<tr>
	<td>${ins.number}</td>
	<td>${getOpcodeName(ins)}
	<td>${generateOpcodeParameters(ins)}
	<td>${generateOpcodeDesc(ins)}</td>
</tr>
`;
}

function getOpcodeName(ins) {
	if (currentMap != null) 
		return currentMap.getMnemonic(ins.number);
	else
		return `ins_${ins.number}`; 
}

function generateOpcodeParameters(ins) {
	let ret = "";
	for (let i=0; i<ins.args.length; ++i) {
		if (i != 0) ret += ", ";
		ret += ARGTYPES[ins.args[i]] + " " + ins.argnames[i];
	}
	return ret;
}

function generateOpcodeDesc(ins) {
	let ret = ins.description;
	for (let i=0; i<ins.args.length; i++) {
		ret = ret.replace(new RegExp("%"+(i+1), "g"), "`"+ins.argnames[i]+"`");
	}
	return MD.makeHtml(ret);
}

function getOpcodeTip(ins) {
	return escapeTip(`<br><b>${ins.number} - ${getOpcodeName(ins)}(${generateOpcodeParameters(ins)})</b><br><hr>${generateOpcodeDesc(ins)}`);
}

function escapeTip(tip) {
	return tip.replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/_/g, "_").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\[ins=\]/, "[ins_notip=");
}
