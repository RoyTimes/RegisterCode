function logout() {
	$.cookie('user', 'no');
	location.href = 'index.html';
}
function change_page (id) {
	localStorage['school'] = id;
	alert("detail.html?" + id);
	location.href = "detail.html?id=" + id;
}
function addSchool (sequence,school,section) {
	var HTMLContent = document.getElementById(section).innerHTML;

	var connected = '否';

	if (school.teachers != undefined) {

		for (var t in school.teachers){

			if (school.teachers[t].profile.relationship == '中立' || school.teachers[t].profile.relationship == '良好' ) {
				connected = '链接';
				break;
			};
		}
	};


	HTMLContent = HTMLContent +
		"<tr onclick=change_page('"+ school._id +"')>" +
		"<td><span class='res_header'>" + sequence + "</span></td>" +
		"<td><span class='res_header'>" + school.province + "</span></td>" +
		"<td><span class='res_header'>" + school.city + "</span></td>" +
		"<td><span class='res_header'>" + school.name + "</span></td>" +
		"<td><span class='res_header'>" + (school.profile.type?school.profile.type:"未知")  + "</span></td>" +
		"<td><span class='res_header'>" + (school.profile.founding_time?school.profile.founding_time:"未知")  + "</span></td>" +
		"<td><span class='res_header'>" + school.profile.prestige  + "</span></td>" +
		"<td><span class='res_header'>" + (school.profile.size?school.profile.size:"未知") + "</span></td>" +
		"<td><span class='res_header'>" + (school.teachers?school.teachers.length:"0") + "</span></td>" +
		"<td><span class='res_header'>" + connected + "</span></td>";

		//"<td><span class='res_header'>" + (school.profile.status?school.profile.status:"Unknown") + "</span></td></tr>" ;
	document.getElementById(section).innerHTML = HTMLContent;
}
$(document).ready(function() {
	if (!$.cookie('user') || $.cookie('user') == "no" || !$.cookie('id')) {
		location.href = "index.html";
	}
	var getLocation = localStorage['to'];
	localStorage['school'] = "new";
	$.ajax({
		url: "http://api.youthimpactchina.com/crm/school/list/by_province",
		method: "GET",
		data: {
			province: getLocation
		},
		success: function(data) {
			// console.log(data);
			var sequenceGJBYM = 1;
			var sequenceGJBXFQT = 1;
			var sequenceGJBZDPG = 1;
			for (var item in data ) {
				if (data[item].profile.type == "国际部-英美") {
					addSchool(sequenceGJBYM,data[item],'contentGJBYM');
					sequenceGJBYM ++;
				};
				if (data[item].profile.type == "国际部-西方其他") {
					addSchool(sequenceGJBXFQT,data[item],'contentGJBXFQT');
					sequenceGJBXFQT ++;
				};
				if (data[item].profile.type == "普通高中") {
					addSchool(sequenceGJBZDPG,data[item],'contentGJBZDPG');
					sequenceGJBZDPG ++;
				};

			}
		}
	});
	var pickColor = "rgb(151,205,251)";
	var getScreenHeight = window.innerHeight;
	document.body.style.minHeight = getScreenHeight + "px";
	document.body.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%,from(#639AC8), to(" + pickColor + "))"
});
function profile() {
	location.href = "region.html";

}
