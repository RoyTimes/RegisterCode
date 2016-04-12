$(document).ready(function() {
	var pickColor = "rgb(170,79,98)";
	document.body.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%,from(#FFF), to(" + pickColor + "))";

	$.ajax({
		url: "http://api.youthimpactchina.com/smp/projects",
		method: "GET", success: function(data) {
			for (var item in data) addProject(data[item]);
		}
	});
});

function addProject(project) {
	console.log(project);

	var container = document.getElementById('project');
	var newProject =
	'<div class="card col s12 m12">' +
		'<div class="card-content activator">' +
			'<span class="card-title activator grey-text text-darken-4">'+project.name+'&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;' + project.year + '</span>' +
			'<br/>' +
			'<span class="card-title activator grey-text text-darken-4" style="font-size: 17px;">Caterogry:&nbsp;&nbsp;' + project.caterogry + '</span>' +
			'<br/>' +
			'<span class="card-title activator grey-text text-darken-4" style="font-size: 17px;">Host:&nbsp;&nbsp;'+ project.host +'</span>' +
			'<br/>' +
			'<span class="card-title activator grey-text text-darken-4" style="font-size: 14px;">Date:&nbsp;&nbsp;' + project.date + '</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
			'<span class="card-title activator grey-text text-darken-4"  style="font-size: 15px;">Location:&nbsp;&nbsp;'+project.location+'</span>' +
			'<br/>' +
			'</div>' +
			'<div class="card-reveal">' +
			'<span class="card-title grey-text text-darken-4">Description<i  class="material-icons right">close</i></span>' +
			'<p>' + project.description + '</p>' +
		'</div>' +
	'</div>';
	container.innerHTML = container.innerHTML + newProject;
	$('.modal-trigger').leanModal();
}
