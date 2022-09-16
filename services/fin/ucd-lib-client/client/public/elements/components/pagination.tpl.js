import { html } from 'lit-element';
export default function render() {
  return html`
  <style>
    :host {
      display: block;
      font-size: var(--font-size-small);
      font-weight: var(--font-weight-bold);
      color: var(--tcolor-primary);
    }
    .container {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      text-align:center;

    }
    .container-center { 
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      margin: auto;

    }
    .page {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 50%;
      transition: 0.3s;
      min-width: 40px;
      min-height: 40px;
    }
    .page:hover {
      color: var(--tcolor-link-hover-text);
    }
    .page.selected {
      background-color: var(--color-dams-secondary);
      pointer-events: none;
      cursor: auto;
    }
    .page.selected:hover {
      color: var(--tcolor-primary);
    }
    .ellipsis {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 40px;
      min-height: 40px;
      margin-left: 4px;
      margin-right: 4px;
    }
    iron-icon {
      cursor: pointer;
    }
    iron-icon:hover {
      color: var(--tcolor-link-hover-text);
    }
    iron-icon[disabled]:hover {
      color: var(--tcolor-primary-disabled);
    }
    iron-icon[disabled] {
      color: var(--tcolor-primary-disabled);
      pointer-events: none;
    }
  </style>
  <div class=container>

    <div class="container-center">
        <iron-icon ?disabled="${this.currentPage == this.minPage || !this._hasValidLogic() }"
                @click="${this.handleClick}"
                page="${this.currentPage - 1}"
                icon="arrow-back">
        </iron-icon>
        ${this._renderEdge('left')}
        ${this._renderCenter()}
        ${this._renderEdge('right')}
        <iron-icon ?disabled="${this.currentPage == this.maxPage || !this._hasValidLogic() }"
                @click="${this.handleClick}"
                page="${this.currentPage + 1}"
                icon="arrow-forward">
        </iron-icon>
    </div>

  </div>
  `;
}
