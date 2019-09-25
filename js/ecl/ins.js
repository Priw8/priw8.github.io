const INS = {
	300: {
		number: 300,
		game: 13,
		args: "mffSSS",
		argnames: ["sub", "x", "y", "hp", "score", "item"],
		name: "Enm_create",
		description: "Creates an enemy using subroutine %1 at coordinates %2, %3 (relative to position of enemy that called it), health of created enemy is %4, score bonus is %5 and item drop is %6."
	},
	311: {
		number: 311,
		game: 13,
		args: "mffSSS",
		argnames: ["sub", "x", "y", "hp", "score", "item"],
		name: "Enm_createMF",
		description: "Creates a mirrored filler enemy using subroutine %1 at coordinates %2, %3 (relative to position of enemy that called it), health of created enemy is %4, score bonus is %5 and item drop is %6."
	},
	327: {
		number: 327,
		game: 13,
		args: "SS",
		argnames: ["slot", "alpha"],
		name: "Anm_alpha",
		description: "Sets alpha of ANM script on slot %1 to %2 (must be a value between 0-255)"
	},
	328: {
		number: 328,
		game: 13,
		args: "SSSS",
		argnames: ["slot", "time", "mode", "alpha"],
		name: "Anm_alphaTime",
		description: "Change alpha of ANM script on slot %1 to %4 (must be a value between 0-255) in %2 frames using mode %3."
	},
	400: {
		number: 400,
		game: 13,
		args: "ff",
		argnames: ["x", "y"],
		name: "Move_pos",
		description: "Immidiately sets enemy's absolute position to %1, %2."
	},
	401: {
		number: 401,
		game: 13,
		args: "SSff",
		argnames: ["time", "mode", "x", "y"],
		name: "Move_posTime",
		description: "Change enemy's absolute position to %3, %4 in %1 frames using mode %2."
	},
	402: {
		number: 402,
		game: 13,
		args: "ff",
		argnames: ["x", "y"],
		name: "Move_posRel",
		description: "Immidiately sets enemy's relative position to %1, %2."
	},
	403: {
		number: 403,
		game: 13,
		args: "SSff",
		argnames: ["time", "mode", "x", "y"],
		name: "Move_posRelTime",
		description: "Change enemy's relative position to %3, %4 in %1 frames using mode %2."
	},
	431: {
		number: 431,
		game: 13,
		args: "SSff",
		argnames: ["time", "mode", "angle", "spd"],
		name: "Move_velNMRelTime",
		description: "Change enemy's relative angle to %3 and relative speed to %4 in %1 frames using mode %2. Ignores the mirror flag."
	},
	502: {
		number: 502,
		game: 13,
		args: "S",
		argnames: ["n"],
		name: "setFlag",
		description: "Sets flag(s) according to %1. Refer to the flag table for exact values."
	},
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
	"f": "float",
	"m": "string"
}