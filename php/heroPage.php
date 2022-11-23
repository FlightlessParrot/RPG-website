<script type="text/javascript" src="./js/buildpages_skill.js"></script>

<form id="pageform" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">

    <!-- page 1-->
    <div class="hero_character">
        <label for="heroname_form" id="heroname_label" class="heroespage"> Hero's name </label>
        <input type="text" id="heroname_form" name="heroname" maxlength="20" size="20" />
        </br>

        </br>
        <hr>
    </div>
    <div class="categorybox">
        <p class="categoryname">Narrative Elements</p>
        <fieldset id="narrativehero">

            <div>
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
            </div>
            <div>
                <label for="archetypeinput" class="fablabel"> Archetype</label>
                <input type="text" id="archetypeinput" class="herotextinput" name="archetype" maxlength="30" size="30" />
            </div>

            <div>
                <label for="ageinput" class="fablabel"> Age</label>
                <input type="number" id="ageinput" class="herotextinput" name="age" maxlength="10" />
            </div>

            <div>
                <label for="heightinput" class="fablabel"> Height</label>
                <input type="number" id="heightinput" class="herotextinput" name="height" maxlength="10" min="0"/>
            </div>

            <div>
                <label for="weightinput" class="fablabel"> Weight</label>
                <input type="number" id="weightinput" class="herotextinput" name="weight" maxlength="10" min="0"/>
            </div>

            <div>
                <label for="eyesinput" class="fablabel"> Eyes</label>
                <input type="text" id="eyesinput" class="eyesinput" name="eyes" maxlength="10" size="10" />
            </div>

            <div>
                <label for="hairinput" class="fablabel"> Hair</label>
                <input type="text" id="hairinput" class="herotextinput" name="hair" maxlength="20" size="20" />
            </div>

            <br>
            <div>
                <label for="distinguishinput" class="fablabel">Distinguishing Features</label>
                <input type="text" id="distinguishinput" class="heroarea" name="distinguishing" maxlength="50" size="50" />
            </div>
        </fieldset>
        <fieldset class="narrativearea">
            <label for="backgroundinput" class="fablabel">
                <legend>Background</legend>
            </label>
            <textarea id="backgroundinput" cols="35" rows="20" name="background"></textarea>
        </fieldset>

        <fieldset class="narrativearea">
            <label for="goalsinput" class="fablabel">
                <legend>Goals</legend>
            </label>
            <textarea id="goalsinput" cols="35" rows="20" name="goals"></textarea>
        </fieldset>
    </div>

    <!-- page 2-->
    <div id='page_2'>
    <div class="categorybox">
        <p class="categoryname">Main chracteristic & Skills</p>
        <div class="mainchdiv">
            <label for="bodyinput" class="charlabel"> Body</label>
            <input type="number" id="bodyinput" class="maincharacteristic" name="body" maxlength="3" size="3" min="0"/>
        </div>
        <div class="mainchdiv">
            <label for="mindinput" class="charlabel"> Mind</label>
            <input type="number" id="mindinput" class="maincharacteristic" name="mind" maxlength="3" size="3" min="0"/>
        </div>
        <div class="mainchdiv">
            <label for="soulinput" class="charlabel"> Soul</label>
            <input type="number" id="soulinput" class="maincharacteristic" name="soul" maxlength="3" size="3" min="0"/>
        </div>
     </div>
    
</div>
   
    <!--page 3-->
    <div id='page_3'>
    <p class="categoryname">Talents, Spells & Mirracles</p>
    <div id="talentdiv">
    <fieldset id="talentsFieldset">		
                <legend>Talents</legend>
        </fieldset>
    </div>
    <div>
        
        <fieldset id="spellsfield">
        <legend>Spells & Mirracles</legend>
        </fieldset>
    </div>  </div>
        <!--page 4-->
        <div>
        <p class="categoryname">Inventory</p>
        <div id="moneyBag">
        <div class="currencyDiv">
            <label for="drops" class="currlabel" class="fablabel"> Drops</label>
            <input type="number" id="drops" class="currency" name="drops" maxlength="10" size="8" min="0"/>
        </div>
        <div class="currencyDiv">
            <label for="phials" class="currlabel" class="fablabel"> Phials</label>
            <input type="number" id="phials" class="currency" name="phials" maxlength="10" size="8" min="0"/>
        </div>
        <div class="currencyDiv">
            <label for="spheres" class="currlabel" class="fablabel"> Spheres</label>
            <input type="number" id="spheres" class="currency" name="spheres" maxlength="10" size="8" min="0"/>
        </div>
</div>
    <fieldset id="inventory">
        <legend>Equipment</legend>
        
    </fieldset>
</div>
<div id="combatInventory">
<div>
<label for="armour" class="fablabel">Armour</label>
<select id="armour">
<option>light</option>
<option>medium</option>
<option>heavy</option>
</select>
</div>
<label for="yesShield" class="fablabel">Shield</label>
<div>
    <label for="yesShield">yes</label>
    <input id="yesShield" type="radio" name="shield" value="yes" />
</div>
<div>
    <label for="noShield">no</label>
    <input id="noShield" type="radio" name="shield" value="no" checked="checked" />
</div>
</div>

    </form>
<script>
        skillBuilder.callMe('page_2');
    </script>
  
