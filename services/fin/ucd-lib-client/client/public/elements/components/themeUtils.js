/**
 * @mixin ThemeUtils
 * @description Mixin to use for any element that wants to convert its children from light to shadow DOM
 * Inserts non-shadowed children with `insert-into' attribute into an element in the shadow DOM 
 * with corresponding 'shadow-anchor' attribute.
 * @param {class} subclass 
 * 
 * @returns 
 */
const ThemeUtils = subclass => 
  class InsertIntoShadow extends subclass {
    

    /**
     * @method connectedCallback
     * @description Custom element lifecycle callback when element is added to dom
     */
    connectedCallback(){
      super.connectedCallback();
      this.childrenToRender = [...this.children];
      this.childListObserver = new MutationObserver(
        (mutationsList, observer) => this._onChildListMutation(mutationsList, observer)
      );
      this.childListObserver.observe(this, {childList: true});
    }

    /**
     * @method disconnectedCallback
     * @description Custom element lifecycle callback when element is removed from dom
     */
    disconnectedCallback(){
      this.childListObserver.disconnect();
      super.disconnectedCallback();
    }
    
    /**
     * @method firstUpdated
     * @description Lit method called when element is first updated.
     */
    firstUpdated(){
      super.firstUpdated();
      [...this.childrenToRender].forEach(item => {
        this._insertIntoShadowDom(item);
      });
    }

    /**
     * @method _onChildListMutation
     * @description Attached to self. Fires when there is a change to element child list.
     * @param {MutationRecord[]} mutationsList - Array of mutation objects
     * @param {MutationObserver} observer - Invoker of the callback
     */
    _onChildListMutation(mutationsList) {
      for (const mutation of mutationsList) {
        for (const addedNode of mutation.addedNodes) {
          this._insertIntoShadowDom(addedNode);
        }
      }
    }

    /**
     * @method _insertIntoShadowDom
     * @description Inserts light DOM element into this custom element's shadow dom
     * @param {Element} ele - An element
     */
    _insertIntoShadowDom(ele) {
      if ( !ele || ele.nodeType === 3 || ele.getAttribute('hidden') ) return;
      let anchorName = ele.getAttribute('insert-into') ? ele.getAttribute('insert-into') : this.defaultShadowAnchor;
      let anchor = this.shadowRoot.querySelector(`[shadow-anchor=${anchorName}]`);
      if (!anchor) {
        console.warn(`Shadow anchor '${anchorName}' doesn't exist.`);
        return;
      }
      anchor.appendChild(ele);
    }
  };


export default ThemeUtils;