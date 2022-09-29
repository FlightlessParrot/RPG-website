<?php //mysql_login.php
$server='localhost';
$dbname='users';
$admin='root';
$admin_pass='Valpoqw123#';
$chrf='utf8mb4';
$attr="mysql:host=$server;dbname=$dbname;charset=$chrf";
$opts=
[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION,
PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
PDO::ATTR_EMULATE_PREPARES=>FALSE,];
//a
?>