import { LitElement} from 'lit';
import render from "./app-collection.tpl.js";

import "../../components/cards/dams-item-card";

class AppCollection extends Mixin(LitElement) 
      .with(LitCorkUtils) {

  static get properties() {
    return {
    
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
    this._injectModel('AppStateModel');
  }
  
}

customElements.define('app-collection', AppCollection);