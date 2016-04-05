document.getElementById('login').addEventListener("click", loginFun, false);
$(document).ready(function() {
	if ($.cookie('user') && $.cookie('user') != "no") {
		location.href = "admin.html";
	}

});

function loginFun(evt) {
	var password = document.getElementById('password').value;
	var user_email = document.getElementById('email').value;
	var user_password = hex_sha1(hex_sha1(hex_sha1(hex_sha1(password + "yiquan")+"yidaquan")));

	$.ajax({
		url: 'http://api.youthimpactchina.com/account/login/employee',
		method: "post",
		data: {
			email: user_email,
			passwd: user_password
		},
		success: function(data, status, xhr) {
			if (data.substr(0, 1) == '5') {

				$.cookie('user', user_email);
				$.cookie('id', data);

				location.href = "admin.html";
			} else { alert(data); }
		}
	});
}
