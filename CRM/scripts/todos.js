function redirect (id) {
	localStorage['teacher'] = id;
	location.href = 'contactdetail.html';
}
function logout() {
	$.cookie('user', 'no');
	location.href = 'index.html';
}




function add_new() {
	localStorage['teacher'] = 'new';
	location.href = 'contactdetail.html';
}




//这边是学校交互纪录的东西，274行有那个function
function addRecord(cases) {
	var HTMLContentToDo = document.getElementById('RecordToDo').innerHTML;
	var count = 0;
	for (var i in cases) {
		if (cases[i].teacher == null) {
			continue;

		}else if(cases[i].status == '待完成' && cases[i].type == '快递'  ){

			var creatDate = new Date(cases[i].time);
			HTMLContentToDo = HTMLContentToDo +
				"<tr onclick=change(\'" + JSON.stringify({
						case: cases[i]._id,
						school: cases[i].school._id
					})+ "\')>" +
				  "<td class='res_header' style='width:5%'>" + (count+1)  + "</td>" +
				  "<td class='res_header' style='width:10%'>" + (creatDate.getMonth()+1)+'-'+creatDate.getDate() + "&nbsp" + creatDate.getHours()+':'+creatDate.getMinutes()  + "</td>" +
				  "<td class='res_header' style='width:20%'>" + cases[i].school.name +"</td>" +
				  "<td class='res_header' style='width:10%'>" + cases[i].teacher.profile.position +"</td>" +
				  "<td class='res_header' style='width:5%'>"  + cases[i].teacher.profile.given_name+ cases[i].teacher.profile.first_name + "</td>" +
				  "<td class='res_header' style='width:5%'>" + cases[i].teacher.profile.relationship +  "</td>" +
				  "<td class='res_header' style='width:5%'>" + cases[i].sender.last_name +cases[i].sender.given_name +  "</td>" +
				  "<td class='res_header' style='width:20%'>" + cases[i].school.profile.address +  "</td>" +
				  "<td class='res_header' style='width:10%'>" + cases[i].teacher.profile.mobile +  "</td>" +
				  "<td class='res_header' style='width:10%'>" + cases[i].teacher.profile.telephone +  "</td>" +
				  //"<td class='res_header' style='width:10%'>" + cases[i].note +"</td>"+
				"</tr>";
			document.getElementById('RecordToDo').innerHTML = HTMLContentToDo;

			count ++;
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
