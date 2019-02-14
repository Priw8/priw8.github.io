let ext = function() {
	let yt = {
		type: "lang",
		regex: /\[yt\](.*?)\[\/yt\]/g,
		replace: '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
	};
	let hr = {
		type: "lang",
		regex: /\[hr\]/g,
		replace: "<hr>"
	}
	return [yt, hr];
}