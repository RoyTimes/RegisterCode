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
			$("#Composite_Average_Score").val(Data["Composite_Average_Score"]);
			$("#Composite_Students_Tested").val(Data["Composite_Students_Tested"]);
			$("#Reading_Average_Score").val(Data["Reading_Average_Score"]);
			$("#Reading_Students_Tested").val(Data["Reading_Students_Tested"]);
			$("#Math_Average_Score").val(Data["Math_Average_Score"]);
			$("#Math_Students_Tested").val(Data["Math_Students_Tested"]);
			$("#Writing_Average_Score").val(Data["Writing_Average_Score"]);
			$("#Writing_Students_Tested").val(Data["Writing_Students_Tested"]);
			$("#Biology_Ecology_Average_Score").val(Data["Biology_Ecology_Average_Score"]);
			$("#Biology_Ecology_Students_Tested").val(Data["Biology_Ecology_Students_Tested"]);
			$("#Biology_Molecular_Average_Score").val(Data["Biology_Molecular_Average_Score"]);
			$("#Biology_Molecular_Students_Tested").val(Data["Biology_Molecular_Students_Tested"]);
			$("#Chemistry_Average_Score").val(Data["Chemistry_Average_Score"]);
			$("#Chemistry_Students_Tested").val(Data["Chemistry_Students_Tested"]);
			$("#Chinese_with_Listening_Average_Score").val(Data["Chinese_with_Listening_Average_Score"]);
			$("#Chinese_with_Listening_Students_Tested").val(Data["Chinese_with_Listening_Students_Tested"]);
			$("#English_Language_Average_Score").val(Data["English_Language_Average_Score"]);
			$("#English_Language_Students_Tested").val(Data["English_Language_Students_Tested"]);
			$("#English_Literature_Average_Score").val(Data["English_Literature_Average_Score"]);
			$("#English_Literature_Students_Tested").val(Data["English_Literature_Students_Tested"]);
			$("#Level1_Average_Score").val(Data["Level1_Average_Score"]);
			$("#Level1_Students_Tested").val(Data["Level1_Students_Tested"]);
			$("#Level2_Average_Score").val(Data["Level2_Average_Score"]);
			$("#Level2_Students_Tested").val(Data["Level2_Students_Tested"]);
			$("#Physics_Average_Score").val(Data["Physics_Average_Score"]);
			$("#Physics_Students_Tested").val(Data["Physics_Students_Tested"]);
			$("#U.S._History_Average_Score").val(Data["U.S._History_Average_Score"]);
			$("#U.S._History_Students_Tested").val(Data["U.S._History_Students_Tested"]);
			$("#World_History_Average_Score").val(Data["World_History_Average_Score"]);
			$("#World_History_Students_Tested").val(Data["World_History_Students_Tested"]);
			$("#Composite1_Average_Score").val(Data["Composite1_Average_Score"]);
			$("#Composite1_Students_Tested").val(Data["Composite1_Students_Tested"]);
			$("#English_Average_Score").val(Data["English_Average_Score"]);
			$("#English_Students_Tested").val(Data["English_Students_Tested"]);
			$("#Mathematics_Average_Score").val(Data["Mathematics_Average_Score"]);
			$("#Mathematics_Students_Tested").val(Data["Mathematics_Students_Tested"]);
			$("#Reading1_Average_Score").val(Data["Reading1_Average_Score"]);
			$("#Reading1_Students_Tested").val(Data["Reading1_Students_Tested"]);
			$("#Science_Average_Score").val(Data["Science_Average_Score"]);
			$("#Science_Students_Tested").val(Data["Science_Students_Tested"]);
			$("#Writing1_Average_Score").val(Data["Writing1_Average_Score"]);
			$("#Writing1_Students_Tested").val(Data["Writing1_Students_Tested"]);
			$("#AP_Courses").val(Data["AP_Courses"]);
			$("#Candidates_2014").val(Data["Candidates_2014"]);
			$("#Candidates_2015").val(Data["Candidates_2015"]);
			$("#Candidates_2016").val(Data["Candidates_2016"]);
			$("#Exams_Taken_2014").val(Data["Exams_Taken_2014"]);
			$("#Exams_Taken_2015").val(Data["Exams_Taken_2015"]);
			$("#Exams_Taken_2016").val(Data["Exams_Taken_2016"]);
			$("#Passing_Percent_2014").val(Data["Passing_Percent_2014"]);
			$("#Passing_Percent_2015").val(Data["Passing_Percent_2015"]);
			$("#Passing_Percent_2016").val(Data["Passing_Percent_2016"]);
			$("#Percent_Of_4_5_2014").val(Data["Percent_Of_4_5_2014"]);
			$("#Percent_Of_4_5_2015").val(Data["Percent_Of_4_5_2015"]);
			$("#Percent_Of_4_5_2016").val(Data["Percent_Of_4_5_2016"]);
			$("#Art_History_5").val(Data["Art_History_5"]);
			$("#Art_History_4").val(Data["Art_History_4"]);
			$("#Art_History_3").val(Data["Art_History_3"]);
			$("#Art_History_2").val(Data["Art_History_2"]);
			$("#Art_History_1").val(Data["Art_History_1"]);
			$("#Biology_5").val(Data["Biology_5"]);
			$("#Biology_4").val(Data["Biology_4"]);
			$("#Biology_3").val(Data["Biology_3"]);
			$("#Biology_2").val(Data["Biology_2"]);
			$("#Biology_1").val(Data["Biology_1"]);
			$("#Calculus_AB_5").val(Data["Calculus_AB_5"]);
			$("#Calculus_AB_4").val(Data["Calculus_AB_4"]);
			$("#Calculus_AB_3").val(Data["Calculus_AB_3"]);
			$("#Calculus_AB_2").val(Data["Calculus_AB_2"]);
			$("#Calculus_AB_1").val(Data["Calculus_AB_1"]);
			$("#Calculus_BC_5").val(Data["Calculus_BC_5"]);
			$("#Calculus_BC_4").val(Data["Calculus_BC_4"]);
			$("#Calculus_BC_3").val(Data["Calculus_BC_3"]);
			$("#Calculus_BC_2").val(Data["Calculus_BC_2"]);
			$("#Calculus_BC_1").val(Data["Calculus_BC_1"]);
			$("#Chemistry_5").val(Data["Chemistry_5"]);
			$("#Chemistry_4").val(Data["Chemistry_4"]);
			$("#Chemistry_3").val(Data["Chemistry_3"]);
			$("#Chemistry_2").val(Data["Chemistry_2"]);
			$("#Chemistry_1").val(Data["Chemistry_1"]);
			$("#Computer_Science_A_5").val(Data["Computer_Science_A_5"]);
			$("#Computer_Science_A_4").val(Data["Computer_Science_A_4"]);
			$("#Computer_Science_A_3").val(Data["Computer_Science_A_3"]);
			$("#Computer_Science_A_2").val(Data["Computer_Science_A_2"]);
			$("#Computer_Science_A_1").val(Data["Computer_Science_A_1"]);
			$("#English_Lang_Comp_5").val(Data["English_Lang_Comp_5"]);
			$("#English_Lang_Comp_4").val(Data["English_Lang_Comp_4"]);
			$("#English_Lang_Comp_3").val(Data["English_Lang_Comp_3"]);
			$("#English_Lang_Comp_2").val(Data["English_Lang_Comp_2"]);
			$("#English_Lang_Comp_1").val(Data["English_Lang_Comp_1"]);
			$("#English_Lit_Comp_5").val(Data["English_Lit_Comp_5"]);
			$("#English_Lit_Comp_4").val(Data["English_Lit_Comp_4"]);
			$("#English_Lit_Comp_3").val(Data["English_Lit_Comp_3"]);
			$("#English_Lit_Comp_2").val(Data["English_Lit_Comp_2"]);
			$("#English_Lit_Comp_1").val(Data["English_Lit_Comp_1"]);
			$("#Environmental_Science_5").val(Data["Environmental_Science_5"]);
			$("#Environmental_Science_4").val(Data["Environmental_Science_4"]);
			$("#Environmental_Science_3").val(Data["Environmental_Science_3"]);
			$("#Environmental_Science_2").val(Data["Environmental_Science_2"]);
			$("#Environmental_Science_1").val(Data["Environmental_Science_1"]);
			$("#European_History_5").val(Data["European_History_5"]);
			$("#European_History_4").val(Data["European_History_4"]);
			$("#European_History_3").val(Data["European_History_3"]);
			$("#European_History_2").val(Data["European_History_2"]);
			$("#European_History_1").val(Data["European_History_1"]);
			$("#Comparative_5").val(Data["Comparative_5"]);
			$("#Comparative_4").val(Data["Comparative_4"]);
			$("#Comparative_3").val(Data["Comparative_3"]);
			$("#Comparative_2").val(Data["Comparative_2"]);
			$("#Comparative_1").val(Data["Comparative_1"]);
			$("#US_5").val(Data["US_5"]);
			$("#US_4").val(Data["US_4"]);
			$("#US_3").val(Data["US_3"]);
			$("#US_2").val(Data["US_2"]);
			$("#US_1").val(Data["US_1"]);
			$("#Human_Geography_5").val(Data["Human_Geography_5"]);
			$("#Human_Geography_4").val(Data["Human_Geography_4"]);
			$("#Human_Geography_3").val(Data["Human_Geography_3"]);
			$("#Human_Geography_2").val(Data["Human_Geography_2"]);
			$("#Human_Geography_1").val(Data["Human_Geography_1"]);
			$("#Macroeconomics_5").val(Data["Macroeconomics_5"]);
			$("#Macroeconomics_4").val(Data["Macroeconomics_4"]);
			$("#Macroeconomics_3").val(Data["Macroeconomics_3"]);
			$("#Macroeconomics_2").val(Data["Macroeconomics_2"]);
			$("#Macroeconomics_1").val(Data["Macroeconomics_1"]);
			$("#Microeconomics_5").val(Data["Microeconomics_5"]);
			$("#Microeconomics_4").val(Data["Microeconomics_4"]);
			$("#Microeconomics_3").val(Data["Microeconomics_3"]);
			$("#Microeconomics_2").val(Data["Microeconomics_2"]);
			$("#Microeconomics_1").val(Data["Microeconomics_1"]);
			$("#Physics_B_5").val(Data["Physics_B_5"]);
			$("#Physics_B_4").val(Data["Physics_B_4"]);
			$("#Physics_B_3").val(Data["Physics_B_3"]);
			$("#Physics_B_2").val(Data["Physics_B_2"]);
			$("#Physics_B_1").val(Data["Physics_B_1"]);
			$("#Physics_EM_5").val(Data["Physics_EM_5"]);
			$("#Physics_EM_4").val(Data["Physics_EM_4"]);
			$("#Physics_EM_3").val(Data["Physics_EM_3"]);
			$("#Physics_EM_2").val(Data["Physics_EM_2"]);
			$("#Physics_EM_1").val(Data["Physics_EM_1"]);
			$("#Physics_Mechanics_5").val(Data["Physics_Mechanics_5"]);
			$("#Physics_Mechanic_4").val(Data["Physics_Mechanic_4"]);
			$("#Physics_Mechanic_3").val(Data["Physics_Mechanic_3"]);
			$("#Physics_Mechanic_2").val(Data["Physics_Mechanic_2"]);
			$("#Physics_Mechanic_1").val(Data["Physics_Mechanic_1"]);
			$("#Psychology_5").val(Data["Psychology_5"]);
			$("#Psychology_4").val(Data["Psychology_4"]);
			$("#Psychology_3").val(Data["Psychology_3"]);
			$("#Psychology_2").val(Data["Psychology_2"]);
			$("#Psychology_1").val(Data["Psychology_1"]);
			$("#Statistics_5").val(Data["Statistics_5"]);
			$("#Statistics_4").val(Data["Statistics_4"]);
			$("#Statistics_3").val(Data["Statistics_3"]);
			$("#Statistics_2").val(Data["Statistics_2"]);
			$("#Statistics_1").val(Data["Statistics_1"]);
			$("#Stuidio_Art_5").val(Data["Stuidio_Art_5"]);
			$("#Stuidio_Art_4").val(Data["Stuidio_Art_4"]);
			$("#Stuidio_Art_3").val(Data["Stuidio_Art_3"]);
			$("#Stuidio_Art_2").val(Data["Stuidio_Art_2"]);
			$("#Stuidio_Art_1").val(Data["Stuidio_Art_1"]);
			$("#US_History_5").val(Data["US_History_5"]);
			$("#US_History_4").val(Data["US_History_4"]);
			$("#US_History_3").val(Data["US_History_3"]);
			$("#US_History_2").val(Data["US_History_2"]);
			$("#US_History_1").val(Data["US_History_1"]);
			$("#World_History_5").val(Data["World_History_5"]);
			$("#World_History_4").val(Data["World_History_4"]);
			$("#World_History_3").val(Data["World_History_3"]);
			$("#World_History_2").val(Data["World_History_2"]);
			$("#World_History_1").val(Data["World_History_1"]);
			$("#Other").val(Data["Other"]);
			$("#Other5").val(Data["Other5"]);
			$("#Other_4").val(Data["Other_4"]);
			$("#Other_3").val(Data["Other_3"]);
			$("#Other_2").val(Data["Other_2"]);
			$("#Other_1").val(Data["Other_1"]);
			$("#IB_Courses_Offered").val(Data["IB_Courses_Offered"]);
			$("#IB_Average_Score").val(Data["IB_Average_Score"]);
			$("#TOK").val(Data["TOK"]);
			$("#TOK_Average_Score").val(Data["TOK_Average_Score"]);
			$("#TOK_Tested").val(Data["TOK_Tested"]);
			$("#A_level_Courses_Offered").val(Data["A_level_Courses_Offered"]);
		}
	});
});
document.getElementById('submit_b').addEventListener("click", saveBasicFun, false);

