import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }
  li {
    display: block;
    margin-bottom: var(--spacing-default);
    text-transform: lowercase;
  }
  ul {
    margin: 0;
    padding: 0;
  }
</style> 
<h2>${this.header}</h2>
<slot></slot>
${this.template == 'libraries' ? html`
  <ul>
    <li><a href="https://www.library.ucdavis.edu/library/peter-j-shields/">Peter J. Shields Library</a></li>
    <li><a href="https://www.library.ucdavis.edu/library/carlson-health-sciences/">Carlson Health Sciences Library</a></li>
    <li><a href="https://www.library.ucdavis.edu/library/blaisdell-medical/">Blaisdell Medical Library</a></li>
    <li><a href="https://law.ucdavis.edu/library/">Mabie Law Library</a></li>
    <li><a href="https://www.library.ucdavis.edu/archives-and-special-collections/">Archives and Special Collections at Shields Library</a></li>
  </ul>
` : html``}
`;}