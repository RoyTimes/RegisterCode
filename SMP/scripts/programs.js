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
			$("#English").val(Data["English"]);
			$("#Social_Studies").val(Data["Social_Studies"]);
			$("#Mathematics").val(Data["Mathematics"]);
			$("#Science").val(Data["Science"]);
			$("#Modern_Languages").val(Data["Modern_Languages"]);
			$("#Arts").val(Data["Arts"]);
			$("#Information_Techonology").val(Data["Information_Techonology"]);
			$("#Physical_Education").val(Data["Physical_Education"]);
			$("#Other__1").val(Data["Other__1"]);
		}
	});
});
document.getElementById('submit_b').addEventListener("click", saveBasicFun, false);

//  href="extracurricular.html"
function saveBasicFun(evt) {
	evt.preventDefault();
	var Data = {};

		Data["English"] = $("#English").val();
		Data["Social_Studies"] = $("#Social_Studies").val();
		Data["Mathematics"] = $("#Mathematics").val();
		Data["Science"] = $("#Science").val();
		Data["Modern_Languages"] = $("#Modern_Languages").val();
		Data["Arts"] = $("#Arts").val();
		Data["Information_Techonology"] = $("#Information_Techonology").val();
		Data["Physical_Education"] = $("#Physical_Education").val();
		Data["Other__1"] = $("#Other__1").val();
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
