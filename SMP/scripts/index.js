document.getElementById('login').addEventListener("click", loginFun, false);

$(document).ready(function() {
	if ($.cookie('user') != undefined &&
	        $.cookie('user') != 'not login') {
	    location.href = 'admin.html';
	}
});

function loginFun(evt) {
	// location.href = 'admin.html';


	var password = document.getElementById('password').value;
	var user_email = document.getElementById('email').value;
	var user_password = hex_sha1(hex_sha1(hex_sha1(hex_sha1(password + "yiquan")+"yidaquan")));

	$.ajax({
		url: 'http://api.youthimpactchina.com/account/login/teacher',
		method: "post",
		data: {
			email: user_email,
			passwd: user_password
		},
		success: function(data, status, xhr) {
			if (data == "auth success") {
				$.cookie('user', user_email);
				$.ajax({
					url: "http://api.youthimpactchina.com/smp/teacher",
					method: "GET", data: {email: user_email},
					success: function(data) {
						localStorage['teacher'] = JSON.stringify(data)
						location.href = "admin.html";
					}
				})

			} else {alert(data);}
		}
	});
}
function redirFun(evt) {
	location.href = "signup.html";
}
