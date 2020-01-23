import {PolymerElement} from "@polymer/polymer/polymer-element"
import "../../../utils/app-range-slider"
import RecordInterface from '../../../interfaces/RecordInterface'
import CollectionInterface from '../../../interfaces/CollectionInterface'
import template from "./app-range-filter.html"

export default class AppRangeFilter extends Mixin(PolymerElement)
  .with(EventInterface, RecordInterface, CollectionInterface) {

  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
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
        value : Number.MAX_VALUE
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
    this._injectModel('AppStateModel');
  }

  connectedCallback() {
    super.connectedCallback();
    this.resize();
  }

  resize() {
    this.$.slider._onResize();

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
    if( !this._isFilterApplied() ) {
      
      let searchDoc = this._getCurrentSearchDocument();
      this._removeRangeFilter(searchDoc, this.filter);
      this.RecordModel.setSearchLocation(searchDoc);

      return true;
    }
    return false;
  }

  /**
   * @method _onRangeSliderChange
   * @description bound to custom 'range-value-change' event from app-range-slider
   */
  _onRangeSliderChange(e) {
    this.minValue = e.detail.min;
    this.maxValue = e.detail.max;

    this.$.minValueInput.value = this.minValue;
    this.$.maxValueInput.value = this.maxValue;

    this._onRangeNullChange();
  }

  /**
   * @method _onRangeNullChange
   * @description bound to input checkbox.  Currently called by internal
   * functions as well to search after value change :/
   */
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

    let searchDoc = this._getCurrentSearchDocument();
    this._setPaging(searchDoc, 0);
    this._appendRangeFilter(searchDoc, this.filter, value);
    this.RecordModel.setSearchLocation(searchDoc);
  }

  /**
   * @method _onInputChange
   * @description bound to min/max number inputs.
   */
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

  /**
   * @method _onSelectedCollectionUpdate
   * @description from CollectionInterface, called whenever selected collection updates
   * 
   * @param {Object} e
   */
  _onSelectedCollectionUpdate(e) {
    this.selectedCollection = e ? e['@id'] : '';
    this._renderFilters();
  }

  /**
   * @method _onRecordSearchUpdate
   * @description from RecordInterface
   * 
   * @param {Object} e 
   */
  _onRecordSearchUpdate(e) {
    if( e.state !== 'loaded' ) return;

    this.currentFilters = e.searchDocument.filters || {};
    this._renderFilters();
  }

  /**
   * @method _renderFilters
   * @description called after a collection is selected or a filter set updates.
   * make sure range filter is set correctly.
   * 
   */
  async _renderFilters() {
    if( !this.currentFilters ) return;

    // grab default aggregations for collection
    let cid = this.selectedCollection;
    let result = await this._defaultRecordSearch(this.selectedCollection);
    if( cid !== this.selectedCollection ) return; // make sure we haven't updated
    this.default = result;

    let rangeFilter = this.default.payload.aggregations.ranges[this.filter];
    if( rangeFilter ) {
      this.absMinValue = rangeFilter.min;
      this.absMaxValue = rangeFilter.max;
    } else {
      return this._show(false);
    }

    this._show(true);

    // make sure any current values are set correctly
    if( this.minValue < this.absMinValue || !this.currentFilters[this.filter] ) {
      this.minValue = this.absMinValue;
      this.$.minValueInput.value = this.minValue;
    }
    if( this.maxValue > this.absMaxValue || !this.currentFilters[this.filter] ) {
      this.maxValue = this.absMaxValue;
      this.$.maxValueInput.value = this.maxValue;
    }

    // now set the current filters from search
    if( this.currentFilters[this.filter] ) {
      let value = this.currentFilters[this.filter].value;

      this.minValue = value.gte;
      this.maxValue = value.lte;
      this.$.minValueInput.value = this.minValue;
      this.$.maxValueInput.value = this.maxValue;
      this.$.unknown.checked = value.includeNull ? true : false;
    }

    this._notifySelected();
  }

  /**
   * @method _isFilterApplied
   * @description is there currenlty a filter set
   * 
   * @return {Boolean}
   */
  _isFilterApplied() {
    if( this.minValue === this.absMinValue &&
      this.maxValue === this.absMaxValue &&
      this.$.unknown.checked === true ) {
      return false;
    }
    return true;
  }

  /**
   * @method _notifySelected
   * @description notify parent of selected/unselected filter
   */
  _notifySelected() {
    let selected = false;
    let key = '';

    if( this.minValue !== this.absMinValue || 
        this.maxValue !== this.absMaxValue ||
        !this.$.unknown.checked ) {
      selected = true;
    }

    if( selected ) {
      key = this.minValue+' to '+this.maxValue;
    }

    this.dispatchEvent(
      new CustomEvent(`set-selected`, {
        detail: {
          selected,
          label: key
        }
      })
    );
  }

  /**
   * @method _show
   * @description notify parent to hide/show filter
   * 
   * @param {Boolean} show should the parent hide or show filter
   */
  _show(show) {
    this.dispatchEvent(
      new CustomEvent('update-visibility', {
        detail: {show}
      })
    );
  }

  /**
   * @method reset
   * @description reset range filter
   */
  reset() {
    this.minValue = this.absMinValue;
    this.maxValue = this.absMaxValue;
    this.$.unknown.checked = true;
    
    this._onRangeNullChange();
  }


  /**
   * @method onParentFilterClicked
   * @description called from parent toggle panel when selected filter
   * is clicked.  Reset slider
   */
  onParentFilterClicked() {
    this.reset();
  }

}

customElements.define('app-range-filter', AppRangeFilter);