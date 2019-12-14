const VARLIMIT_8 = [10000, 10100];
const VARLIMIT_10 = [-10000, -9950];
const VARLIMIT_11 = [-10000, -9932];
const VARLIMIT_12 = [-10000, -9930];
const VARLIMIT_125 = [-10000, -9910];
const VARLIMIT_128 = [-10000, -9909];
const VARLIMIT_13 = [-10000, -9907];
const VARLIMIT_14 = [-10000, -9907];
const VARLIMIT_143 = [-10000, -9907];
const VARLIMIT_15 = [-10000, -9904];
const VARLIMIT_16 = [-10000, -9903];
const VARLIMIT_165 = [-10000, -9903];
const VARLIMIT_17 = [-10000, -9899];

const VAR_8 = {};

const VAR_10 = {
    "-10000": {
        number: -10000,
        game: 10,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Random integer, very large range.",
        documented: true
    },
    "-9999": {
        number: -9999,
        game: 10,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Random float from 0.0f to 1.0f.",
        documented: true
    },
    "-9998": {
        number: -9998,
        game: 10,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Random float from -pi to pi.",
        documented: true
    },
    "-9997": {
        number: -9997,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Final X position of the enemy.",
        documented: true
    },
    "-9996": {
        number: -9996,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Final Y position of the enemy.",
        documented: true
    },
    "-9995": {
        number: -9995,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Absolute X position of the enemy.",
        documented: true
    },
    "-9994": {
        number: -9994,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Absolute Y position of the enemy.",
        documented: true
    },
    "-9993": {
        number: -9993,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Relative X position of the enemy.",
        documented: true
    },
    "-9992": {
        number: -9992,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Relative Y position of the enemy.",
        documented: true
    },
    "-9991": {
        number: -9991,
        game: 10,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Player's X position.",
        documented: true
    },
    "-9990": {
        number: -9990,
        game: 10,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Player's Y position.",
        documented: true
    },
    "-9989": {
        number: -9989,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Angle from the enemy to the player.",
        documented: true
    },
    "-9988": {
        number: -9988,
        game: 10,
        type: "$",
        access: "ro",
        scope: "l",
        desc: "Time elapsed since the enemy spawned, in frames.",
        documented: true
    },
    "-9987": {
        number: -9987,
        game: 10,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Random float from -1.0f to 1.0f.",
        documented: true
    },
    "-9986": {
        number: -9986,
        game: 10,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Set to 1 by the engine when a timeout occurs.",
        documented: true
    },
    "-9985": {
        number: -9985,
        game: 10,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Local integer variable, inherited by spawned enemies.",
        documented: true
    },
    "-9984": {
        number: -9984,
        game: 10,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Local integer variable, inherited by spawned enemies.",
        documented: true
    },
    "-9983": {
        number: -9983,
        game: 10,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Local integer variable, inherited by spawned enemies.",
        documented: true
    },
    "-9982": {
        number: -9982,
        game: 10,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Local integer variable, inherited by spawned enemies.",
        documented: true
    },
    "-9981": {
        number: -9981,
        game: 10,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable, inherited by spawned enemies.",
        documented: true
    },
    "-9980": {
        number: -9980,
        game: 10,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable, inherited by spawned enemies.",
        documented: true
    },
    "-9979": {
        number: -9979,
        game: 10,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable, inherited by spawned enemies.",
        documented: true
    },
    "-9978": {
        number: -9978,
        game: 10,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable, inherited by spawned enemies.",
        documented: true
    },
    "-9977": {
        number: -9977,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Same as [var=-9997,10]?",
        documented: false
    },
    "-9976": {
        number: -9976,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Same as [var=-9996,10]?",
        documented: false
    },
    "-9975": {
        number: -9975,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Same as [var=-9995,10]??",
        documented: false
    },
    "-9974": {
        number: -9974,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Same as [var=-9994,10]?",
        documented: false
    },
    "-9973": {
        number: -9973,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Same as [var=-9993,10]?",
        documented: false
    },
    "-9972": {
        number: -9972,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Same as [var=-9992,10]?",
        documented: false
    },
    "-9971": {
        number: -9971,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Angle of enemy's absolute movement.",
        documented: true
    },
    "-9970": {
        number: -9970,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Angle of enemy's relative movement.",
        documented: true
    },
    "-9969": {
        number: -9969,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Speed of enemy's absolute movement.",
        documented: true
    },
    "-9968": {
        number: -9968,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Speed of enemy's relative movement.",
        documented: true
    },
    "-9967": {
        number: -9967,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Distance from the origin of enemy's absolute circular movement (radius of the circle).",
        documented: true
    },
    "-9966": {
        number: -9966,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Distance from the origin of enemy's relative circular movement (radius of the circle).",
        documented: true
    },
    "-9965": {
        number: -9965,
        game: 10,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Same as [var=-9991,10]?",
        documented: false
    },
    "-9964": {
        number: -9964,
        game: 10,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Same as [var=-9990,10]?",
        documented: false
    },
    "-9963": {
        number: -9963,
        game: 10,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Final X position of the boss.",
        documented: true
    },
    "-9962": {
        number: -9962,
        game: 10,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Final Y position of the boss.",
        documented: true
    },
    "-9961": {
        number: -9961,
        game: 10,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "[c=red]Unknown variable.[/c]",
        documented: false
    },
    "-9960": {
        number: -9960,
        game: 10,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Numeric value of rank, ranging from -1024 to 1024. Increases over time and decreases when player bombs/dies etc.",
        documented: true
    },
    "-9959": {
        number: -9959,
        game: 10,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Difficulty (E=0, N=1, H=2, L=3, EX=4)",
        documented: true
    },
    "-9958": {
        number: -9958,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Final angle of enemy's movement.",
        documented: true
    },
    "-9957": {
        number: -9957,
        game: 10,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Always set to 1?",
        documented: false
    },
    "-9956": {
        number: -9956,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Angle to the player from enemy's absolute position.",
        documented: true
    },
    "-9955": {
        number: -9955,
        game: 10,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Angle to the player from enemy's relative position.",
        documented: true
    },
    "-9954": {
        number: -9954,
        game: 10,
        type: "$",
        access: "ro",
        scope: "l",
        desc: "Enemy's current HP.",
        documented: true
    },
    "-9953": {
        number: -9953,
        game: 10,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Set to 1 if difficulty is easy, othewise it's 0.",
        documented: true
    },
    "-9952": {
        number: -9952,
        game: 10,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Set to 1 if difficulty is normal, othewise it's 0.",
        documented: true
    },
    "-9951": {
        number: -9951,
        game: 10,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Set to 1 if difficulty is hard, othewise it's 0.",
        documented: true
    },
    "-9950": {
        number: -9950,
        game: 10,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Set to 1 if difficulty is lunatic, othewise it's 0.",
        documented: true
    }
}

