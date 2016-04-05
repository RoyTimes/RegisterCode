function redirect (id) {
	localStorage['teacher'] = id;
	location.href = 'contactdetail.html';
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
			"<td class='res_header'>" + school.teachers[i].profile.relationship + "</td>" +
			"</tr>"
		document.getElementById('Contact').innerHTML = HTMLContent;
	}

}
function add_new() {
	localStorage['teacher'] = 'new';
	location.href = 'contactdetail.html';
}


function addProgress(progress){
	var HTMLContent = document.getElementById('Progress').innerHTML;


		HTMLContent = HTMLContent + "<tr>" +
			"<td class='res_header'>" + progress.totalSchool + "</td>" +
			"<td class='res_header'>" + progress.connectedSchool + "</td>" +
			"<td class='res_header'>" + progress.mailSentSchool + "</td>" +
			"</tr>";
		document.getElementById('Progress').innerHTML = HTMLContent;




}

function addCaseStats(stats){
	var HTMLContent = document.getElementById('Stat').innerHTML;
	for (var name in stats){

		HTMLContent = HTMLContent + "<tr>" +
			"<td class='res_header'>" + name + "</td>" +
			"<td class='res_header'>" + (stats[name].totalCall.oneDay? stats[name].totalCall.oneDay : '0') + "</td>" +
			"<td class='res_header'>" + (stats[name].totalCall.twoDay? stats[name].totalCall.twoDay : '0') + "</td>" +
			"<td class='res_header'>" + (stats[name].totalCall.threeDay? stats[name].totalCall.threeDay : '0') + "</td>" +
			"<td class='res_header'>" + (stats[name].totalMail.oneDay? stats[name].totalMail.oneDay : '0') + "</td>" +
			"<td class='res_header'>" + (stats[name].totalMail.twoDay? stats[name].totalMail.twoDay : '0') + "</td>" +
			"<td class='res_header'>" + (stats[name].totalMail.threeDay? stats[name].totalMail.threeDay : '0') + "</td>" +
			"</tr>";
		document.getElementById('Stat').innerHTML = HTMLContent;

	}


}

//这边是学校交互纪录的东西，274行有那个function
function addRecord(cases) {
  var HTMLContent = document.getElementById('Record').innerHTML;
  //var HTMLContentToDo = document.getElementById('RecordToDo').innerHTML;
  for (var i in cases) {
	if (cases[i].teacher == null) {
		continue;

	}/*else if(cases[i].status == '待完成'){

		var creatDate = new Date(cases[i].time);
		HTMLContentToDo = HTMLContentToDo +
			"<tr onclick=change(\'" + JSON.stringify({
					case: cases[i]._id,
					school: cases[i].school._id
				})+ "\')>" +
			  "<td class='res_header' style='width:12%'>" + (creatDate.getMonth()+1)+'-'+creatDate.getDate() + "&nbsp" + creatDate.getHours()+':'+creatDate.getMinutes()  + "</td>" +
			  "<td class='res_header' style='width:10%'>" + cases[i].type +"</td>" +

			  "<td class='res_header' style='width:10%'>" + cases[i].status + "</td>" +
			  "<td class='res_header' style='width:15%'>" + cases[i].school.name +"</td>" +
			  "<td class='res_header' style='width:auto'>"  + cases[i].teacher.profile.given_name+ cases[i].teacher.profile.first_name + "</td>" +
			  "<td class='res_header' style='width:10%'>" + cases[i].teacher.profile.relationship +  "</td>" +
			  "<td class='res_header' style='width:10%'>" + cases[i].sender.last_name +cases[i].sender.given_name +  "</td>" +
			  "<td class='res_header' style='width:15%'>" + cases[i].project.name + " | "+ cases[i].project.year + "</td>" +
			  "<td class='res_header' style='width:10%'>" + cases[i].purpose +"</td>" +
			  "<td class='res_header' style='width:30%'>" + cases[i].note +"</td>"+
			"</tr>"
			document.getElementById('RecordToDo').innerHTML = HTMLContentToDo;



	}*/else if(cases[i].status == '已完成'){

		var creatDate = new Date(cases[i].time);
		HTMLContent = HTMLContent +
			"<tr onclick=change(\'" + JSON.stringify({
					case: cases[i]._id,
					school: cases[i].school._id
				})+ "\')>" +
			  "<td class='res_header' style='width:12%'>" + (creatDate.getMonth()+1)+'-'+creatDate.getDate() + "&nbsp" + creatDate.getHours()+':'+creatDate.getMinutes()  + "</td>" +
			  "<td class='res_header' style='width:10%'>" + cases[i].type +"</td>" +

			  "<td class='res_header' style='width:10%'>" + cases[i].status + "</td>" +
			  "<td class='res_header' style='width:15%'>" + cases[i].school.name +"</td>" +
			  "<td class='res_header' style='width:auto'>"  + cases[i].teacher.profile.given_name+ cases[i].teacher.profile.first_name + "</td>" +
			  "<td class='res_header' style='width:10%'>" + cases[i].teacher.profile.relationship +  "</td>" +
			  "<td class='res_header' style='width:10%'>" + cases[i].sender.last_name +cases[i].sender.given_name +  "</td>" +
			  "<td class='res_header' style='width:15%'>" + cases[i].project.name + " | "+ cases[i].project.year + "</td>" +
			  "<td class='res_header' style='width:10%'>" + cases[i].purpose +"</td>" +
			  "<td class='res_header' style='width:30%'>" + cases[i].note +"</td>"+
			"</tr>"
			document.getElementById('Record').innerHTML = HTMLContent;


	}
  }

}

$(document).ready(function() {
	if (!$.cookie('user') || $.cookie('user') == "no" || !$.cookie('id')) {
		location.href = "index.html";
	}
	var pickColor = "rgb(151,205,251)";
	document.body.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%,from(#639AC8), to(" + pickColor + "))"


	var getSchoolID = String(localStorage['school']);

	$.ajax({
		url: "http://api.youthimpactchina.com/crm/case/get_progress",
		method: "GET",
		success: function(data) {

			addProgress(data);
		}
	});
	$.ajax({
		url: "http://api.youthimpactchina.com/crm/case/get_stats",
		method: "GET",
		success: function(data) {

			addCaseStats(data);
		}
	});
	$.ajax({
		url: "http://api.youthimpactchina.com/crm/case/by_time",
		method: "GET",
		success: function(data) {


			addRecord(data);
		}
	});


});
function change(id) {
	id = JSON.parse(id);
	localStorage['case'] = id.case;
	localStorage['school'] = id.school;
	location.href = "detail.html";
}


function profile() {
	location.href = "region.html";

}
function add_new_case() {
	localStorage['case'] = 'new';
	location.href = "add_case.html";
}
