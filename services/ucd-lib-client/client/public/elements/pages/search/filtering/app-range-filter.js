import {Element as PolymerElement} from "@polymer/polymer/polymer-element"
import "../../../utils/app-range-slider"
import ElasticSearchInterface from '../../../interfaces/ElasticSearchInterface'
import template from "./app-range-filter.html"

export default class AppRangeFilter extends Mixin(PolymerElement)
  .with(EventInterface, ElasticSearchInterface) {

  static get template() {
    return template;
  }

  static get properties() {
    return {
      label : {
        type : String,
        value : ''
      },
      filter : {
        type : String,
        value : ''
      },

      absMinValue : {
        type : Number,
        value : -1
      },
      absMaxValue : {
        type : Number,
        value : -1 
      },

      minValue : {
        type : Number,
        value : -1
      },
      maxValue : {
        type : Number,
        value : -1
      },

      showUnknown : {
        type : Boolean,
        value : false
      }

    }
  }

  constructor() {
    super();
    this.active = true;
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.$.slider._onResize();
    }, 100);
  }

  /**
   * @method _isDefaultState
   * @description is range filter in the default state?  ie abs min/max
   * is the same as min/max and unknown values are included?  If so
   * we don't actually need a filter on.
   */
  _isDefaultState() {
    if( this.minValue === this.absMinValue &&
        this.maxValue === this.absMaxValue &&
        this.$.unknown.checked === true ) {
      
      this._esRemoveRangeFilter(this.filter);
      return true;
    }
    return false;
  }

  _onRangeSliderChange(e) {
    this.minValue = e.detail.min;
    this.maxValue = e.detail.max;

    this.$.minValueInput.value = this.minValue;
    this.$.maxValueInput.value = this.maxValue;

    this._onRangeNullChange();
  }

  _onRangeNullChange() {
    let value = {
      gte: this.minValue,
      lte: this.maxValue
    }

    if( this.$.unknown.checked ) {
      value.includeNull = true;
    }

    // remove filter and return
    if( this._isDefaultState() ) return;

    this._esAppendRangeFilter(this.filter, value);
  }

  _onInputChange() {
    let min = this.$.minValueInput.value;
    let max = this.$.maxValueInput.value;

    if( min < this.absMinValue ) {
      this.$.minValueInput.value = this.absMinValue;
      min = this.absMinValue;
    }
    if( max > this.absMaxValue ) {
      this.$.maxValueInput.value = this.absMaxValue;
      max = this.absMaxValue;
    }
    if( min > max ) min = max;

    this.minValue = min;
    this.maxValue = max;

    this._onRangeNullChange();
  }

  _onDefaultEsSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    this.absMinValue = e.payload.aggregations[this.filter+'-min'].value;
    this.absMaxValue = e.payload.aggregations[this.filter+'-max'].value;

    if( this.minValue === -1 ) {
      this.minValue = this.absMinValue;
      this.maxValue = this.absMaxValue;

      this.$.minValueInput.value = this.minValue;
      this.$.maxValueInput.value = this.maxValue;
    }
  }

  _onEsSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    let filters = e.searchDocument.filters || {};

    if( filters[this.filter] ) {
      let value = filters[this.filter].value;

      this.minValue = value.gte;
      this.maxValue = value.lte;
      this.$.minValueInput.value = this.minValue;
      this.$.maxValueInput.value = this.maxValue;
      this.$.unknown.checked = value.includeNull ? true : false;
    }
  }

}

customElements.define('app-range-filter', AppRangeFilter);