const INDEX = 
[
	{
		"groupName": "Home",
		"name": "Priw8's Github page",
		"single": true,
		"path": "/",
		"type": "site",
		"url": "index"
	},

	{
		"noItem": true, // hiding it until I find any purpose for it

		"groupName": "News",
		"name": "News and stuff",
		"single": true,
		"path": "news/",
		"type": "blog",
		"url": 7,
		"max": 5
	},

	{
		"groupName": "Mods",
		"path": "patches/",
		"content": [
			{
				"name": "Multiple games",
				"type": "subgroup",
				"children": [
					{
						"name": "Custom shottypes",
						"type": "site",
						"url": "shottypes"
					}
				]
			},
			{
				"name": "MoF",
				"type": "subgroup",
				"children": [
					{
						"name": "Rank patch",
						"type": "site",
						"url": "mof_rank"
					},
					{
						"name": "Mountain of Motion Sickness",
						"type": "site",
						"url": "mof_sickness"
					}
				]
			},
			{
				"name": "DDC",
				"type": "subgroup",
				"children": [
					{
						"name": "DDDDDDDDDDD",
						"type": "site",
						"url": "ddddddddddd"
					}
				]
			},
			{
				"name": "LoLK",
				"type": "subgroup",
				"children": [
					{
						"name": "Legacy of Double Dealing Kingdom",
						"type": "site",
						"url": "loddk"
					}		
				]
			},
			{
				"name": "HSiFS",
				"type": "subgroup",
				"children": [
					{
						"name": "Nonspell practice",
						"type": "site",
						"url": "hsifs_nonprac"
					},
					{
						"name": "Undefined Fantastic Four Seasons",
						"type": "site",
						"url": "uffs"
					},
					{
						"name": "GFW freeze",
						"type": "site",
						"url": "th16ice"
					}
				]
			},
			{
				"name": "WBaWC",
				"type": "subgroup",
				"children": [
					{
						"name": "Practice patch",
						"type": "site",
						"url": "prac"
					},
					/*{
						"name": "Demo practice patch",
						"type": "site",
						"url": "wbawc_prac"
					},*/
					{
						"name": "Mystia's Adventure",
						"type": "site",
						"url": "wbawc_mystia"
					}
				]
			},
			{
				"name": "Len'en",
				"type": "subgroup",
				"children": [
					{
						"name": "Len'en EE practice patch",
						"type": "site",
						"url": "lenen1_prac"
					}
				]
			},
			{
				"name": "Other",
				"type": "subgroup",
				"children": [
					{
						"name": "Crypt of the Necrodancer",
						"type": "site",
						"url": "necrodancer"
					}
				]
			}
		]
	},

	{
		"groupName": "ECL tutorial",
		"name": "ECL tutorial",
		"single": true,
		"path": "ecl-tutorial/",
		"type": "blog",
		"url": 13,
		"max": 1,
		"reverse": true,
		"noItem": true
	},
	// soon
	{
		"noItem": true,
		"path": "ecl/",
		"type": "redirect",
		"url": "modding/"
	},
	{
		"groupName": "Modding",
		"path": "modding/",
		"content": [
			{
				"name": "ECL (enemies, danmaku)",
				"type": "subgroup",
				"children": [
					{
						"name": "ECL tutorial",
						"type": "href",
						"url": "#b=ecl-tutorial/&p=1"
					},
					{
						"name": "ECL instruction table",
						"type": "site",
						"url": "ins"
					},
					{
						"name": "ECL variable table",
						"type": "site",
						"url": "vars"
					},
					{
						"name": "ECL flag table",
						"type": "site",
						"url": "flags"
					},
					{
						"name": "Eclmaps",
						"type": "href",
						"newTab": true,
						"url": "https://github.com/Priw8/eclmap"
					},
					{
						"name": "MERLIN",
						"type": "site",
						"url": "/MERLIN/doc/index"
					},
					{
						"name": "ECLplus",
						"type": "href",
						"url": "http://github.com/Priw8/ECLplus/"
					}
				]
			},
			{
				"name": "ANM (all rendering)",
				"type": "subgroup",
				"children": [
					{
						"name": "ExpHP's site",
						"type": "href",
						"url": "https://exphp.github.io/thpages/"
					}
				]
			},
			{
				"name": "STD (backgrounds)",
				"type": "subgroup",
				"children": [
					{
						"name": "STD tutorial",
						"type": "site",
						"url": "std-tutorial"
					},
					{
						"name": "STD instruction table",
						"type": "site",
						"url": "std-ins"
					}
				]
			},
			{
				"name": "SHT (shottypes)",
				"type": "subgroup",
				"children": [
					{
						"name": "Shottype editor",
						"type": "href",
						"newTab": true,
						"url": "https://priw8.github.io/sht-webedit/"
					}
				]
			}
		]
	},
	{
		"groupName": "Links",
		"path": null,
		"content": [
			{
				"name": "ZUNcode Discord",
				"type": "href",
				"newTab": true,
				"url": "https://discord.gg/fvPJvHJ"
			},
			{
				"name": "My Github",
				"type": "href",
				"newTab": true,
				"url": "https://github.com/Priw8"
			},
			{
				"name": "My Youtube",
				"type": "href",
				"newTab": true,
				"url": "https://www.youtube.com/channel/UCfFHyEuaF-aVxz91x25aTpQ"
			},
			{
				"name": "My Twitch",
				"type": "href",
				"newTab": true,
				"url": "https://www.twitch.tv/priw8"
			},
			{
				"name": "ExpHP's site",
				"type": "href",
				"url": "https://exphp.github.io/thpages/"
			},
			{
				"name": "Maribel's site",
				"type": "href",
				"newTab": true,
				"url": "https://maribelhearn.com/"
			}
		]
	}
]

const DEFAULT = "default";

const ERROR = `
# An error has occured when loading the page.
Try reloading using **CTRL+F5**, or **clearing browser cache** of this site.  
If the problem persists, contact me on Discord: **Priw8#9873**.
`;

const BLOG_ERROR = `
### An error has occured when loading this content.
If the problem persists, contact me on Discord: **Priw8#9873**.
`;

const EMBED_LOAD_ERROR = `
Failed to load embedded content.  
HTTP status code: %code%
`;