const VAR_11 = {
    "-9949": {
        number: -9949,
        game: 11,
        type: "$",
        access: "rw",
        scope: "g",
        desc: "Increased by 1 every time the player dies.",
        documented: true
    },
    "-9948": {
        number: -9948,
        game: 11,
        type: "$",
        access: "rw",
        scope: "g",
        desc: "Increased by 1 every time the player bombs.",
        documented: true
    },
    "-9947": {
        number: -9947,
        game: 11,
        type: "$",
        access: "rw",
        scope: "g",
        desc: "Set to 0 when the player dies, bombs, or uses a game-specific mechanic that \"fails\" a spell.",
        documented: true
    },
    "-9946": {
        number: -9946,
        game: 11,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Amount of enemies alive (including main and MapleEnemy).",
        documented: true
    },
    "-9945": {
        number: -9945,
        game: 11,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Numeric value that represents player's shottype, the first shottype is 0.",
        documented: true
    },
    "-9944": {
        number: -9944,
        game: 11,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Distance from the enemy to the player.",
        documented: true
    },
    "-9943": {
        number: -9943,
        game: 11,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Local integer variable of the boss (TODO: how does it work exactly?)",
        documented: false
    },
    "-9942": {
        number: -9942,
        game: 11,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Local integer variable of the boss (TODO: how does it work exactly?)",
        documented: false
    },
    "-9941": {
        number: -9941,
        game: 11,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Local integer variable of the boss (TODO: how does it work exactly?)",
        documented: false
    },
    "-9940": {
        number: -9940,
        game: 11,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Local integer variable of the boss (TODO: how does it work exactly?)",
        documented: false
    },
    "-9939": {
        number: -9939,
        game: 11,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable of the boss (TODO: how does it work exactly?)",
        documented: false
    },
    "-9938": {
        number: -9938,
        game: 11,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable of the boss (TODO: how does it work exactly?)",
        documented: false
    },
    "-9937": {
        number: -9937,
        game: 11,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable of the boss (TODO: how does it work exactly?)",
        documented: false
    },
    "-9936": {
        number: -9936,
        game: 11,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable of the boss (TODO: how does it work exactly?)",
        documented: false
    },
    "-9935": {
        number: -9935,
        game: 11,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable (TODO: is it inherited by spawned enemies?)",
        documented: false
    },
    "-9934": {
        number: -9934,
        game: 11,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable (TODO: is it inherited by spawned enemies?)",
        documented: false
    },
    "-9933": {
        number: -9933,
        game: 11,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable (TODO: is it inherited by spawned enemies?)",
        documented: false
    },
    "-9932": {
        number: -9932,
        game: 11,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Local float variable (TODO: is it inherited by spawned enemies?)",
        documented: false
    }
}

