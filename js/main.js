let MD = new showdown.Converter({
	extensions: [ext]
});
let $content = document.querySelector(".content-wrapper");
let cache = {};
let active = "";

function initNavigation() {
	let $nav = document.querySelector(".header-navigation");
	let html = "";
	for (let i=0; i<INDEX.length; i++) {
		html += getNavigationEntry(INDEX[i]);
	}
	html += "<div class='navigation-entry dummy'></div>";
	$nav.innerHTML = html;
	$nav.addEventListener("click", handleNavigation);
	window.addEventListener("hashchange", initContent, false);
}

function getNavigationEntry(data) {
	let html;
	html = "<div class='navigation-entry'>";
	if (!data.single) {
		html += "<div class='navigation-entry-name'>"+data.groupName+"</div>";
		html += "<div class='navigation-entry-list'>";
		for (let i=0; i<data.content.length; i++) {
			let item = data.content[i];
			html += "<div class='navigation-entry-list-item' "+getNavEntryDatasetString(item, data.path)+">"+item.name+"</div>";
		};
		html += "</div>";
	} else {
		html += "<div class='navigation-entry-name' "+getNavEntryDatasetString(data, data.path)+">"+data.groupName+"</div>";
	};
	html += "</div>";
	return html;
}

function getNavEntryDatasetString(item, path) {
	return "data-type='"+item.type+"' data-url='"+item.url+"' data-path='"+path+"'";
}

function handleNavigation(e) {
	if (typeof e.target.dataset.type != "undefined") {
		navigate(e.target.dataset);
	}
}

function navigate(data) {
	if (data.type == "href") {
		window.open(data.url);
	};
	if (data.type == "site") {
		loadContent(data.path + data.url);
	};
}

function loadContent(file) {
	if (active && active == file) return;
	active = file;
	if (cache[file]) loadMd(cache[file]);
	else {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", "content/"+file+".md");
		xhr.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					loadMd(this.responseText);
					cache[file] = this.responseText;
				} else {
					loadMd(ERROR);
					active = "";
				};
			}
		};
		xhr.send();
	};
	let query = buildQuery({
		"s": file.split(".")[0]
	});
	location.hash = query;
}

function loadMd(txt) {
	let html = MD.makeHtml(txt);
	$content.innerHTML = html;
}

function initContent() {
	let query = parseQuery();
	if (query.s) loadContent(query.s);
	else loadContent(DEFAULT);
};

function parseQuery() {
	let ret = {};
	let s = location.hash;
	s = s.substring(1);
	let spl = s.split("&");
	for (let i=0; i<spl.length; i++) {
		let tmp = spl[i].split("=");
		ret[tmp[0]] = tmp[1];
	};
	return ret;
};

function buildQuery(query) {
	let str = "";
	let first = true;
	for (let key in query) {
		if (first) first = false;
		else str += "&";
		str += key + "=" + query[key];
	};
	return str;
}

function init() {
	initNavigation();
	initContent();
}

init();