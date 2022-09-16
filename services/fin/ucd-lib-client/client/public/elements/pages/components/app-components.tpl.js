import { html } from 'lit-element';
import { sharedStyles } from "../../styles/shared-styles";
import SharedHtml from '../../utils/shared-html';

export default function render() { 
return html`

<style>
  ${sharedStyles}
  :host {
    display: block;
    background-color: var(--color-white);
  }
  h2 {
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
  }
  section {
    padding: var(--spacing-sm);
  }
  section:nth-child(odd) {
    background-color: var(--color-white);
  }
  section:nth-child(even) {
    background-color: var(--color-dams-primary-g4);
  }
  code {
    color: var(--color-dams-primary);
    background-color: var(--color-black-10);
  }
  .search {
    text-align:center;
    margin: 0 auto;
  }
  .collection-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-gap: var(--spacing-default);
  }
</style>

<h1 style="text-align:center;">Dams Site Components</h1>
<p style="text-align:center;">These are site components.</p>

<div class="sections">
  <section>
    <h2>Water Color</h2>
    ${ SharedHtml.headerDots() }
    <p>Use <code>dams-watercolor</code> element to display raster watercolor images. You can use 
    properties to change the watercolor pattern, color, size, and rotation.
    </p>
    <dams-watercolor></dams-watercolor>
  </section>

  <section>
    <h2>Water Color<br> <span class="fw-light">with Image</span></h2>
    ${ SharedHtml.headerDots() }
    <p>Use <code>dams-watercolor-overlay</code> element with the <code>img-src</code> attribute to overlay an image on the watercolor.
      In addition to customizing the watercolor, you can adjust the image size and position using element properties.
    </p>
    <dams-watercolor-overlay 
      wc-rotation="30"
      img-position="50% 20%"
      img-src="/images/dev/everest.jpg"></dams-watercolor-overlay>
  </section>

  <section>
    <h2>Water Color<br> <span class="fw-light">with Icon</span></h2>
    ${ SharedHtml.headerDots() }
    <p>Use <code>dams-watercolor-overlay</code> element with the <code>icon</code> attribute to overlay an iron-icon on the watercolor.
    In addition to customizing the watercolor, you can adjust the icon color, size, and position using element properties.
   </p>
    <dams-watercolor-overlay 
      icon="star"></dams-watercolor-overlay>
  </section>

  <section>
    <h2>Hero Image</h2>
    ${ SharedHtml.headerDots() }
    <p>Displays a hero image with overlayed gradient and water color. Enter content using a slot. Use the <code>.srcOptions</code> property to pass an array of img srcs for
    the hero image to randomly choose from.
    </p>
    <dams-hero src="/images/defaults/annual-winter-sale1952.jpg" style="height:300px;">
      <p>Hi there! This is slotted content.</p>
    </dams-hero>
  </section>

  <section>
    <h2>Collections Preview Card</h2>
    ${ SharedHtml.headerDots() }
    <p>Use the <code>.collection</code> property to populate the card.</p>
    <div class="collection-cards">
      <dams-collection-card
        href="https://google.com"
        item-ct="1"
        card-title="A Collection">
      </dams-collection-card>
      <dams-collection-card
        href="#"
        item-ct="45" 
        card-title="Pioneering Punjabis"
        img-src="/images/dev/everest.jpg">
      </dams-collection-card>
      <dams-collection-card 
        href="#"
        item-ct="809"
        card-title="Sherry Lehmann"
        img-src="/images/dev/lehmann.jpg">
      </dams-collection-card>
    </div>

  </section>

  <section>
  <h2>Filter Button</h2>
  ${ SharedHtml.headerDots() }
  <p>Attach a listener to activate filter button appearence and can be exited out once attached.</p>
      <app-filter-button><div slot="filter-button-text">Filter1</div></app-filter-button> 
      <app-filter-button><div slot="filter-button-text">Filter2</div></app-filter-button> 
      <app-filter-button><div slot="filter-button-text">Filter3</div></app-filter-button> 
      <app-filter-button><div slot="filter-button-text">Filter4</div></app-filter-button> 
  </section>

  <section>
  <h2>Icon</h2>
  ${ SharedHtml.headerDots() }
  <p>A specific icon for DAMS creation.</p>
  <p>Size Icon for an extra large size with <code>size-icon-svg='extralg' size="extralg"</code></p>
  <app-icons id="option" icon="iron-archive" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">Collections</div></app-icons>
  <app-icons id="option" icon="iron-dashboard" theme-color='secondary' size-icon-svg='extralg' size="extralg"><div slot="icon-text">All Items</div></app-icons>
  <br />
  <p>Size Icon for a smaller size with <code>size-icon-svg='lg' size="lg"</code></p>
  <app-icons id="option" icon="iron-account-box" theme-color='secondary' size-icon-svg='lg' size="lg"><div slot="icon-text">Creators</div></app-icons>
  <app-icons id="option" icon="iron-create" theme-color='secondary' size-icon-svg='lg' size="lg"><div slot="icon-text">Formats</div></app-icons>
  </section>

  <section>
  <h2>Navigation Bar</h2>
  ${ SharedHtml.headerDots() }
  <p>Entire Navagation Bar where you can add elements with keyword <code>choices</code>.</p>
  <app-nav-bar choices='[{"text": "Browse"},
                        {"text": "About"},
                        {"text": "FAQ"}]'>
  </app-nav-bar> 
  </section>

  </section>
  <h2>Pagination</h2>
  ${ SharedHtml.headerDots() }

    <p>Attach a listener to be notified when the page changes i.e.<br /><code>@changed-page=\${(e) => console.log(e.target.currentPage)}</code></p>
    <dams-pagination max-page=8 @changed-page=${(e) => console.log(e.target.currentPage)}></dams-pagination>
    <p>Use the <code>max-page</code>, <code>min-page</code>, and <code>current-page</code> attributes to control the display.</p>
    <dams-pagination max-page=15 current-page="7"></dams-pagination>
    <p>Use the <code>pages-per-side</code> attribute to show more pages on either side of the current page<p>
    <dams-pagination max-page=20 current-page=10 pages-per-side=3></dams-pagination>
    </section>
  <section>

  <section>
  <h2>Radio Button</h2>
  ${ SharedHtml.headerDots() }
  <p>Radio button list where you can add elements with keyword <code>choices</code>.</p>
  <p>Radio button list is horizontal but can be made vertical.</p>

  <app-radio-button choices='[{"text": "Title"},
                              {"text": "Recent"},
                              {"text": "Item Quantity"}]'></app-radio-button>
  </section>

  <section>
  <h2>Search Box</h2>
  ${ SharedHtml.headerDots() }
    <div class="search">
      <app-search-box 
        id="searchBox" 
        @search="${this._onSearch}" 
        placeholder="search">
        <iron-icon icon="fin-icons:search" class="search-icon" slot="button-content"></iron-icon>
      </app-search-box>
    </div>
  </section>

</div>




`;}
