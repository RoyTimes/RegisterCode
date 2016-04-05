function GetRequest() {
	var url = location.search, req = [];
	if (url.indexOf("?") != -1) {
		var strs = url.substr(1).split("&");
		for (var i in strs) {
			req[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
		}
	}
	return req;
}
