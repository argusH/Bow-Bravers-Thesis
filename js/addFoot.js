class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
	<div class="w3-light-grey w3-container w3-padding-32" style="margin-top:75px;padding-right:120px">
		<p class="w3-right">Powered by 
			<a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-opacity">w3.css</a>
			and the cursed soul of the guide writer UwU.
		</p>
	</div>
	`;
  }  
}

customElements.define('footer-component', Footer);
