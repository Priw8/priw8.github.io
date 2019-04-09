let ext = function() {
	let yt = {
		type: "lang",
		regex: /\[yt\](.*?)\[\/yt\]/g,
		replace: '<div class="fit-wrapper"><div class="fit-wrapper2 yt"><iframe src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>'
	};
	let hr = {
		type: "lang",
		regex: /\[hr\]/g,
		replace: "<hr>"
	}
	let br = {
		type: "lang",
		regex: /\[br\]/g,
		replace: "<br>"
	}
	let ts = {
		type: "lang",
		regex: /\[timestamp=(.*?)\]/g,
		replace: "<div style='float: right'>$1</div>"
	}
	let img = {
		type: "lang",
		regex: /\[img=(.*?), hratio=(.*?)\]/g,
		replace: '<div class="fit-wrapper"><div class="fit-wrapper2" style="padding-top: $2%"><img style="cursor:pointer;" onclick="window.open(\'$1\')" src="$1"></div></div>'
	}

	let jank = document.createElement("textarea");
	jank.classList.add("clipboard-jank");
	let cnt = 0;
	let code = {
		type: "lang",
		regex: /\[code\]([^]+?)\[\/code\]/g,
		replace: function(match, content) {
			// putting the content in data-clipboard-text didn't really work
			let clip = jank.cloneNode();
			clip.innerHTML = content;
			clip.setAttribute("id", "clipboard"+cnt);
			document.body.appendChild(clip);
			return "<hljs>"+highlightCode(content)+"<span class='copy-btt' data-clipboard-action='copy' data-clipboard-target='#clipboard"+(cnt++)+"'>Copy</span></hljs>";
		}
	}

	let title = {
		type: "lang",
		regex: /\[title=(.*?)\]\n/,
		replace: function(match, content) {
			setWindowTitleDirect(content);
			return "";
		}
	}
	return [yt, hr, br, ts, img, code, title];
}