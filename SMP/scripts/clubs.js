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
			$("#school_club_policy").val(Data["school_club_policy"]);
			$("#number_of_student_clubs").val(Data["number_of_student_clubs"]);
			$("#average_number_of_club").val(Data["average_number_of_club"]);
			$("#school_clubs").val(Data["school_clubs"]);
			$("#extracurricular_program").val(Data["extracurricular_program"]);
			$("#additional_notes").val(Data["additional_notes"]);
		}
	});
});
document.getElementById('submit_b').addEventListener("click", saveBasicFun, false);

function saveBasicFun(evt) {
	evt.preventDefault();
	var Data = {};
		Data["school_club_policy"] = $("#school_club_policy").val();
		Data["number_of_student_clubs"] = $("#number_of_student_clubs").val();
		Data["average_number_of_club"] = $("#average_number_of_club").val();
		Data["school_clubs"] = $("#school_clubs").val();
		Data["extracurricular_program"] = $("#extracurricular_program").val();
		Data["additional_notes"] = $("#additional_notes").val();

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
