<?php
session_start();
session_regenerate_id();
?>
<!DOCTYPE html>

<html>

<head>

	<!--dodatkowe pliki/extra files-->
	<?php
	require_once './php/loginSQL.php';
	require_once './php/guardian.php';
	require_once './php/admin_tool.php';
	require_once './php/pasek_logowania.php';
	require_once './php/heroes_page_master.php';
	require_once './php/printHTML.php';
	?>

	<link href="./style/style.css" type="text/css" rel="stylesheet">
	<link href="./style/loginElement.css" type="text/css" rel="stylesheet">
	<link href="./style/dropdown.css" type="text/css" rel="stylesheet">
	<link href="./style/heroPage/heroPage.css" type="text/css" rel="stylesheet">
	<link href="./style/heroPage/addtalent.css" type="text/css" rel="stylesheet">
	<link href="./style/heroPage/addspells.css" type="text/css" rel="stylesheet">
	<link href="./style/heroPage/mainCharacteristic.css" type="text/css" rel="stylesheet">
	<link href="./style/heroPage/narrative.css" type="text/css" rel="stylesheet">
	<link href="./style/heroPage/skills.css" type="text/css" rel="stylesheet">
	<link href="./style/heroPage/buttons.css" type="text/css" rel="stylesheet">
	<link href="./style/heroPage/addInventory.css" type="text/css" rel="stylesheet">
	<link href="./style/heroPage/currency.css" type="text/css" rel="stylesheet">
	<link href="./style/heroPage/combatInventory.css" type="text/css" rel="stylesheet">
	
	<script type="module" src="js/dropdown.js"></script>
	<script type="module" src='js/createTalentsTop.js'></script>
	<script type="module" src='js/createSpellsTop.js'></script>
	<script type="module" src='js/createInventoryTop.js'></script>


	<title>RPG Web</title>
</head>

<body>
	<div id="tlo">
		<div id="karta">
			<!-- pasek logowania -->
			<nav></nav>
			<div id="div_logowania">
				<?php

				// some defence against black magic
				$guard = new paladin();

				//our login box
				$loger = new log_in($guard);

				//we do what we do - login div
				$logerin = $loger->session_log($pdo);
				$guard->check_user();
				$loger->nice_try($pdo);
				$loger->log_out($logerin);
				$loger->change_password($loger, $pdo, $guard);

				//admin panel
				$adminis = new god;
				$adminis->who_are_you($pdo, $loger, $guard);
				?>
			</div>

			<!-- obraz nagłówkowy/head image[my own translation :)] -->
			<div id="naglowek">
				<h1>Tworzenie karty postaci</h1>
			</div>

			<!-- kontrolna część -->
			<div id="content" style="min-height: 1000px;">
				<!-- hero's page -->
				<?php
				include './php/heroPage.php';
				$checking = new hpage_object;
				?>
			</div>
		</div>
	</div>

</body>

</html>