const VAR_12 = {
    "-9931": {
        number: -9931,
        game: 12,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "ID of the last spawned enemy.",
        documented: true
    },
    "-9930": {
        number: -9930,
        game: 12,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Player's power (4.00 => 400)",
        documented: true
    }
}

const VAR_125 = {
    "-9929": {
        number: -9929,
        game: 125,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "[c=red]Used in Double Spoiler, unknown.[/c]",
        documented: false
    },
    "-9928": {
        number: -9928,
        game: 125,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "[c=red]Used in Double Spoiler, unknown.[/c]",
        documented: false
    },
    "-9927": {
        number: -9927,
        game: 125,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "[c=red]Used in Double Spoiler, unknown.[/c]",
        documented: false
    },
    "-9926": {
        number: -9926,
        game: 125,
        type: "$",
        access: "rw",
        scope: "g",
        desc: "Global integer variable.",
        documented: true
    },
    "-9925": {
        number: -9925,
        game: 125,
        type: "$",
        access: "rw",
        scope: "g",
        desc: "Global integer variable.",
        documented: true
    },
    "-9924": {
        number: -9924,
        game: 125,
        type: "$",
        access: "rw",
        scope: "g",
        desc: "Global integer variable.",
        documented: true
    },
    "-9923": {
        number: -9923,
        game: 125,
        type: "$",
        access: "rw",
        scope: "g",
        desc: "Global integer variable.",
        documented: true
    },
    "-9922": {
        number: -9922,
        game: 125,
        type: "%",
        access: "rw",
        scope: "g",
        desc: "Global float variable.",
        documented: true
    },
    "-9921": {
        number: -9921,
        game: 125,
        type: "%",
        access: "rw",
        scope: "g",
        desc: "Global float variable.",
        documented: true
    },
    "-9920": {
        number: -9920,
        game: 125,
        type: "%",
        access: "rw",
        scope: "g",
        desc: "Global float variable.",
        documented: true
    },
    "-9919": {
        number: -9919,
        game: 125,
        type: "%",
        access: "rw",
        scope: "g",
        desc: "Global float variable.",
        documented: true
    },
    "-9918": {
        number: -9918,
        game: 125,
        type: "%",
        access: "rw",
        scope: "g",
        desc: "Global float variable.",
        documented: true
    },
    "-9917": {
        number: -9917,
        game: 125,
        type: "%",
        access: "rw",
        scope: "g",
        desc: "Global float variable.",
        documented: true
    },
    "-9916": {
        number: -9916,
        game: 125,
        type: "%",
        access: "rw",
        scope: "g",
        desc: "Global float variable.",
        documented: true
    },
    "-9915": {
        number: -9915,
        game: 125,
        type: "%",
        access: "rw",
        scope: "g",
        desc: "Global float variable.",
        documented: true
    },
    "-9914": {
        number: -9914,
        game: 125,
        type: "$",
        access: "ro",
        scope: "l",
        desc: "ID of the enemy.",
        documented: true
    },
    "-9913": {
        number: -9913,
        game: 125,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Used in Double Spoiler, amount of photos taken.",
        documented: true
    },
    "-9912": {
        number: -9912,
        game: 125,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "[c=red]Used in Double Spoiler, unknown.[/c]",
        documented: false
    },
    "-9911": {
        number: -9911,
        game: 125,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Angle at which the boss moves.",
        documented: true
    },
    "-9910": {
        number: -9910,
        game: 125,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "[c=red]Unknown.[/c]",
        documented: false
    }
}

