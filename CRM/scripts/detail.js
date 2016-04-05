function redirect (id) {
	location.href = 'contactdetail.html?id=' + id;
}
function logout() {
	$.cookie('user', 'no');
	location.href = 'index.html';
}

function addBasicInfo1(school) {
	var HTMLContent = document.getElementById('Basic_info1').innerHTML;
	HTMLContent = HTMLContent +
		"<tr>" +
		"<td class='res_header'>" + school.name + "</td>" +
		"<td class='res_header'>" + school.profile.category + "</td>" +
		"<td class='res_header'>" + school.profile.type + "</td>" +
		"<td class='res_header'>" + school.profile.curriculum + "</td>" +
		"<td class='res_header'>" + school.profile.size + "</td>" +
		"<td class='res_header'>" + school.profile.prestige + "</td>" +
		"<td class='res_header'>" + school.status + "</td>" +
		"</tr>"
	document.getElementById('Basic_info1').innerHTML = HTMLContent;

}

function addBasicInfo2(school) {
	var HTMLContent = document.getElementById('Basic_info2').innerHTML;
	HTMLContent = HTMLContent +
		"<tr>" +
		"<td class='res_header'>" + school.province + "</td>" +
		"<td class='res_header'>" + school.city + "</td>" +
		"<td class='res_header'>" + school.profile.address + "</td>" +
		"<td class='res_header'>" + school.profile.website + "</td>" +

		"<td class='res_header'>" + school.profile.partner + "</td>" +
		"<td class='res_header'>" + school.profile.founding_time + "</td>" +
		"</tr>"
	document.getElementById('Basic_info2').innerHTML = HTMLContent;

}

function addBasicInfo3(school) {
	var HTMLContent = document.getElementById('Basic_info3').innerHTML;
	HTMLContent = HTMLContent +
		"<tr>" +
		"<td class='res_header'>" + school.profile.telephone + "</td>" +
		"<td class='res_header'>" + (school.profile.supplement ? school.profile.supplement : "Unknown") + "</td>" +
		"</tr>"
	document.getElementById('Basic_info3').innerHTML = HTMLContent;

}

function addProInfo1(school) {
	var HTMLContent = document.getElementById('Pro_info1').innerHTML;
	HTMLContent = HTMLContent +
		"<tr>" +
		"<td class='res_header'>" + school.profile.current_activity.note + "</td>" +
		"<td class='res_header'>" + school.profile.student_profile.note  + "</td>" +
		"<td class='res_header'>" + school.profile.demand_analysis.note  + "</td>" +
		"</tr>"
	document.getElementById('Pro_info1').innerHTML = HTMLContent;

}


function addContact(school) {
	var HTMLContent = document.getElementById('Contact').innerHTML;
	for (var i in school.teachers) {

		HTMLContent = HTMLContent +
			"<tr onclick=redirect(\'"+ school.teachers[i]._id +"\')>" +
			"<td class='res_header'>" + school.teachers[i].profile.position + "</td>" +
			"<td class='res_header'>" + school.teachers[i].profile.given_name + "</td>" +
			"<td class='res_header'>" + school.teachers[i].profile.first_name  + "</td>" +
			"<td class='res_header'>" + school.teachers[i].profile.prefix + "</td>" +
			"<td class='res_header'>" + school.teachers[i].profile.role + "</td>" +
			"<td class='res_header'>" + school.teachers[i].profile.mobile + "</td>" +
			"<td class='res_header'>" + school.teachers[i].profile.telephone + "</td>" +
			"<td class='res_header'>" + school.teachers[i].email + "</td>" +
			"<td class='res_header'>" + school.teachers[i].profile.qq + "</td>" +
			"<td class='res_header'>" + school.teachers[i].profile.relationship + "</td>" +
			"<td class='res_header'>" + school.teachers[i].profile.mainContact+ "</td>" +
			"</tr>"
		document.getElementById('Contact').innerHTML = HTMLContent;
	}

}
function add_new() {
	localStorage['teacher'] = 'new';
	location.href = 'contactdetail.html';
}
//这边是学校交互纪录的东西，274行有那个function
function addRecord(cases) {
  var HTMLContent = document.getElementById('Record').innerHTML;
  for (var i in cases) {
	var creatDate = new Date(cases[i].time);
	HTMLContent = HTMLContent +
		"<tr onclick=change(\'" + cases[i]._id + "\')>" +
		  "<td class='res_header'>" + (creatDate.getMonth()+1)+'-'+creatDate.getDate() + "&nbsp" + creatDate.getHours() + ":" +creatDate.getMinutes() + "</td>" +
		  "<td class='res_header'>" + cases[i].type +"</td>" +
		  "<td class='res_header'>" + cases[i].status + "</td>" +
		  "<td class='res_header'>"  + cases[i].teacher.profile.given_name+ cases[i].teacher.profile.first_name + "</td>" +
		  "<td class='res_header'>" + cases[i].sender.last_name +cases[i].sender.given_name +  "</td>" +
		  "<td class='res_header'>" + cases[i].project.name + " | "+ cases[i].project.year + "</td>" +
		  "<td class='res_header'>" + cases[i].purpose +"</td>" +
		  "<td class='res_header' style='width:40%'>" + cases[i].note +"</td>"+
		"</tr>"
	document.getElementById('Record').innerHTML = HTMLContent;
  }

}

$(document).ready(function() {
	if (!$.cookie('user') || $.cookie('user') == "no" || !$.cookie('id')) {
		location.href = "index.html";
	}
	var pickColor = "rgb(151,205,251)";
	document.body.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%,from(#639AC8), to(" + pickColor + "))"


	var req = GetRequest();
	var getSchoolID = String(req['id']);
	$.ajax({
		url: "http://api.youthimpactchina.com/crm/school/get_info",
		method: "GET",
		data: {
			id: getSchoolID
		},
		success: function(data) {
			localStorage['school_name'] = data.name;
			addBasicInfo1(data);
			addBasicInfo2(data);
			addBasicInfo3(data);
			addProInfo1(data);
			addContact(data);
			$.ajax({
				url: "http://api.youthimpactchina.com/crm/case/by_school",
				method: "GET",
				data: {id: localStorage['school']},
				success: function(data) {
					addRecord(data);
				}
			});
		}
	});
});
function change(id) {
	localStorage['case'] = id;
	location.href = "add_case.html?id="+id;
}
function profile() {
	location.href = "region.html";

}
function add_new_case() {
	localStorage['case'] = 'new';
	location.href = "add_case.html";
}
