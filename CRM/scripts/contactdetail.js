function logout() {
	$.cookie('user', 'no');
	location.href = 'index.html';
}
function send_email() {
	var template = JSON.parse($('#template').val());
	var sender = $('#sender').val();
	$.ajax({
		url: "http://api.youthimpactchina.com/mail",
		method: "POST",
		data: {
			from: sender,
			to: $('#to').val(),
			subject: template.subject,
			template: template.name,
			data: JSON.stringify({
				last_name: $('#last_name').val(),
				school_name: localStorage['school_name']
			})
		},
		success: function(data, status, xhr) {
			console.log(xhr);
			alert(data);
		},
		error: function(data, status, xhr) {
			console.log(xhr);
		}
	});

	var fullNote = '已发邮件 - 模板：' + JSON.parse($('#template').val()).name;
	$.ajax({
		url: "http://api.youthimpactchina.com/crm/school/case/create",
		method: "POST",
		data: {
			type: "邮件", status: "已完成", purpose: "项目宣传", note: fullNote,
			senderID: $.cookie('id'), schoolID: localStorage['school'], projectID: "56f8cd20d2ef370f2984e808", teacherID: localStorage['teacher']
		},
		success: function(data) {
			alert(data);
		}
	})
}
function addRecord(casecase) {
  var HTMLContent = document.getElementById('Record').innerHTML;
	var creatDate = new Date(casecase.time);
	HTMLContent = HTMLContent +
		"<tr onclick=change(\'" + casecase._id + "\')>" +
		  "<td class='res_header'>" + (creatDate.getMonth()+1)+'-'+creatDate.getDate() + "&nbsp" + creatDate.getHours() + ":" +creatDate.getMinutes()  + "</td>" +
		  "<td class='res_header'>" + casecase.type +"</td>" +
		  "<td class='res_header'>" + casecase.status + "</td>" +
		  "<td class='res_header'>" + casecase.teacher.profile.given_name  + casecase.teacher.profile.first_name+  "</td>" +
		  "<td class='res_header'>" + casecase.sender.last_name + casecase.sender.given_name + "</td>" +
		  "<td class='res_header'>" + casecase.project.name + " | "+ casecase.project.year + "</td>" +
		  "<td class='res_header'>" + casecase.purpose +"</td>" +
		  "<td class='res_header' style='width:40%'>" + casecase.note +"</td>" +
		"</tr>"
	document.getElementById('Record').innerHTML = HTMLContent;
}

$(document).ready(function() {
	if (!$.cookie('user') || $.cookie('user') == "no" || !$.cookie('id')) {
		location.href = "index.html";
	}
	var pickColor = "rgb(151,205,251)";
	document.body.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%,from(#639AC8), to(" + pickColor + "))"

	var teacherID = localStorage['teacher'];
	if (teacherID != "new") {
		$.ajax({
			url: "http://api.youthimpactchina.com/crm/case/by_teacher",
			method: "GET",
			data: {
				id: teacherID
			},
			success: function(data) {
				for (var item in data) {
					addRecord(data[item]);
				}
			}
		});


		$.ajax({
			url: "http://api.youthimpactchina.com/crm/teacher/profile/find",
			method: "GET",
			data: {
				id: teacherID
			},
			success: function(data) {
				$('#last_name').val(data.profile.given_name);
				$('#first_name').val(data.profile.first_name);
				$("#position").val(data.profile.position);
				$("#prefix").val(data.profile.prefix);
				$('#role').val(data.profile.role);
				$('#mainContact').val(data.profile.mainContact);
				$('#relationship').val(data.profile.relationship);
				$('#mobile').val(data.profile.mobile);
				$('#telephone').val(data.profile.telephone);
				$('#email').val(data.email);
				$('#qq').val(data.profile.qq);
				$('#to').val(data.email);
				$('#discipline').val(data.profile.discipline);
				$('#employer').val(data.profile.employer);
				$('#interests').val(data.profile.interests);
				$('#product_preference').val(data.profile.product_preference);

				$.ajax({
					url: "http://api.youthimpactchina.com/mail/template",
					method: "GET",
					success: function(data) {
						var HTMLContent = "<option value='' disabled selected>模板</option>";
						for (var item in data) {
							if (item == "general") {
								HTMLContent = HTMLContent + "<option value=\'"+ JSON.stringify({
									name:item , subject: data[item].mail_title
								}) +"\'>"+  data[item].name+"</option>";
							}
						}
						$('#template').html(HTMLContent);
						$.ajax({
							url: "http://api.youthimpactchina.com/mail/sender",
							method: "GET",
							success: function(data) {
								var HTMLContent = "<option value='' disabled selected>发送邮箱</option>";
								for (var item in data) {
									HTMLContent = HTMLContent + "<option value=\'"+ data[item] +"\'>"+data[item]+"</option>";
								}
								$('#sender').html(HTMLContent);
								$('select').material_select();
							}
						})
					}
				});
			}
		});
	} else {$('select').material_select();}
});

function save() {
	var data = {};
	data['first_name'] = $('#first_name').val();
	data['given_name'] = $('#last_name').val();
	data['position'] = $("#position").val();
	data['prefix'] = $("#prefix").val();
	data['role'] = $('#role').val();
	data['relationship'] = $('#relationship').val();
	data['mainContact'] = $('#mainContact').val();
	data['mobile'] = $('#mobile').val();
	data['telephone'] = $('#telephone').val();
	// data['email'] = $('#email').val();
	data['qq'] = $('#qq').val();
	data['discipline'] = $('#discipline').val();
	data['employer'] = $('#employer').val();
	data['interests'] = $('#interests').val();
	data['product_preference'] = $('#product_preference').val();
	for (var item in data) {
		if (data[item] == null)
			data[item] = "";
	}
	if (localStorage['teacher'] != 'new') {
		$.ajax({
			url: "http://api.youthimpactchina.com/crm/teacher/profile/update",
			method: "POST",
			data: {
				id: localStorage['teacher'],
				profile: JSON.stringify(data),
				email: $('#email').val()
			},
			success: function(data) {
				alert(data);
				location.href = "detail.html";
			}
		})
	} else {
		$.ajax({
			url: "http://api.youthimpactchina.com/crm/school/add_contact",
			method: "POST",
			data: {
				schoolID: String(localStorage['school']),
				profile: JSON.stringify(data),
				email: $('#email').val()
			},
			success: function(data) {
				alert(data);
				location.href = "detail.html";
			}
		})
	}

}
function del() {
	if (localStorage['teacher'] != undefined &&
		localStorage['teacher'] != 'new') {
			alert(localStorage['teacher']);
			$.ajax({
				url: "http://api.youthimpactchina.com/crm/del/teacher",
				method: "POST",
				data: {
					id: localStorage['teacher']
				},
				success: function(data) {
					alert(data);
					location.href = "detail.html";
				}
			})
		}
}
function profile() {
	location.href = "region.html";

}
function change(id) {
	localStorage['case'] = id;
	location.href = "add_case.html";
}
