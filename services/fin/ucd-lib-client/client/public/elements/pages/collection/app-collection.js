import { LitElement} from 'lit';
import render from "./app-collection.tpl.js";
import JSONFormatter from 'json-formatter-js'

import "../../components/cards/dams-item-card";

class AppCollection extends Mixin(LitElement) 
    .with(LitCorkUtils) {

  static get properties() {
    return {
      collectionId : { type : String },
      adminRendered : { type : Boolean },
      essync : { type : Object }
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;

    this.collectionId = '';
    this.adminRendered = false;
    this.essync = {};
    

    this._injectModel('AppStateModel', 'CollectionModel', 'RecordModel', 'CollectionVcModel');
  }

  /**
   * @method _onAppStateUpdate
   * @description on the App update, the state is determined and by checking
   * the location
   * 
   * @param {Object} e 
   */
   async _onAppStateUpdate(e) {
    if( e.location.path[0] !== 'collection') return;

    this.collectionId = e.location.fullpath; // ie '/collection/sherry-lehmann'
    // appStateUpdate already loads collection on route change
  }

  /**
   * @description _onCollectionVcUpdate, fired when collection viewController updates
   * @param {*} e 
   */
   _onCollectionVcUpdate(e) {
    if( e.state !== 'loaded' ) return;
    this._showAdminPanel();
    

  }

  /**
   * @description _showAdminPanel, checks if user is an admin and populates admin section with data
   */
  async _showAdminPanel() {
    const user = APP_CONFIG.user;
    if( user && user.loggedIn && user.roles.includes('admin') && !this.adminRendered ) {
      const adminData = await this.CollectionModel.getAdminData(this.collectionId);
      if( adminData && adminData.response && adminData.response.status === 200 ) {

        const response = adminData.body;
        if( response && !this.adminRendered ) {
          this.essync = response.essync;

          this.shadowRoot.querySelector('.admin-content')
            .appendChild((new JSONFormatter(Object.values(this.essync)[0], 1)).render());
          this.adminRendered = true;
          this.shadowRoot.querySelector('.admin-heading').style.display = '';
          this.shadowRoot.querySelector('.admin-content').style.display = '';  
        }
      }
    } else {
      this.shadowRoot.querySelector('.admin-heading').style.display = 'none';
      this.shadowRoot.querySelector('.admin-content').style.display = 'none';
    }
  }
  
}

customElements.define('app-collection', AppCollection);