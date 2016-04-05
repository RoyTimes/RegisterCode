function addRecord(school) {
  var HTMLContent = document.getElementById('Record').innerHTML;
  for (var i in school.school_cases) {

	HTMLContent = HTMLContent +
		"<tr onclick=change(\'" + school.school_cases[i]._id + "\')>" +
		  "<td class='res_header'>" + school.school_cases[i].time + "</td>" +
		  "<td class='res_header'>" + school.school_cases[i].type +"</td>" +
		  "<td class='res_header'>" + school.school_cases[i].status + "</td>" +
		  "<td class='res_header'>" + school.school_cases[i].teacher.name + "</td>" +
		  "<td class='res_header'>" + school.school_cases[i].sender.name + "</td>" +
		  "<td class='res_header'>" + school.school_cases[i].project.name + " | "+ school.school_cases[i].project.year + "</td>" +
		  "<td class='res_header'>" + school.school_cases[i].purpose +"</td>" +
		  "<td class='res_header'>" + school.school_cases[i].note +"</td>" +
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

	$.ajax({
		url: "http://api.youthimpactchina.com/project/all",
		method: "GET",
		success: function(data) {
			var HTMLContent = "";
			HTMLContent = HTMLContent  + "<option value='' disabled selected>项目</option>";
			for (var item in data) {
				HTMLContent = HTMLContent + '<option value="'+ data[item]._id +'">'+ data[item].name + " | " + data[item].year +'</option>';
			}
			$("#project").html(HTMLContent);
			$.ajax({
				url: "http://api.youthimpactchina.com/crm/school/get_info",
				method: "GET",
				data: {id: localStorage['school']},
				success: function(data) {
					var HTMLContent = "";
					HTMLContent = HTMLContent  + "<option value='' disabled selected>联系老师</option>";
					HTMLContent = HTMLContent  + "<option value='office'>学校办公室</option>";
					for (var item in data.teachers) {
						HTMLContent = HTMLContent + '<option value=\''+ JSON.stringify(
							data.teachers[item] )+'\'>'+ data.teachers[item].profile.given_name+ data.teachers[item].profile.first_name +" | " + data.teachers[item].profile.position +'</option>';
					}
					$("#teacher").html(HTMLContent);
					if (localStorage['case'] !== undefined && localStorage['case']!='new') {

						$.ajax({
							url: "http://api.youthimpactchina.com/crm/case",
							method: "GET",
							data: {
								id: localStorage['case']
							},
							success: function(data) {

								var notes = data.note.split('-');


								$('#senderId').val(data.sender);
								$('#type').val(data.type);
								$('#status').val(data.status);
								$('#purpose').val(data.purpose);
								$('#teacher').val(data.teacher._id);
								$('#project').val(data.project);
								if (notes.length > 1) {
									$('#teleInitiative').val(notes[0]);
									$('#deliveryInitiative').val(notes[1]);
									$('#stdNote').val(notes[2]);
									$('#note').val(notes[3]);
								}else{
									$('#note').val(notes[0]);
								};

								$('select').material_select();
							}
						})
					} else $('select').material_select();
				}
			})
		}
	});
});
function del() {
	if (localStorage['case'] != undefined &&
		localStorage['case'] != 'new')
	$.ajax({
		url: "http://api.youthimpactchina.com/crm/del/case",
		method: "POST",
		data: {
			id: localStorage['case']
		},
		success: function(data) {
			alert(data);
			localStorage['case'] = "new";
			location.href = "contactdetail.html";
		}
	});
}
function logout() {
	$.cookie('user', 'no');
	location.href = 'index.html';
}

function changeRelationship(){
    if ($("#teacher").val() == 'office')
        return;
	var getTeacher = JSON.parse($("#teacher").val());
	$("relationship").val(getTeacher.profile.relationship);
	$('select').material_select('destroy');
	$('select').material_select();
}
function save() {
	var type = $('#type').val();
	var status = $('#status').val();
	var purpose = $('#purpose').val();
	var relationship = $('#relationship').val();
	if ($('#teacher').val()== 'office') {
		var teacher = "56fffb5309f778b2288b4567";
	}else{
		var teacher = JSON.parse($('#teacher').val())._id;
	}

	var project = $('#project').val();
	//if ($('#stdNote').val()) {
		var note = $('#teleInitiative').val()+'-'+$('#deliveryInitiative').val()+'-'+$('#stdNote').val()+'-'+$('#note').val();
	//}else{
	//    var note = $('#note').val();
	//}


	var getUserId = $.cookie('id');
	var existUserId = $('#senderId').val();
	console.log(existUserId);
	var TeacherProfle = JSON.parse($('#teacher').val());
	TeacherProfle.profile.relationship = $('#relationship').val();

	localStorage['teacher'] = teacher;
	if (localStorage['case'] != undefined && localStorage['case'] != 'new') {
		$.ajax({
			url: "http://api.youthimpactchina.com/crm/school/case/update",
			method: "POST",
			data: {
				id: GetRequest()['id'], type: type, status: status, purpose: purpose, note: note,
				senderID: existUserId, schoolID: localStorage['school'], projectID: project, teacherID: teacher
			},
			success: function(data) {
				alert(data);
				$.ajax({
					url: "http://api.youthimpactchina.com/crm/teacher/profile/update",
					method: "POST",
					data: {
						id: teacher,
						profile: TeacherProfle,
						email: $('#email').val()
					},
					success: function(data) {
						alert(data);
					}
				});
				// 大概是这个样子。我没测试
				// location.href = "contactdetail.html";
			}
		});
	}
	else $.ajax({
		url: "http://api.youthimpactchina.com/crm/school/case/create",
		method: "POST",
		data: {
			type: type, status: status, purpose: purpose, note: note,
			senderID: getUserId, schoolID: localStorage['school'], projectID: project, teacherID: teacher
		},
		success: function(data) {
			alert(data);
			// location.href = "contactdetail.html";
		}
	})

}
function profile() {
	location.href = "region.html";

}
