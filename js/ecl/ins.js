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