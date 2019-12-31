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
		"groupName": "News",
		"name": "News and stuff",
		"single": true,
		"path": "news/",
		"type": "blog",
		"url": 7,
		"max": 5
	},

	{
		"groupName": "Patches",
		"path": "patches/",
		"content": [
			{
				"name": "Custom shottypes",
				"type": "site",
				"url": "shottypes"
			},
			{
				"name": "LoDDK",
				"type": "site",
				"url": "loddk"
			},
			{
				"name": "HSiFS nonspell practice",
				"type": "site",
				"url": "hsifs_nonprac"
			},
			{
				"name": "Undefined Fantastic Four Seasons",
				"type": "site",
				"url": "uffs"
			},
			{
				"name": "WBaWC practice patch",
				"type": "site",
				"url": "prac"
			},
			{
				"name": "WBaWC demo practice patch",
				"type": "site",
				"url": "wbawc_prac"
			}
		]
	},

	{
		"groupName": "ECL tutorial",
		"name": "ECL tutorial",
		"single": true,
		"path": "ecl-tutorial/",
		"type": "blog",
		"url": 10,
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
				"type": "href",
				"newTab": true,
				"url": "https://github.com/Priw8/merlin"
			},
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
		"groupName": "Tools",
		"path": null,
		"content": [
			{
				"name": "Shottype editor",
				"type": "href",
				"newTab": true,
				"url": "/sht-webedit/"
			}
		]
	},

	{
		"groupName": "Links",
		"path": null,
		"content": [
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
				"name": "Maribel's site",
				"type": "href",
				"newTab": true,
				"url": "https://maribelhearn.github.io/"
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
HTML status code: %code%
`;
