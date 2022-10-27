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