const VAR_128 = {
    "-9909": {
        number: -9909,
        game: 128,
        type: "$",
        access: "ro",
        scope: "l",
        desc: "[c=red]Unknown.[/c]",
        documented: false
    }
}

const VAR_13 = {
	"-9959": {
        number: -9959,
        game: 10,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Difficulty (E=0, N=1, H=2, L=3, EX=4, O=5)",
        documented: true
    },
    "-9908": {
        number: -9908,
        game: 13,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Amount of killable enemies alive (that is, doesn't include hitboxless/intangible enemies etc).",
        documented: true
    },
    "-9907": {
        number: -9907,
        game: 13,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Spellcard ID, used by spell practice. Unknown meaning in LoLK.",
        documented: true
    }
}

const VAR_14 = {};

const VAR_143 = {};

const VAR_15 = {
    "-9906": {
        number: -9906,
        game: 15,
        type: "$",
        access: "ro",
        scope: "l",
        desc: "Mirror flag state, either 0 or 1. TODO: verify game version",
        documented: false
	},
	"-9905": {
        number: -9905,
        game: 15,
        type: "$",
        access: "ro",
        scope: "l",
        desc: "[c=red]Unknown.[/c]",
        documented: false
    },
    "-9904": {
        number: -9904,
        game: 15,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Amount of misses throughout the entire game.",
        documented: true
    }
};

const VAR_16 = {
    "-9903": {
        number: -9903,
        game: 16,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Selected subseason. Spring = 0, summer = 1, autumn = 2, winter = 3, extra subseason = 4.",
        documented: true
    }
}

const VAR_165 = {};

const VAR_17 = {
	"-9903": {
		number: -9903,
		game: 17,
		type: "$",
		access: "ro",
		scope: "g",
		desc: "Currently active hyper. Otter = 2, rest needs to be researched.",
		documented: false
	},
    "-9902": {
        number: -9902,
        game: 17,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Increases whenever you graze something, but also decreases very quickly. Used by st4 midboss.",
        documented: true
    },
    "-9901": {
        number: -9901,
        game: 17,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Amount of tokens currently flying around the screen. Used by st5 midboss.",
        documented: true
    },
    "-9900": {
        number: -9900,
        game: 17,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Set to 1 when player is in the state of hyperdying, that is, right after breaking a hyper. Used by st6 midboss.",
        documented: true
    },
    "-9899": {
        number: -9899,
        game: 17,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Set to 1 when the stage was loaded through the achievement menu, otherwise -1.",
        documented: true
    }
};
