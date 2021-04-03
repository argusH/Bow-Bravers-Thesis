class Header extends HTMLElement {
	constructor(){
		super();
	}
	connectedCallback(){
		this.innerHTML = `			

		<!-- Style Sheet Ref, slightly customized W3 scripts so it must be local-->
		<!-- The Nav Bar -->
		<nav class="w3-sidebar w3-green w3-collapse w3-top w3-large w3-padding" style="z-index:3;width:300px;font-weight:bold;" id="mySidebar"><br>
			<a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft" style="width:100%;font-size:22px">Close Menu</a>
			<div class="w3-container">
				<h3 class="w3-padding-64">
					<b>Bow Braver's<br>Thesis</b>
				</h3>
			</div>
			
			<div class="w3-bar-block">
				
				<a href="/" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Home</a> 
				<a href="summary.html" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Quick Summary</a> 
				<a href="bowbraver.html" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Bow Braver?</a>
				
				<a onclick="myAccFunc('accSkills')" href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-white">Braver Skills <i class="fa fa-caret-down"></i></a> 
				<div id="accSkills" class="w3-bar-block w3-hide w3-padding-large w3-medium">
					<a href="skills.html/#skills-explanation" class="w3-bar-item w3-button">Skills Explanation</a>
					<a href="skills.html/#acquisition-order" class="w3-bar-item w3-button">Acquisition Order</a>
					<a href="skills.html/#remianing-points" class="w3-bar-item w3-button">Remaining Points</a>
					<a href="skills.html/#the-trees" class="w3-bar-item w3-button">The Trees</a>
				</div>

				<a onclick="myAccFunc('accSubclass')" href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-white">Subclass <i class="fa fa-caret-down"></i></a> 				
				<div id="accSubclass" class="w3-bar-block w3-hide w3-padding-large w3-medium">
					<a href="subclass.html/#viable-ones" class="w3-bar-item w3-button">Viable Ones</a>
					<a href="subclass.html/#subs-toavoid" class="w3-bar-item w3-button">Subs to Avoid</a>
					<a href="subclass.html/#multipliers" class="w3-bar-item w3-button">Multipliers</a>
					<a href="subclass.html/#non-brbow" class="w3-bar-item w3-button">Non-Br Bow Strat</a>
				</div>
				
				<a onclick="myAccFunc('accPA')" class="w3-bar-item w3-button w3-hover-white">Bow PA <i class="fa fa-caret-down"></i></a> 				
				<div id="accPA" class="w3-bar-block w3-hide w3-padding-large w3-medium">
					<a href="pa.html/#general-info" class="w3-bar-item w3-button">General Info</a>
					<a href="pa.html/#pa-indepth" class="w3-bar-item w3-button">PA In-Depth</a>
					<a href="pa.html/#attack-range" class="w3-bar-item w3-button">Attack Range</a>
					<a href="pa.html/#complex-pa" class="w3-bar-item w3-button">Complex PA</a>
					<a href="pa.html/#palette-setup" class="w3-bar-item w3-button">Palette Setup</a>
					<a href="pa.html/#adapting-techs" class="w3-bar-item w3-button">Adapting Techs</a>
				</div>
				
				<a onclick="myAccFunc('accBasics')" href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-white">The Basics <i class="fa fa-caret-down"></i></a> 				
				<div id="accBasics" class="w3-bar-block w3-hide w3-padding-large w3-medium">
					<a href="thebasics.html/#speed-bowstrat" class="w3-bar-item w3-button">Speed Bow Strat</a>
					<a href="thebasics.html/#bow-maneuvers" class="w3-bar-item w3-button">Bow Maneuvers</a>
					<a href="thebasics.html/#aiming-modes" class="w3-bar-item w3-button">Aiming Modes</a>
					<a href="thebasics.html/#keybind-notes" class="w3-bar-item w3-button">Keybind Notes</a>
				</div>

				<a onclick="myAccFunc('accBanish')" href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-white">The Banish <i class="fa fa-caret-down"></i></a> 				
				<div id="accBanish" class="w3-bar-block w3-hide w3-padding-large w3-medium">
					<a href="thebanish.html/#combos-explained" class="w3-bar-item w3-button">Combos Explained</a>
					<a href="thebanish.html/#the-damnedchart" class="w3-bar-item w3-button">The Damned Chart</a>
					<a href="thebanish.html/#side-notes" class="w3-bar-item w3-button">Side Notes</a>
					<a href="thebanish.html/#subclass-specifics" class="w3-bar-item w3-button">Subclass Specifics</a>					
				</div>				
				
				<a onclick="myAccFunc('accBow')" href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-white">Your Bow <i class="fa fa-caret-down"></i></a> 				
				<div id="accBow" class="w3-bar-block w3-hide w3-padding-large w3-medium">
					<a href="yourbow.html/#upgrading-101" class="w3-bar-item w3-button">Upgrading 101</a>
					<a href="yourbow.html/#what-do" class="w3-bar-item w3-button">What do?</a>
					<a href="yourbow.html/#the-lists" class="w3-bar-item w3-button">The Lists</a>
					<a href="yourbow.html/#weapon-ssa" class="w3-bar-item w3-button">Weapon SSA</a>
				</div>	
				
				<a onclick="myAccFunc('accUnits')" href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-white">Your Units <i class="fa fa-caret-down"></i></a> 				
				<div id="accUnits" class="w3-bar-block w3-hide w3-padding-large w3-medium">
					<a href="yourunits.html/#selection-101" class="w3-bar-item w3-button">Selection 101</a>
					<a href="yourunits.html/#what-do" class="w3-bar-item w3-button">What do?</a>
					<a href="yourunits.html/#units-ssa" class="w3-bar-item w3-button">Units SSA</a>
					<a href="yourunits.html/#affixing" class="w3-bar-item w3-button">Affixing</a>
				</div>	

				<a onclick="myAccFunc('accEquip')" href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-white">Others <i class="fa fa-caret-down"></i></a> 				
				<div id="accEquip" class="w3-bar-block w3-hide w3-padding-large w3-medium">
					<a href="others.html/#extra-tools" class="w3-bar-item w3-button">Extra Tools</a>
					<a href="others.html/#rings-setup" class="w3-bar-item w3-button">Rings Setup</a>
					<a href="others.html/#crit-happens" class="w3-bar-item w3-button">Crit Happens</a>
					<a href="others.html/#mag" class="w3-bar-item w3-button">MAG</a>
					<a href="others.html/#drinks" class="w3-bar-item w3-button">Drinks</a>
					<a href="others.html/#food" class="w3-bar-item w3-button">Food</a>
				</div>	
								
				<a onclick="myAccFunc('accOff')" href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-white">Off-topics <i class="fa fa-caret-down"></i></a> 				
				<div id="accOff" class="w3-bar-block w3-hide w3-padding-large w3-medium">
					<a href="offtopic.html/#pp-threshold" class="w3-bar-item w3-button">Why 200+ PP?</a>					
					<a href="offtopic.html/#ppefficiency-andyou" class="w3-bar-item w3-button">PP Efficiency & You</a>
					<a href="offtopic.html/#atk-todamage" class="w3-bar-item w3-button">ATK to Damage</a>		
					<a href="offtopic.html/#hybrid-braver" class="w3-bar-item w3-button">Hybrid Braver</a>		
				</div>					
				
				<a href="/gearexamples.html/#" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Gear Examples</a>	

				<a onclick="myAccFunc('accExtra')" href="javascript:void(0)" class="w3-bar-item w3-button w3-hover-white">Extras <i class="fa fa-caret-down"></i></a> 				
				<div id="accExtra" class="w3-bar-block w3-hide w3-padding-large w3-medium">
					<a href="extras.html/#the-media" class="w3-bar-item w3-button">The Media</a>
					<a href="extras.html/#other-guides" class="w3-bar-item w3-button">Other Guides</a>	
				</div>	

				<a href="credits.html/#" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Credits</a>	
			
			</div>		
			
		</nav>			

		<!-- The Top Bar -->
		<header class="w3-container w3-top w3-hide-large w3-green w3-xlarge w3-padding">	
			<a href="javascript:void(0)" class="w3-button w3-green w3-margin-right" onclick="w3_open()">☰</a>
			<b>Bow Braver's Thesis</b>
		</header>
		
		<!-- Overlay on sidebar -->
		<div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>
		
		
		
		
		<div class="w3-main" style="margin-left:340px;margin-right:40px">		
			
			
			<!-- Random Picture Carousel, add later.-->
			<div class = "imgSlides w3-display-container w3-center">
				<img class = "w3-image w3-grayscale-min" src = "img/argus-posing.png" alt = "1" width = "100%"></img>
				<div class="w3-display-middle w3-padding-large w3-border w3-wide w3-center w3-background w3-black w3-opacity-min">
					<h1 class="w3-hide-medium w3-hide-small w3-xxxlarge">Archery</h1>
					<h5 class="w3-hide-large" style="white-space:nowrap">Archery</h5>
					<h3 class="w3-hide-medium w3-hide-small">Cranked to Eleven</h3>
				</div>				
			</div>
			<div class = "imgSlides w3-display-container w3-center">
				<img class = "w3-image w3-grayscale-min" src = "img/menacing-fight.png" alt = "2" width = "100%"></img>
				<div class="w3-display-middle w3-padding-large w3-border w3-wide w3-center w3-background w3-black w3-opacity-min">
					<h1 class="w3-hide-medium w3-hide-small w3-xxxlarge">Bullshit</h1>
					<h5 class="w3-hide-large" style="white-space:nowrap">Bullshit</h5>
					<h3 class="w3-hide-medium w3-hide-small">To Its Core</h3>
				</div>				
			</div>
			<div class = "imgSlides w3-display-container w3-center">
				<img class = "w3-image w3-grayscale-min" src = "img/arnia-posing.png" alt = "3" width = "100%"></img>
				<div class="w3-display-middle w3-padding-large w3-border w3-wide w3-center w3-background w3-black w3-opacity-min">
					<h1 class="w3-hide-medium w3-hide-small w3-xxxlarge">Practice</h1>
					<h5 class="w3-hide-large" style="white-space:nowrap">Practice</h5>
					<h3 class="w3-hide-medium w3-hide-small">And Git Gud</h3>
				</div>				
			</div>		
			
		</div>	
		
		`;
	}	
}

customElements.define('header-component', Header);