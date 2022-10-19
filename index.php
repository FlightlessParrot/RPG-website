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
	require_once 'heroes_page_sender.php';
	?>

	<link href="style/style.css" type="text/css" rel="stylesheet">
	<link href="style/pages.css" type="text/css" rel="stylesheet">
	<link href="style/dropdown.css" type="text/css" rel="stylesheet">
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
				<form id="pageform" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
					<div class="hero_character">
						<label for="heroname_form" id="heroname_label" class="heroespage"> Hero's name </label>
						<input type="text" id="heroname_form" name="heroname" maxlength="20" size="20" />
						</br>
						
						</br>
						<hr>
					</div>
					<fieldset id="narrativehero">
						<legend>Narrative Elements</legend>

						<label for="speciesinput" class="fablabel"> Species</label>
						<select id="speciesinput" class="herotextinput" name="species">
							<option value="human">Human</option>
							<option value="sc">Stormcast Eternal</option>
							<option value="aelf">Aelf</option>
							<option value="idoneth">Idoneth Deepkin</option>
							<option value="dwarf">Dwarf</option>
							<option value="Sylvaneth">Sylvaneth</option>
							<option value="skink">Skink</option>
							<option value="saurus">Saurus</option>
						</select>
						
						
						<label for="archetypeinput" class="fablabel"> Archetype</label>
						<input type="text" id="archetypeinput" class="herotextinput" name="archetype" maxlength="20" size="20" />
						
						<label for="ageinput" class="fablabel"> Age</label>
						<input type="number" id="ageinput" class="herotextinput" name="age" maxlength="10" size="10" />

						<label for="heightinput" class="fablabel"> Height</label>
						<input type="number" id="heightinput" class="herotextinput" name="height" maxlength="10" size="10" />

						<label for="weightinput" class="fablabel"> Weight</label>
						<input type="number" id="weightinput" class="herotextinput" name="weight" maxlength="10" size="10" />
						
						<label for="eyesinput" class="fablabel"> Eyes</label>
						<input type="text" id="eyesinput" class="eyesinput" name="eyes" maxlength="10" size="10" />
						<label for="hairinput" class="fablabel"> Hair</label>
						<input type="text" id="hairinput" class="herotextinput" name="hair" maxlength="20" size="20" />


						<br>
						<label for="distinguishinput" class="fablabel">Distinguishing Features</label>
						<input type="text" id="distinguishinput" class="herotextinput" name="archetype" maxlength="50" size="50" />

						<textarea

					</fieldset>
					<script>
						skillBuilder.callMe();
					</script>

				</form>

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