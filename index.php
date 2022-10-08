<?php
session_start();
session_regenerate_id();
?>
<!DOCTYPE html>

<html>

<head>

	<!--dodatkowe pliki/extra files-->
	<?php
	include_once 'mysql_login.php';
	include_once 'guardian.php';
	require_once 'admin_tool.php';
	require_once 'pasek_logowania.php';
	?>

	<link href="style/style.css" type="text/css" rel="stylesheet">
	<script type="text/javascript" src="./dropdown.js"></script>
	<script type="text/javascript" src="./buildpages_skilL.js"></script>
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
					<span>Witaj podróżniku!</span>
				</button>
				<ul id="first_drop" class="dropdown" onmouseover="dropButton.showDropdown('first_drop')" onmouseout="dropButton.hideDropdown('first_drop')">
					<script>
						const firstdropdown = new dropdownCreator('first_drop', links.firstdrop, links.firstdropnames);
					</script>
				</ul>

				<button class="menu" onmouseover="dropButton.showDropdown('second_drop')" onmouseout="dropButton.hideDropdown('second_drop')">
					<span>Witaj podróżniku!</span>
				</button>

				<ul id="second_drop" class="dropdown" onmouseover="dropButton.showDropdown('second_drop')" onmouseout="dropButton.hideDropdown('second_drop')">
					<script>
						const seconddropdown = new dropdownCreator('second_drop', links.seconddrop, links.seconddropnames);
					</script>
				</ul>

				<button class="menu" onmouseover="dropButton.showDropdown('third_drop')" onmouseout="dropButton.hideDropdown('third_drop')">
					<span>Witaj podróżniku!</span>
				</button>

				<ul id="third_drop" class="dropdown" onmouseover="dropButton.showDropdown('third_drop')" onmouseout="dropButton.hideDropdown('third_drop')">
					<script>
						const thirddropdown = new dropdownCreator('third_drop', links.thirddrop, links.thirddropnames);
					</script>
				</ul>

				<button class="menu" onmouseover="dropButton.showDropdown('fourth_drop')" onmouseout="dropButton.hideDropdown('fourth_drop')">
					<span>Witaj podróżniku!</span>
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
			<div id="naglowek"></div>

			<!-- kontrolna część -->
			<div style="min-height: 1000px;">

				<!-- hero's page -->
				<form id="pageform" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
					<div class="hero_character">
						<label for="heroname_form" id="heroname_label" class="heroespage"> Hero's name </label>
						<input type="text" id="heroname_form" name="heroname" maxlength="20" width="20" />
					</div>
					<script>
						skillBuilder.buildSkillsContainer();
					</script>
				</form>
			</div>
		</div>
	</div>
	<script>
		eye.createMenuCanvas()
		myEventer()
	</script>
</body>

</html>