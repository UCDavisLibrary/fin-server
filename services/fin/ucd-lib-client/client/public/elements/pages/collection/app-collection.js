import { LitElement} from 'lit';
import render from "./app-collection.tpl.js";
import JSONFormatter from 'json-formatter-js'

import "../../components/cards/dams-item-card";
import '../../components/citation';

class AppCollection extends Mixin(LitElement) 
    .with(LitCorkUtils) {

  static get properties() {
    return {
      collectionId : { type : String },
      adminRendered : { type : Boolean },
      description : { type : String },
      title : { type : String },
      thumbnailUrl : { type : String },
      callNumber : { type : String },
      keywords : { type : Array },    
      items : { type : Array }, 
      yearPublished : { type : Number }, 
      highlightedCollections : { type : Array },
      essync : { type : Object }
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;

    this.collectionId = '';
    this.adminRendered = false;
    this.description = '';
    this.title = '';
    this.thumbnailUrl = '';
    this.callNumber = '';
    this.keywords = [];    
    this.items = [];
    this.yearPublished = 0;
    this.highlightedCollections = [];
    this.essync = {};

    this._injectModel('AppStateModel', 'CollectionModel', 'RecordModel', 'CollectionVcModel');
  }

  updated() {
    // this._showAdminPanel();
    // could we check if this.adminRendered is false here to hide the admin section? or possibly recall the showAdmin function?
    if( !this.adminRendered && !this.collectionId ) {
      this.collectionId = window.location.pathname;
    } else if( !this.adminRendered && this.collectionId ) {
      this._showAdminPanel();
    }
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
    // this._showAdminPanel();
  }

  /**
   * @description _onCollectionVcUpdate, fired when collection viewController updates
   * @param {*} e 
   */
   _onCollectionVcUpdate(e) {
    if( e.state !== 'loaded' ) return;
    
    this.collectionId = e.payload.results.id;
    this.description = e.payload.results.description
    this.title = e.payload.results.title;
    this.thumbnailUrl = e.payload.results.thumbnailUrl;
    this.callNumber = e.payload.results.callNumber;
    this.keywords = e.payload.results.keywords;
    // this.items = e.payload.results.items[0];
    this.yearPublished = e.payload.results.yearPublished;
    // this.highlightedCollections = e.payload.results.highlightedCollections;
    
    this._showAdminPanel();

    // search highlighted collection items
    this.RecordModel.searchHighlighted(this.collectionId, true, true);
  }

  _onDefaultRecordSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    if( e.payload && e.payload.results ) {
      this.highlightedCollections = e.payload.results.map(rg => {
        return {
          title : rg.root.name,
          thumbnailUrl : rg.root.image.url
        };
      })
    }
  }

  /**
   * @description _showAdminPanel, checks if user is an admin and populates admin section with data
   */
  async _showAdminPanel() {
    const user = APP_CONFIG.user;
    if( user && user.loggedIn && user.roles.includes('admin') ) {
      if( !this.adminRendered ) {
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
      }
    } else {
      this.shadowRoot.querySelector('.admin-heading').style.display = 'none';
      this.shadowRoot.querySelector('.admin-content').style.display = 'none';
    }
  }
  
}

customElements.define('app-collection', AppCollection);