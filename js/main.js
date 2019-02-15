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
	html = "<div class='navigation-entry' data-path='"+data.path+"'>";
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
		loadContent(data.path, data.url);
	};
}

function loadContent(path, file) {
	if (active && active == file) return;
	active = file;
	let realPath = path+file;
	if (cache[realPath]) loadMd(cache[realPath], path, file);
	else {
		let xhr = new XMLHttpRequest();
		xhr.open("GET", "content/"+realPath+".md");
		xhr.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					loadMd(this.responseText, path, file);
					cache[realPath] = this.responseText;
				} else {
					loadMd(ERROR, path, file);
					active = "";
				};
			}
		};
		xhr.send();
	};
	let query = buildQuery({
		"s": realPath
	});
	location.hash = query;
}

function loadMd(txt, path, file) {
	let html = MD.makeHtml(txt);
	$content.innerHTML = html;
	setActiveNavigation(path, file);
}

function setActiveNavigation(path, file) {
	let $active, $activeItem;

	$active = document.querySelector(".navigation-entry.active");
	if ($active != null) {
		$active.classList.remove("active");
		$activeItem = $active.querySelector(".active");
		if ($activeItem != null) $activeItem.classList.remove("active");
	};

	$active = document.querySelector(".navigation-entry[data-path='"+path+"']");
	if ($active != null) {
		$active.classList.add("active");
		$activeItem = $active.querySelector("[data-url='"+file+"']");
		if ($activeItem != null) $activeItem.classList.add("active");
	};
}

function initContent() {
	let query = parseQuery();
	let spl = query.s.split("/");
	let file = spl.pop();
	let path = spl.join("/") + "/";
	if (query.s) loadContent(path, file);
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

function resize() {
	if (screen.width < 540) {
		document.querySelector("#viewport").setAttribute("content", "width=540px, user-scalable=no");
	} else {
		document.querySelector("#viewport").setAttribute("content", "width=device-width, user-scalable=no");
	};
};

function initResize() {
	window.onresize = resize;
	resize();
};

function init() {
	initNavigation();
	initContent();
	initResize();
}

init();