(function() {
'use strict';
 
// Feature detect
if (!(window.customElements && document.body.attachShadow)) {
  document.querySelector('fancy-tabs').innerHTML = "<b>Your browser doesn't support Shadow DOM and Custom Elements v1.</b>";
  return;
}

let selected_ = null;
  
// See https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
  
customElements.define('fancy-tabs', class extends HTMLElement {

  constructor() {
    super(); // always call super() first in the ctor.

    // Create shadow DOM for the component.
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      	  
	  <style>
		
		/*customized for persinal use*/
		/*this is the details you want to put in*/	
		
        #panels {	
		  text-align: left;	  
          box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
          background: linear-gradient(#fafafa, #eee);
          border-radius: 3px;
          padding: 16px;
          overflow: hidden;
        }
		
		
		/*these are for adjusting the "tabs" above the panel*/
        #tabs {
		  display: flex;
		  justify-content: center;
		  flex-wrap:wrap;
          -webkit-user-select: none;
          user-select: none;
		  white-space: normal;
        }
        #tabs slot {
          display: flex; /* Safari bug. Treats <slot> as a parent */
		  justify-content: center;
		  flex-wrap:wrap;
		  white-space: normal;
        }
        /* Safari does not support #id prefixes on ::slotted
           See https://bugs.webkit.org/show_bug.cgi?id=160538 */
       
	   #tabs ::slotted(*) {		  
          font: 400 16px/22px;
          padding: 16px 24px;
          margin: 8px;		  
          text-align: center;
          width: 100px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          cursor: pointer;
          background: linear-gradient(#fafafa, #eee);
          border: none; /* if the user users a <button> */
		  white-space: normal;
        }
        #tabs ::slotted([aria-selected="true"]) {
          font-weight: 600;
          background: white;
          box-shadow: none;
		  white-space: normal;
        }

        #panels ::slotted([aria-hidden="true"]) {
          display: none;
        }		
      </style>
	  
	  <!--pre styling-->
		<div style = "margin:0 auto; margin-top:16px;">			
			<div>
				<div id="tabs">
					<slot id="tabsSlot" name="title"></slot>
				</div>	 
			</div>
			<div id="panels">	
				<slot id="panelsSlot"></slot>
			</div>
		</div>
    `;
  }
  
  get selected() {
    return selected_;
  }

  set selected(idx) {
    selected_ = idx;
    this._selectTab(idx);

    // Updated the element's selected attribute value when
    // backing property changes.
    this.setAttribute('selected', idx);
  }
  
  connectedCallback() {
    this.setAttribute('role', 'tablist');

    const tabsSlot = this.shadowRoot.querySelector('#tabsSlot');
    const panelsSlot = this.shadowRoot.querySelector('#panelsSlot');

    this.tabs = tabsSlot.assignedNodes({flatten: true});
    this.panels = panelsSlot.assignedNodes({flatten: true}).filter(el => {
      return el.nodeType === Node.ELEMENT_NODE;
    });
    
    // Add aria role="tabpanel" to each content panel.
    for (let [i, panel] of this.panels.entries()) {
      panel.setAttribute('role', 'tabpanel');
      panel.setAttribute('tabindex', 0);
    }
    
    // Save refer to we can remove listeners later.
    this._boundOnTitleClick = this._onTitleClick.bind(this);
    this._boundOnKeyDown = this._onKeyDown.bind(this);

    tabsSlot.addEventListener('click', this._boundOnTitleClick);
    tabsSlot.addEventListener('keydown', this._boundOnKeyDown);
    
    this.selected = this._findFirstSelectedTab() || 0;
  }
  
  disconnectedCallback() {
    const tabsSlot = this.shadowRoot.querySelector('#tabsSlot');
    tabsSlot.removeEventListener('click', this._boundOnTitleClick);
    tabsSlot.removeEventListener('keydown', this._boundOnKeyDown);
  }
  
  _onTitleClick(e) { 
    if (e.target.slot === 'title') {
      this.selected = this.tabs.indexOf(e.target);
      e.target.focus();
    }
  }
  
  _onKeyDown(e) {
    switch (e.code) {
      case 'ArrowUp':
      case 'ArrowLeft':
        e.preventDefault();
        var idx = this.selected - 1;
        idx = idx < 0 ? this.tabs.length - 1 : idx;
        this.tabs[idx].click();
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault();
        var idx = this.selected + 1;
        this.tabs[idx % this.tabs.length].click();
        break;
      default:
        break;
    }
  }

  _findFirstSelectedTab() {
    let selectedIdx;
    for (let [i, tab] of this.tabs.entries()) {
      tab.setAttribute('role', 'tab');

      // Allow users to declaratively select a tab
      // Highlight last tab which has the selected attribute.
      if (tab.hasAttribute('selected')) {
        selectedIdx = i;
      }
    }
    return selectedIdx;
  }
  
  _selectTab(idx = null) {
    for (let i = 0, tab; tab = this.tabs[i]; ++i) {
      let select = i === idx;
      tab.setAttribute('tabindex', select ? 0 : -1);
      tab.setAttribute('aria-selected', select);
      this.panels[i].setAttribute('aria-hidden', !select);
    }
  }
  
});
   
})();