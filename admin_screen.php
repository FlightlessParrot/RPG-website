<!DOCTYPE html>
<html>
<body>

<div style="background-color: black; color: white;">

<!--formularz zmiany hasła dla admina-->
<p style="display:block";> change user's password </p>

<div style="margin-bottom: 1em;"> 

<form action="<?php $_SERVER['PHP_SELF'] ?>" method=post style="display: inline">
    <p> Login:</p><input type="text" name="ch_login" size=20 maxlength=20><br>
    <p>Chose new password</p><input type="password" name="ch_pass" size=20 maxlength=20><br><br>
    <input type="submit" value="sent">
</form>

</div>   

</div>

</body>
</html>