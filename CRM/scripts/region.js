$(document).ready(function() {
	if (!$.cookie('user') || $.cookie('user') == "no" || !$.cookie('id')) {
		location.href = "index.html";
	}
	var pickColor = "rgb(151,205,251)";
	// document.body.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%,from(" + pickColor + "), to(#FFFFFF))"
	document.body.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%,from(#639AC8), to(" + pickColor + "))"

	$('.tooltipped').tooltip({
		delay: 0
	});
});
function jump (to) {
	localStorage['to'] = to;
	location.href = 'schools.html';
}
function logout() {
	$.cookie('user', 'no');
	location.href = 'index.html';
}
