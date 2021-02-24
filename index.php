<?php
$cookie_name = "a_user";
$cookie_value = "55";
setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
if(!isset($_COOKIE[$cookie_name])) {
	//echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
	/*echo "Cookie '" . $cookie_name . "' is set!<br>";
	echo "Value is: " . $_COOKIE[$cookie_name];*/
}
// CREATE USER 'automate_ochello'@'%' IDENTIFIED WITH mysql_native_password BY 'AutoMate@Bigabox@123!!';
//automate_ochello
//GRANT ALL ON automate_ochello.* TO 'automate_ochello'@'%';
?>

<iframe src="http://localhost:5678" frameborder="0"></iframe>
<style>
	iframe{
		position: absolute;
		width: 100%;
		height: 100%;
		top:0;
		left:0;
		right:0;
		bottom:0;
	}
</style>
