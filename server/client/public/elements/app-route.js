import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/app-route/app-location"
import queryString from "query-string"
import AppStateInterface from "./interfaces/AppStateInterface"

class AppRoute extends Mixin(PolymerElement)
      .with(EventInterface, AppStateInterface) {
  
  static get template() {
    return '<app-location url-space-regex="[[appRoutes]]"></app-location>';
  }

  static get properties() {
    return {
      route: {
        type: Object
      },
      appRoutes : {
        type : Object,
        value : /^(\/$|\/search|\/foo)/i
      }
    }
  }

  constructor() {
    super();
    window.addEventListener('location-changed', this._onLocationChange.bind(this));
  }

  ready() {
    super.ready();
    this._onLocationChange();
  }

  _onLocationChange() {
    this.location = {
      pathname : window.location.pathname,
      path : window.location.pathname.replace(/(^\/|\/$)/g, '').split('/'),
      query : queryString.parse(window.location.search)
    }

    this._setAppState({
      location : this.location
    });
  }
}

customElements.define('app-route', AppRoute);