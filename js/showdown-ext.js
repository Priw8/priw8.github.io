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
	let ts = {
		type: "lang",
		regex: /\[timestamp=(.*?)\]/g,
		replace: "<div style='float: right'>$1</div>"
	}
	let img = {
		type: "lang",
		regex: /\[img=(.*?)\]/g,
		replace: '<div class="fit-wrapper"><div class="fit-wrapper2"><img src="$1"></div></div>'
	}
	return [yt, hr, ts, img];
}