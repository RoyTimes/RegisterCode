$(document).ready(function() {
	var pickColor = "rgb(170,79,98)";
	$('.modal-trigger').leanModal();
	document.body.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%,from(#FFF), to("+ pickColor +"))";

	var teacher = JSON.parse(localStorage['teacher']);
	$.ajax({
		url: "http://api.youthimpactchina.com/smp/schoolprofile/find",
		method: "GET", data: {
			id: teacher.school
		}, success: function(Data){
			$("#school_name").val(Data['school_name']);
			$("#school_address").val(Data['school_address']);
			$("#school_website").val(Data['school_website']);
			$("#school_phoneNumber").val(Data['school_phoneNumber']);
			$("#school_background").val(Data['school_background']);
			$("#contact_name").val(Data['contact_name']);
			$("#contact_phone").val(Data['contact_phone']);
			$("#contact_email").val(Data['contact_email']);
			$("#class_size_9").val(Data['class_size_9']);
			$("#class_size_10").val(Data['class_size_10']);
			$("#class_size_11").val(Data['class_size_11']);
			$("#class_size_12").val(Data['class_size_12']);
			$("#percent_graduate").val(Data['percent_graduate']);
			$("#faculty_student_ratio").val(Data['faculty_student_ratio']);
			$("#precent_first_graduate").val(Data['precent_first_graduate']);
			$("#school_calendar").val(Data['school_calendar']);
			$("#faculty_education").val(Data['faculty_education']);
			$("#primary_language").val(Data['primary_language']);
			$("#school_curriculum").val(Data['school_curriculum']);
			$("#grade_scale").val(Data['grade_scale']);
			document.getElementById('exam_based_promotion').checked = Data['exam_based_promotion'];
			document.getElementById('leaving_exams').checked = Data['leaving_exams'];
			$("#national_composition").val(Data['national_composition']);
			$("#gpa_distribution").val(Data['gpa_distribution']);
		}
	});
});
document.getElementById('submit_b').addEventListener("click", saveBasicFun, false);

//  href="extracurricular.html"
function saveBasicFun(evt) {
	evt.preventDefault();
	var Data = {};

		Data['school_name'] = $("#school_name").val();
		Data['school_address'] = $("#school_address").val();
		Data['school_website'] = $("#school_website").val();
		Data['school_phoneNumber'] = $("#school_phoneNumber").val();
		Data['school_background'] = $("#school_background").val();
		Data['contact_name'] = $("#contact_name").val();
		Data['contact_phone'] = $("#contact_phone").val();
		Data['contact_email'] = $("#contact_email").val();
		Data['class_size_9'] = $("#class_size_9").val();
		Data['class_size_10'] = $("#class_size_10").val();
		Data['class_size_11'] = $("#class_size_11").val();
		Data['class_size_12'] = $("#class_size_12").val();
		Data['percent_graduate'] = $("#percent_graduate").val();
		Data['faculty_student_ratio'] = $("#faculty_student_ratio").val();
		Data['precent_first_graduate'] = $("#precent_first_graduate").val();
		Data['school_calendar'] = $("#school_calendar").val();
		Data['faculty_education'] = $("#faculty_education").val();
		Data['primary_language'] = $("#primary_language").val();
		Data['school_curriculum'] = $("#school_curriculum").val();
		Data['grade_scale'] = $("#grade_scale").val();

		Data['exam_based_promotion'] = document.getElementById('exam_based_promotion').checked;
		Data['leaving_exams'] = document.getElementById('leaving_exams').checked;
		Data['national_composition'] = $("#national_composition").val();
		Data['gpa_distribution'] = $("#gpa_distribution").val();
		var teacher = JSON.parse(localStorage['teacher']);
		$.ajax({
			url: "http://api.youthimpactchina.com/smp/schoolprofile/update",
			method: "POST", data: {
				id: teacher.school, profile: JSON.stringify(Data)
			}, success: function(data){
				alert(data);
			}
		});
}