function saveBasicFun(evt) {
	evt.preventDefault();
	var Data = {};

		Data["Composite_Average_Score"] = $("#Composite_Average_Score").val();
		Data["Composite_Students_Tested"] = $("#Composite_Students_Tested").val();
		Data["Reading_Average_Score"] = $("#Reading_Average_Score").val();
		Data["Reading_Students_Tested"] = $("#Reading_Students_Tested").val();
		Data["Math_Average_Score"] = $("#Math_Average_Score").val();
		Data["Math_Students_Tested"] = $("#Math_Students_Tested").val();
		Data["Writing_Average_Score"] = $("#Writing_Average_Score").val();
		Data["Writing_Students_Tested"] = $("#Writing_Students_Tested").val();
		Data["Biology_Ecology_Average_Score"] = 	$("#Biology_Ecology_Average_Score").val();
		Data["Biology_Ecology_Students_Tested"] = 	$("#Biology_Ecology_Students_Tested").val();
		Data["Biology_Molecular_Average_Score"] = 	$("#Biology_Molecular_Average_Score").val();
		Data["Biology_Molecular_Students_Tested"] = 	$("#Biology_Molecular_Students_Tested").val();
		Data["Chemistry_Average_Score"] = $("#Chemistry_Average_Score").val();
		Data["Chemistry_Students_Tested"] = $("#Chemistry_Students_Tested").val();
		Data["Chinese_with_Listening_Average_Score"] = $("#Chinese_with_Listening_Average_Score").val();
		Data["Chinese_with_Listening_Students_Tested"] = 	$("#Chinese_with_Listening_Students_Tested").val();
		Data["English_Language_Average_Score"] = 	$("#English_Language_Average_Score").val();
		Data["English_Language_Students_Tested"] = $("#English_Language_Students_Tested").val();
		Data["English_Literature_Average_Score"] = $("#English_Literature_Average_Score").val();
		Data["English_Literature_Students_Tested"] = 	$("#English_Literature_Students_Tested").val();
		Data["Level1_Average_Score"] = $("#Level1_Average_Score").val();
		Data["Level1_Students_Tested"] = $("#Level1_Students_Tested").val();
		Data["Level2_Average_Score"] = $("#Level2_Average_Score").val();
		Data["Level2_Students_Tested"] = $("#Level2_Students_Tested").val();
		Data["Physics_Average_Score"] = $("#Physics_Average_Score").val();
		Data["Physics_Students_Tested"] = $("#Physics_Students_Tested").val();
		Data["U.S._History_Average_Score"] = $("#U.S._History_Average_Score").val();
		Data["U.S._History_Students_Tested"] = $("#U.S._History_Students_Tested").val();
		Data["World_History_Average_Score"] = 	$("#World_History_Average_Score").val();
		Data["World_History_Students_Tested"] = 	$("#World_History_Students_Tested").val();
		Data["Composite1_Average_Score"] = $("#Composite1_Average_Score").val();
		Data["Composite1_Students_Tested"] = $("#Composite1_Students_Tested").val();
		Data["English_Average_Score"] = $("#English_Average_Score").val();
		Data["English_Students_Tested"] = $("#English_Students_Tested").val();
		Data["Mathematics_Average_Score"] = $("#Mathematics_Average_Score").val();
		Data["Mathematics_Students_Tested"] = 	$("#Mathematics_Students_Tested").val();
		Data["Reading1_Average_Score"] = $("#Reading1_Average_Score").val();
		Data["Reading1_Students_Tested"] = $("#Reading1_Students_Tested").val();
		Data["Science_Average_Score"] = $("#Science_Average_Score").val();
		Data["Science_Students_Tested"] = $("#Science_Students_Tested").val();
		Data["Writing1_Average_Score"] = $("#Writing1_Average_Score").val();
		Data["Writing1_Students_Tested"] = $("#Writing1_Students_Tested").val();
		Data["AP_Courses"] = $("#AP_Courses").val();
		Data["Candidates_2014"] = $("#Candidates_2014").val();
		Data["Candidates_2015"] = $("#Candidates_2015").val();
		Data["Candidates_2016"] = $("#Candidates_2016").val();
		Data["Exams_Taken_2014"] = $("#Exams_Taken_2014").val();
		Data["Exams_Taken_2015"] = $("#Exams_Taken_2015").val();
		Data["Exams_Taken_2016"] = $("#Exams_Taken_2016").val();
		Data["Passing_Percent_2014"] = $("#Passing_Percent_2014").val();
		Data["Passing_Percent_2015"] = $("#Passing_Percent_2015").val();
		Data["Passing_Percent_2016"] = $("#Passing_Percent_2016").val();
		Data["Percent_Of_4_5_2014"] = $("#Percent_Of_4_5_2014").val();
		Data["Percent_Of_4_5_2015"] = $("#Percent_Of_4_5_2015").val();
		Data["Percent_Of_4_5_2016"] = $("#Percent_Of_4_5_2016").val();
		Data["Art_History_5"] = $("#Art_History_5").val();
		Data["Art_History_4"] = $("#Art_History_4").val();
		Data["Art_History_3"] = $("#Art_History_3").val();
		Data["Art_History_2"] = $("#Art_History_2").val();
		Data["Art_History_1"] = $("#Art_History_1").val();
		Data["Biology_5"] = $("#Biology_5").val();
		Data["Biology_4"] = $("#Biology_4").val();
		Data["Biology_3"] = $("#Biology_3").val();
		Data["Biology_2"] = $("#Biology_2").val();
		Data["Biology_1"] = $("#Biology_1").val();
		Data["Calculus_AB_5"] = $("#Calculus_AB_5").val();
		Data["Calculus_AB_4"] = $("#Calculus_AB_4").val();
		Data["Calculus_AB_3"] = $("#Calculus_AB_3").val();
		Data["Calculus_AB_2"] = $("#Calculus_AB_2").val();
		Data["Calculus_AB_1"] = $("#Calculus_AB_1").val();
		Data["Calculus_BC_5"] = $("#Calculus_BC_5").val();
		Data["Calculus_BC_4"] = $("#Calculus_BC_4").val();
		Data["Calculus_BC_3"] = $("#Calculus_BC_3").val();
		Data["Calculus_BC_2"] = $("#Calculus_BC_2").val();
		Data["Calculus_BC_1"] = $("#Calculus_BC_1").val();
		Data["Chemistry_5"] = $("#Chemistry_5").val();
		Data["Chemistry_4"] = $("#Chemistry_4").val();
		Data["Chemistry_3"] = $("#Chemistry_3").val();
		Data["Chemistry_2"] = $("#Chemistry_2").val();
		Data["Chemistry_1"] = $("#Chemistry_1").val();
		Data["Computer_Science_A_5"] = $("#Computer_Science_A_5").val();
		Data["Computer_Science_A_4"] = $("#Computer_Science_A_4").val();
		Data["Computer_Science_A_3"] = $("#Computer_Science_A_3").val();
		Data["Computer_Science_A_2"] = $("#Computer_Science_A_2").val();
		Data["Computer_Science_A_1"] = $("#Computer_Science_A_1").val();
		Data["English_Lang_Comp_5"] = $("#English_Lang_Comp_5").val();
		Data["English_Lang_Comp_4"] = $("#English_Lang_Comp_4").val();
		Data["English_Lang_Comp_3"] = $("#English_Lang_Comp_3").val();
		Data["English_Lang_Comp_2"] = $("#English_Lang_Comp_2").val();
		Data["English_Lang_Comp_1"] = $("#English_Lang_Comp_1").val();
		Data["English_Lit_Comp_5"] = $("#English_Lit_Comp_5").val();
		Data["English_Lit_Comp_4"] = $("#English_Lit_Comp_4").val();
		Data["English_Lit_Comp_3"] = $("#English_Lit_Comp_3").val();
		Data["English_Lit_Comp_2"] = $("#English_Lit_Comp_2").val();
		Data["English_Lit_Comp_1"] = $("#English_Lit_Comp_1").val();
		Data["Environmental_Science_5"] = $("#Environmental_Science_5").val();
		Data["Environmental_Science_4"] = $("#Environmental_Science_4").val();
		Data["Environmental_Science_3"] = $("#Environmental_Science_3").val();
		Data["Environmental_Science_2"] = $("#Environmental_Science_2").val();
		Data["Environmental_Science_1"] = $("#Environmental_Science_1").val();
		Data["European_History_5"] = $("#European_History_5").val();
		Data["European_History_4"] = $("#European_History_4").val();
		Data["European_History_3"] = $("#European_History_3").val();
		Data["European_History_2"] = $("#European_History_2").val();
		Data["European_History_1"] = $("#European_History_1").val();
		Data["Comparative_5"] = $("#Comparative_5").val();
		Data["Comparative_4"] = $("#Comparative_4").val();
		Data["Comparative_3"] = $("#Comparative_3").val();
		Data["Comparative_2"] = $("#Comparative_2").val();
		Data["Comparative_1"] = $("#Comparative_1").val();
		Data["US_5"] = $("#US_5").val();
		Data["US_4"] = $("#US_4").val();
		Data["US_3"] = $("#US_3").val();
		Data["US_2"] = $("#US_2").val();
		Data["US_1"] = $("#US_1").val();
		Data["Human_Geography_5"] = $("#Human_Geography_5").val();
		Data["Human_Geography_4"] = $("#Human_Geography_4").val();
		Data["Human_Geography_3"] = $("#Human_Geography_3").val();
		Data["Human_Geography_2"] = $("#Human_Geography_2").val();
		Data["Human_Geography_1"] = $("#Human_Geography_1").val();
		Data["Macroeconomics_5"] = $("#Macroeconomics_5").val();
		Data["Macroeconomics_4"] = $("#Macroeconomics_4").val();
		Data["Macroeconomics_3"] = $("#Macroeconomics_3").val();
		Data["Macroeconomics_2"] = $("#Macroeconomics_2").val();
		Data["Macroeconomics_1"] = $("#Macroeconomics_1").val();
		Data["Microeconomics_5"] = $("#Microeconomics_5").val();
		Data["Microeconomics_4"] = $("#Microeconomics_4").val();
		Data["Microeconomics_3"] = $("#Microeconomics_3").val();
		Data["Microeconomics_2"] = $("#Microeconomics_2").val();
		Data["Microeconomics_1"] = $("#Microeconomics_1").val();
		Data["Physics_B_5"] = $("#Physics_B_5").val();
		Data["Physics_B_4"] = $("#Physics_B_4").val();
		Data["Physics_B_3"] = $("#Physics_B_3").val();
		Data["Physics_B_2"] = $("#Physics_B_2").val();
		Data["Physics_B_1"] = $("#Physics_B_1").val();
		Data["Physics_EM_5"] = $("#Physics_EM_5").val();
		Data["Physics_EM_4"] = $("#Physics_EM_4").val();
		Data["Physics_EM_3"] = $("#Physics_EM_3").val();
		Data["Physics_EM_2"] = $("#Physics_EM_2").val();
		Data["Physics_EM_1"] = $("#Physics_EM_1").val();
		Data["Physics_Mechanics_5"] = $("#Physics_Mechanics_5").val();
		Data["Physics_Mechanic_4"] = $("#Physics_Mechanic_4").val();
		Data["Physics_Mechanic_3"] = $("#Physics_Mechanic_3").val();
		Data["Physics_Mechanic_2"] = $("#Physics_Mechanic_2").val();
		Data["Physics_Mechanic_1"] = $("#Physics_Mechanic_1").val();
		Data["Psychology_5"] = $("#Psychology_5").val();
		Data["Psychology_4"] = $("#Psychology_4").val();
		Data["Psychology_3"] = $("#Psychology_3").val();
		Data["Psychology_2"] = $("#Psychology_2").val();
		Data["Psychology_1"] = $("#Psychology_1").val();
		Data["Statistics_5"] = $("#Statistics_5").val();
		Data["Statistics_4"] = $("#Statistics_4").val();
		Data["Statistics_3"] = $("#Statistics_3").val();
		Data["Statistics_2"] = $("#Statistics_2").val();
		Data["Statistics_1"] = $("#Statistics_1").val();
		Data["Stuidio_Art_5"] = $("#Stuidio_Art_5").val();
		Data["Stuidio_Art_4"] = $("#Stuidio_Art_4").val();
		Data["Stuidio_Art_3"] = $("#Stuidio_Art_3").val();
		Data["Stuidio_Art_2"] = $("#Stuidio_Art_2").val();
		Data["Stuidio_Art_1"] = $("#Stuidio_Art_1").val();
		Data["US_History_5"] = $("#US_History_5").val();
		Data["US_History_4"] = $("#US_History_4").val();
		Data["US_History_3"] = $("#US_History_3").val();
		Data["US_History_2"] = $("#US_History_2").val();
		Data["US_History_1"] = $("#US_History_1").val();
		Data["World_History_5"] = $("#World_History_5").val();
		Data["World_History_4"] = $("#World_History_4").val();
		Data["World_History_3"] = $("#World_History_3").val();
		Data["World_History_2"] = $("#World_History_2").val();
		Data["World_History_1"] = $("#World_History_1").val();
		Data["Other"] = $("#Other").val();
		Data["Other5"] = $("#Other5").val();
		Data["Other_4"] = $("#Other_4").val();
		Data["Other_3"] = $("#Other_3").val();
		Data["Other_2"] = $("#Other_2").val();
		Data["Other_1"] = $("#Other_1").val();
		Data["IB_Courses_Offered"] = $("#IB_Courses_Offered").val();
		Data["IB_Average_Score"] = $("#IB_Average_Score").val();
		Data["IB_Students_Tested"] = $("#IB_Students_Tested").val();
		Data["TOK"] = $("#TOK").val();
		Data["TOK_Average_Score"] = $("#TOK_Average_Score").val();
		Data["TOK_Tested"] = $("#TOK_Tested").val();
		Data["A_level_Courses_Offered"] = $("#A_level_Courses_Offered").val();
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