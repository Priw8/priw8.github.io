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

const VAR_8 = {
    10000: {
        number: 10000,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10001: {
        number: 10001,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10002: {
        number: 10002,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10003: {
        number: 10003,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10004: {
        number: 10004,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10005: {
        number: 10005,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10006: {
        number: 10006,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10007: {
        number: 10007,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10008: {
        number: 10008,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10009: {
        number: 10009,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10010: {
        number: 10010,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10011: {
        number: 10011,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10012: {
        number: 10012,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10013: {
        number: 10013,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10014: {
        number: 10014,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10015: {
        number: 10015,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10016: {
        number: 10016,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10017: {
        number: 10017,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10018: {
        number: 10018,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10019: {
        number: 10019,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10020: {
        number: 10020,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10021: {
        number: 10021,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10022: {
        number: 10022,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10023: {
        number: 10023,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10024: {
        number: 10024,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10025: {
        number: 10025,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10026: {
        number: 10026,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10027: {
        number: 10027,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10028: {
        number: 10028,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10029: {
        number: 10029,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10030: {
        number: 10030,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10031: {
        number: 10031,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Does NOT get inherited by spawned enemies.",
        documented: true
    },
    10032: {
        number: 10032,
        game: 8,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Random integer, very large range.",
        documented: true
    },
    10033: {
        number: 10033,
        game: 8,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Random float between 0.0f and 1.0f.",
        documented: true
    },
    10035: {
        number: 10035,
        game: 8,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Random float between -1.0f and 1.0f",
        documented: true
    },
    10036: {
        number: 10036,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10037: {
        number: 10037,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10038: {
        number: 10038,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10039: {
        number: 10039,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Integer variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10040: {
        number: 10040,
        game: 8,
        type: "$",
        access: "rw",
        scope: "g",
        desc: "Difficulty. (0 = easy, 1 = normal, 2 = hard, 3 = lunatic, 4 = extra)",
        documented: true
    },
    10041: {
        number: 10041,
        game: 8,
        type: "$",
        access: "rw",
        scope: "g",
        desc: "Current rank value",
        documented: true
    },
    10042: {
        number: 10042,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "X position of the enemy.",
        documented: true
    },
    10043: {
        number: 10043,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Y position of the enemy.",
        documented: true
    },
    10044: {
        number: 10044,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Z position of the enemy. (unused)",
        documented: true
    },
    10045: {
        number: 10045,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "X position of the player.",
        documented: true
    },
    10046: {
        number: 10046,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Y position of the player.",
        documented: true
    },
    10047: {
        number: 10047,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Z position of the player. (unused)",
        documented: true
    },
    10048: {
        number: 10048,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Angle from the enemy to the player.",
        documented: true
    },
    10049: {
        number: 10049,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Time elapsed since enemy spawn, in frames.",
        documented: true
    },
    10050: {
        number: 10050,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Distance from the enemy to the player.",
        documented: true
    },
    10051: {
        number: 10051,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Current life of the enemy.",
        documented: true
    },
    10052: {
        number: 10052,
        game: 8,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Shottype. (0 = Border Team, 1 = Magic Team, 2 = Scarlet team, 3 = Netherworld Team, 4 = solo Reimu, 5 = solo Yukari, etc..",
        documented: true
    },
    10053: {
        number: 10053,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Function-Wide integer.",
        documented: true
    },
    10054: {
        number: 10054,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Function-Wide integer.",
        documented: true
    },
    10055: {
        number: 10055,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Function-Wide integer.",
        documented: true
    },
    10056: {
        number: 10056,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Function-Wide integer.",
        documented: true
    },
    10057: {
        number: 10057,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Function-Wide float.",
        documented: true
    },
    10058: {
        number: 10058,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Function-Wide float.",
        documented: true
    },
    10059: {
        number: 10059,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Function-Wide float.",
        documented: true
    },
    10060: {
        number: 10060,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Function-Wide float.",
        documented: true
    },
    10061: {
        number: 10061,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Function-Wide integer. When a sub is called, the value is copied to [var=10053,8] in the called sub.",
        documented: true
    },
    10062: {
        number: 10062,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Function-Wide integer. When a sub is called, the value is copied to [var=10054,8] in the called sub.",
        documented: true
    },
    10063: {
        number: 10063,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Function-Wide integer. When a sub is called, the value is copied to [var=10055,8] in the called sub.",
        documented: true
    },
    10064: {
        number: 10064,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Function-Wide integer. When a sub is called, the value is copied to [var=10056,8] in the called sub.",
        documented: true
    },
    10065: {
        number: 10065,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Function-Wide float. When a sub is called, the value is copied to [var=10057,8] in the called sub.",
        documented: true
    },
    10066: {
        number: 10066,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Function-Wide float. When a sub is called, the value is copied to [var=10058,8] in the called sub.",
        documented: true
    },
    10067: {
        number: 10067,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Function-Wide float. When a sub is called, the value is copied to [var=10059,8] in the called sub.",
        documented: true
    },
    10068: {
        number: 10068,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Function-Wide float. When a sub is called, the value is copied to [var=10060,8] in the called sub.",
        documented: true
    },
    10069: {
        number: 10069,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Angle of the enemy's movement.",
        documented: true
    },
    10070: {
        number: 10070,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Angular velocity of the enemy.",
        documented: true
    },
    10071: {
        number: 10071,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Speed of the enemy.",
        documented: true
    },
    10072: {
        number: 10072,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Acceleration of the enemy.",
        documented: true
    },
    10073: {
        number: 10073,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Radius of enemy's circle movement.",
        documented: true
    },
    10074: {
        number: 10074,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Spawn X of the enemy.",
        documented: true
    },
    10075: {
        number: 10075,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Spawn Y of the enemy.",
        documented: true
    },
    10076: {
        number: 10076,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Spawn Z of the enemy. (unused)",
        documented: true
    },
    10077: {
        number: 10077,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Current angle in circle movement.",
        documented: true
    },
    10078: {
        number: 10078,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Current rotation speed in circle movement.",
        documented: true
    },
    10079: {
        number: 10079,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Movement Target X of the enemy.",
        documented: true
    },
    10080: {
        number: 10080,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Movement Target Y of the enemy.",
        documented: true
    },
    10081: {
        number: 10081,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Movement Target Z of the enemy.",
        documented: true
    },
    10082: {
        number: 10082,
        game: 8,
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Random float between -pi and pi",
        documented: true
    },
    10083: {
        number: 10083,
        game: 8,
        type: "%",
        access: "ro",
        scope: "l",
        desc: "Amount of damage the enemy received on the previous frame.",
        documented: true
    },
    10084: {
        number: 10084,
        game: 8,
        type: "$",
        access: "ro",
        scope: "l",
        desc: "If enemy is a boss, then it's the argument passed to [ins=127,8]. If enemy is not a boss, this could be whatever (but 0 by default).",
        documented: true
    },
    10085: {
        number: 10085,
        game: 8,
        type: "%",
        access: "rw",
        scope: "g",
        desc: "Some X coordinate?",
        documented: false
    },
    10086: {
        number: 10086,
        game: 8,
        type: "%",
        access: "rw",
        scope: "g",
        desc: "Some Y coordinate?",
        documented: false
    },
    10087: {
        number: 10087,
        game: 8,
        type: "%",
        access: "rw",
        scope: "g",
        desc: "Some Z coordinate?",
        documented: false
    },
    10088: {
        number: 10088,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Life threshold of the enemy. Set with [ins=133,8].",
        documented: true
    },
    10089: {
        number: 10089,
        game: 8,
        type: "$",
        access: "ro",
        scope: "l",
        desc: "Unknown.",
        documented: false
    },
    10090: {
        number: 10090,
        game: 8,
        type: "$",
        access: "ro",
        scope: "l",
        desc: "Unknown.",
        documented: false
    },
    10091: {
        number: 10091,
        game: 8,
        type: "$",
        access: "ro",
        scope: "l",
        desc: "Unknown.",
        documented: false
    },
    10092: {
        number: 10092,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "Value set by [ins=143,8].",
        documented: true
    },
    10093: {
        number: 10093,
        game: 8,
        type: "$",
        access: "rw",
        scope: "l",
        desc: "The score reward upon killing the enemy.",
        documented: true
    },
    10094: {
        number: 10094,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10095: {
        number: 10095,
        game: 8,
        type: "%",
        access: "rw",
        scope: "l",
        desc: "Float variable local to the enemy. Inherited by spawned enemies.",
        documented: true
    },
    10096: {
        number: 10096,
        game: 8,
        type: "$",
        access: "ro",
        scope: "l",
        desc: "Amount of familiars active that were spawned by the enemy.",
        documented: true
    },
    10097: {
        number: 10097,
        game: 8,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Set to 1 if player is currently a Youkai.",
        documented: true
    },
    10098: {
        number: 10098,
        game: 8,
        type: "$",
        access: "r",
        scope: "g",
        desc: "Set to 1 if time threshold for the current stage has been met.",
        documented: true
    },
    10099: {
        number: 10099,
        game: 8,
        type: "$",
        access: "ro",
        scope: "g",
        desc: "Set to 0 when the player dies, bombs or anything else that would fail a spell. Otherwise 1.",
        documented: true
    },
    10100: {
        number: 10100,
        game: 8,
        type: "$",
        access: "r",
        scope: "g",
        desc: "Current timer value.",
        documented: true
    }
};

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
        scope: "l",
        desc: "Some sort of ANM ID of the enemy (what's the purpose?).",
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
        type: "%",
        access: "ro",
        scope: "g",
        desc: "Speed at which the boss moves.",
        documented: true
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
        scope: "g",
        desc: "Value set by [ins=524,17].",
        documented: true
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
