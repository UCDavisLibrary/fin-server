import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/app-route/app-location"
import queryString from "query-string"
import Mixin from "./utils/Mixin"
import EventMixin from "./utils/EventMixin"
import AppStateInterface from "./interfaces/AppStateInterface"

class AppRoute extends Mixin(PolymerElement)
      .with(EventMixin, AppStateInterface) {
  
  static get template() {
    return '<app-location></app-location>';
  }

  static get properties() {
    route: {
      type: Object
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