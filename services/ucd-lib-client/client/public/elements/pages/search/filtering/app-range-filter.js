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

  _onRangeSliderChange(e) {
    this.minValue = e.detail.min;
    this.maxValue = e.detail.max;

    this.$.minValueInput.value = this.minValue;
    this.$.maxValueInput.value = this.maxValue;

    this._esAppendRangeFilter(this.filter, {
      gte: this.minValue,
      lte: this.maxValue
    });
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

    this._esAppendRangeFilter(this.filter, {
      gte: this.minValue,
      lte: this.maxValue
    });
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

    var query = e.query.query;
    var activeFilters = [];

    if( query && 
        query.bool && 
        query.bool.must ) {
      
      var arr = query.bool.must;

      for( var i = 0; i < arr.length; i++ ) {
        if( arr[i].range[this.filter] ) {
          let value = arr[i].range[this.filter];
          
          this.minValue = value.gte;
          this.maxValue = value.lte;
          this.$.minValueInput.value = this.minValue;
          this.$.maxValueInput.value = this.maxValue;
        }
      }
    }
  }

}

customElements.define('app-range-filter', AppRangeFilter);