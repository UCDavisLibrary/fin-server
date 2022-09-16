import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import render from './pagination.tpl.js';

/**
 * @class DamsPagination
 * @description A pagination UI component
 */
export class DamsPagination extends LitElement {
  static get properties() {
    return {
      currentPage:  {converter: parseInt, attribute: 'current-page', reflect: true},
      maxPage: {converter: parseInt, attribute: 'max-page', reflect: true},
      minPage: {converter: parseInt, attribute: 'min-page', reflect: true},
      pagesPerSide: {converter: parseInt, attribute: 'pages-per-side'},
      centerPages: {type: Array}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.pagesPerSide = 1;
    this.minPage = 1;
    this.currentPage = this.minPage;
    this.maxPage = this.currentPage;
    this.centerPages = [];

    this._changedPage = new CustomEvent('changed-page', {
      detail: {
        message: 'A new page has been selected.'
      }
    });
  }

  /**
   * @method updated
   * @description Lit method that is called on element update.
   * @param {Map} props - Changed properties
   */
  updated(props) {
    for (const p of ['pagesPerSide', 'minPage', 'currentPage', 'maxPage']) {
      if (props.has(p)){ 
        this._constructCenterPagesArray();
        break;
      }
    }
  }

  /**
   * @method _hasValidLogic
   * @description Ensures that page properties are internally consistent
   * 
   * @returns {Boolean}
   */
  _hasValidLogic() {
    if (this.maxPage < this.currentPage || this.maxPage < this.minPage ) {
      return false;
    }
    else if (this.minPage > this.currentPage ) {
      return false;
    }
    return true;

  }

  /**
   * @method _renderEdge
   * @description Renders max/min page links with ellipsis, if necessary.
   * 
   * @param {String} direction - 'left' or 'right'
   * 
   * @returns {TemplateResult}
   */
  _renderEdge(direction) {
    if (!this._hasValidLogic()) {
      return html``;
    }
    if (direction == 'left') {
      if ( this.centerPages.length >= 1 && this.minPage < this.centerPages[0].page ) {
        return html`
          <div @click="${this.handleClick}" class="page" page="${this.minPage}">${this.minPage}</div>
          <div class="ellipsis">...</div>`;
      }
    }
    else if (direction == 'right') {
      if ( this.centerPages.length >= 1 && this.maxPage > this.centerPages.slice(-1)[0].page ) {
        return html`
          <div class="ellipsis">...</div>
          <div @click="${this.handleClick}" class="page" page="${this.maxPage}">${this.maxPage}</div>`;
      }
    }
    return html``;
  }

  /**
   * @method _renderCenter
   * @description Renders page links between the ellipses
   * 
   * @returns {TemplateResult}
   */
  _renderCenter() {
    if (!this._hasValidLogic()) {
      return html`<div class="${classMap({page: true, selected: true})}" page="${this.currentPage}">${this.currentPage}</div>`;
    }
    return html`${this.centerPages.map(page => html`
      <div 
        @click="${this.handleClick}"
        class="${classMap({"page": true, selected: page.selected})}"
        page="${page.page}">${page.page}
      </div>`)}`;
  }

  /**
   * @method _constructCenterPageArray
   * @description Sets centerPages property. Called on element update.
   */
  _constructCenterPagesArray(){
    // mete out pages-per-side to either side of the current page.
    let pages = [{page: this.currentPage, selected: true}];
    let remainder = this.pagesPerSide * 2;
    let self = this;
    addPages(this.pagesPerSide);
    addPages(remainder);

    // Add pages to beginning/end of array if within 2 of min/max page
    if (pages[0].page == this.minPage + 2 ) {
      pages.unshift({page: this.minPage + 1, selected: false});
    }
    if (pages.slice(-1)[0].page == this.maxPage - 2) {
      pages.push({page: this.maxPage - 1, selected: false});
    }
    if (pages[0].page - this.minPage === 1) {
      pages.unshift({page: this.minPage, selected: false});
    }
    if (this.maxPage - pages.slice(-1)[0].page === 1) {
      pages.push({page: this.maxPage, selected: false});
    }
    this.centerPages = pages;

    /**
     * @function addPages
     * @description private function for _constructCenterPageArray that builds the pages array
     * @param {Number} loops - Number of pages to be added on either side of the pages array
     */
    function addPages(loops){
      let directions = ['left', 'right'];
      for (let direction of directions) {
        if (direction === 'left') {
          for (let i = 0; i < loops; i++) {
            let first = pages[0].page;
            if (first > self.minPage) {
              pages.unshift({page: first - 1, selected: false});
              remainder -= 1;
            }
          }
        }
        if (direction === 'right') {
          for (let i = 0; i < loops; i++) {
            let last = pages.slice(-1)[0].page;
            if (last < self.maxPage) {
              pages.push({page: last + 1, selected: false});
              remainder -= 1;
            }
          }
        }
      }
    }
  }

  /**
   * @method handleClick
   * @description Event handler for element click. Changes the active page.
   * Dispatches the 'changed-page' event
   * 
   * @param {Event} e - Click event on page numbers or arrow icons
   */
  handleClick(e) {
    let new_page = parseInt(e.target.getAttribute('page'));
    if (new_page != this.currentPage) {
      this.currentPage = new_page;
      this.dispatchEvent(this._changedPage);
    }
  }
}

customElements.define('dams-pagination', DamsPagination);
