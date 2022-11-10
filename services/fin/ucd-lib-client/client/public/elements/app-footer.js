import { LitElement, html } from 'lit';
import render from "./app-footer.tpl.js";

import "./auth/app-auth-footer";

class AppFooter extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return { 
      localBuildTime : {type: String},
      appVersion : {type: String},
      clientTag : {type: String},
      clientHash : {type: String},
      coreTag : {type: String},
      coreHash : {type: String},
      showVersion : {type: Boolean}
    };
  }

  constructor() {
    super();
    this.active = true;
    this.render = render.bind(this);

    this.appVersion = APP_CONFIG.env.APP_VERSION;
    this.clientTag = APP_CONFIG.env.UCD_LIB_SERVER_REPO_TAG;
    this.clientHash = APP_CONFIG.env.UCD_LIB_SERVER_REPO_HASH;
    this.coreTag = APP_CONFIG.env.CORE_SERVER_REPO_TAG;
    this.coreHash = APP_CONFIG.env.CORE_SERVER_REPO_HASH;
    this.showVersion = APP_CONFIG.env.APP_VERSION.match(/(alpha|beta|rc)/) ? true : false;
    if( APP_CONFIG.env.BUILD_TIME ) {
      this.localBuildTime = new Date(APP_CONFIG.env.BUILD_TIME).toISOString().replace('T', ' ');
    } else {
      this.localBuildTime = 'Not set';
    }   

    this._injectModel('AppStateModel');
  }  

  getLocalTime(date) {
    if( !date ) return '';
    date = new Date(date+'.000Z');

    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+
     (date.getHours() > 12 ? date.getHours() - 12 : date.getHours())+':'+
     (date.getMinutes() < 10 ? '0' : '')+date.getMinutes()+
     (date.getHours() > 11 ? 'pm' : 'am');
  }
}

customElements.define('app-footer', AppFooter);