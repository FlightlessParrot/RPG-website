<?php
session_start();
session_regenerate_id();
?>
<!DOCTYPE html>

<html>

<head>

	<!--dodatkowe pliki/extra files-->
	<?php
	include_once './php/mysql_login.php';
	include_once './php/guardian.php';
	require_once './php/admin_tool.php';
	require_once './php/pasek_logowania.php';
	require_once './php/heroes_page_sender.php';
	require_once './php/printHTML.php';
	?>

	<link href="style/style.css" type="text/css" rel="stylesheet">
	<link href="style/pages.css" type="text/css" rel="stylesheet">
	<link href="style/dropdown.css" type="text/css" rel="stylesheet">
	<link href="style/addtalent.css" type="text/css" rel="stylesheet">
	<script type="text/javascript" src="js/dropdown.js"></script>
	<script type="module" src='js/createTalentsTop.js'></script>
	<?php
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

	<title>RPG Web</title>
</head>

<!-- ramy strony / basic page's elements -->

<body>
	<div id="tlo">
		<div id="karta">

			<!-- menu-->
			<nav>
				<button class="menu" href="index.php" onmouseover="dropButton.showDropdown('first_drop')" onmouseout="dropButton.hideDropdown('first_drop')">
					The Mortal Realms
				</button>
				<ul id="first_drop" class="dropdown" onmouseover="dropButton.showDropdown('first_drop')" onmouseout="dropButton.hideDropdown('first_drop')">
					<script>
						const firstdropdown = new dropdownCreator('first_drop', links.firstdrop, links.firstdropnames);
					</script>
				</ul>

				<button class="menu" onmouseover="dropButton.showDropdown('second_drop')" onmouseout="dropButton.hideDropdown('second_drop')">
					The Fellowship
				</button>

				<ul id="second_drop" class="dropdown" onmouseover="dropButton.showDropdown('second_drop')" onmouseout="dropButton.hideDropdown('second_drop')">
					<script>
						const seconddropdown = new dropdownCreator('second_drop', links.seconddrop, links.seconddropnames);
					</script>
				</ul>

				<button class="menu" onmouseover="dropButton.showDropdown('third_drop')" onmouseout="dropButton.hideDropdown('third_drop')">
					My adventures
				</button>

				<ul id="third_drop" class="dropdown" onmouseover="dropButton.showDropdown('third_drop')" onmouseout="dropButton.hideDropdown('third_drop')">
					<script>
						const thirddropdown = new dropdownCreator('third_drop', links.thirddrop, links.thirddropnames);
					</script>
				</ul>

				<button class="menu" onmouseover="dropButton.showDropdown('fourth_drop')" onmouseout="dropButton.hideDropdown('fourth_drop')">
					My account
				</button>

				<ul id="fourth_drop" class="dropdown" onmouseover="dropButton.showDropdown('fourth_drop')" onmouseout="dropButton.hideDropdown('fourth_drop')">
					<script>
						const fourthdropdown = new dropdownCreator('fourth_drop', links.fourthdrop, links.fourthdropnames);
					</script>
				</ul>

			</nav>

			<!-- pasek logowania -->
			<div id="div_logowania">

				<?php

				// some defence against black magic
				$guard = new paladin();

				//our login box
				$loger = new log_in($guard);

				/* echo divy do zmiany*/
				//we do what we do - login div
				echo "<div>";
				$logerin = $loger->session_log($pdo);
				$guard->check_user();
				$loger->nice_try($pdo);
				$loger->log_out($logerin);
				echo "</div>";

				echo "<div>";
				$loger->change_password($loger, $pdo, $guard);
				echo "</div>";

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
				include './php/heroPage.php'
				?>
				

				<?php
				$checking = new hpage_object;
				?>

			</div>
		</div>
	</div>
	<script>
		eye.createMenuCanvas()
		myEventer()
	</script>
</body>

</html>