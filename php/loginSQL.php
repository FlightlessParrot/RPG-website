<?php
    require_once 'mysql_login.php';
	// logujemy się / logging in ;)
	try {
		$pdo = new pdo($attr, $admin, $admin_pass, $opts);
	} catch (PDOException $controlmysqllog) {
		throw new PDOException($controlmysqllog->getmessage(), (int)$controlmysqllog->getCode());
	}

	try {
		$pdop = new pdo($attr2, $admin, $admin_pass, $opts);
	} catch (PDOException $controlmysqllog) {
		throw new PDOException($controlmysqllog->getmessage(), (int)$controlmysqllog->getCode());
	}
?>