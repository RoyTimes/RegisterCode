$(document).ready(function() {
	if (!$.cookie('user') || $.cookie('user') == "no" || !$.cookie('id')) {
		location.href = "index.html";
	}
	var pickColor = "rgb(151,205,251)";
	document.body.style.background = "-webkit-gradient(linear, 0% 0%, 0% 100%,from(#639AC8), to(" + pickColor + "))"
	if (localStorage['school']) {
		$.ajax({
			url: "http://api.youthimpactchina.com/crm/school/get_info",
			method: "GET",
			data: {
				id: localStorage['school']
			},
			success: function(data) {
				$('#name').val(data.name);
				$('#province').val(data.province);
				$('#city').val(data.city);
				$('#region').val(data.region);
				$('#category').val(data.profile.category);
				$('#type').val(data.profile.type);
				$('#curriculum').val(data.profile.curriculum);
				$('#size').val(data.profile.size);
				$('#status').val(data.profile.status);
				$('#address').val(data.profile.address);
				$('#website').val(data.profile.website);
				$('#telephone').val(data.profile.telephone);
				$('#supplement').val(data.profile.supplement);
				$('#founding_time').val(data.profile.founding_time);
				$('#prestige').val(data.profile.prestige);
				$('#current_activity').val(data.profile.current_activity.note);
				$('#student_profile').val(data.profile.student_profile.note);
				$('#demand_analysis').val(data.profile.demand_analysis.note);
			}
		})
	}
});
function logout() {
	$.cookie('user', 'no');
	location.href = 'index.html';
}
function save() {
	var name = $('#name').val();
	var province = $('#province').val();
	var city = $('#city').val();
	var region = $('#region').val();

	var profile = {};
		profile.category = $('#category').val();
		profile.type = $('#type').val();
		profile.curriculum = $('#curriculum').val();
		profile.size = $('#size').val();
		profile.status = $('#status').val();
		profile.address = $('#address').val();
		profile.website = $('#website').val();
		profile.telephone = $('#telephone').val();
		profile.supplement = $('#supplement').val();
		profile.founding_time = $('#founding_time').val();
		profile.prestige = $('#prestige').val();
		profile.current_activity = {};
		profile.current_activity.note = $('#current_activity').val();
		profile.student_profile = {};
		profile.student_profile.note = $('#student_profile').val();
		profile.demand_analysis = {};
		profile.demand_analysis.note = $('#demand_analysis').val();
	if (localStorage['school'] && localStorage['school'] != 'new') {
		$.ajax({
			url: "http://api.youthimpactchina.com/crm/school/update",
			method: "POST",
			data: {
				name: name, province: province, region: region, city: city,
				profile: JSON.stringify(profile), id: localStorage['school']
			},
			success: function(data) {
				alert(data);
				location.href = "schools.html";
			}
		});
	} else {
		$.ajax({
			url: "http://api.youthimpactchina.com/crm/school/create",
			method: "POST",
			data: {
				name: name, province: province, region: region, city: city,
				profile: JSON.stringify(profile)
			},
			success: function(data) {
				alert(data);
				location.href = "schools.html";
			}
		})
	}
}
// let {type, status, purpose, note, senderID, schoolID, projectID, teacherID}
function profile() {
	location.href = "region.html";

}
