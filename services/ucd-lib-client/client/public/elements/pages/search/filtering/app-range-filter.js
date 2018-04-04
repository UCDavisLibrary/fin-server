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
    this.first = true;
  }

  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      this.$.slider._onResize();
    }, 50);
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
    this.minValue = this.$.minValueInput.value;
    this.maxValue = this.$.maxValueInput.value;

    this._esAppendRangeFilter(this.filter, {
      gte: this.minValue,
      lte: this.maxValue
    });
  }

  _onDefaultEsSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    this.absMinValue = e.payload.aggregations[this.filter+'-min'].value;
    this.absMaxValue = e.payload.aggregations[this.filter+'-max'].value;

    this.minValue = this.absMinValue;
    this.maxValue = this.absMaxValue;

    this.$.minValueInput.value = this.minValue;
    this.$.maxValueInput.value = this.maxValue;
  }

  // _onEsSearchUpdate(e) {
  //   if( e.state !== 'loaded' ) return;

  //   var query = e.query.query;
  //   var activeFilters = [];

  //   if( query && 
  //       query.bool && 
  //       query.bool.filter ) {
      
  //     var arr = query.bool.filter;

  //     for( var i = 0; i < arr.length; i++ ) {
  //       if( arr[i].terms[this.filter] ) {
  //         activeFilters = arr[i].terms[this.filter];
  //       }
  //     }
  //   }

  //   this.activeFilters = activeFilters;
  //   this._updateActiveFilters();
  // }

  // _updateActiveFilters() {
  //   if( !this.activeFilters ) return;

  //   // console.log(this.activeFilters);

  //   // this.buckets = this.buckets.map(item => {
  //   //   item.active = (this.activeFilters.indexOf(item.key) > -1) ? true : false;
  //   //   return Object.assign({}, item);
  //   // });
  // }



}

customElements.define('app-range-filter', AppRangeFilter);