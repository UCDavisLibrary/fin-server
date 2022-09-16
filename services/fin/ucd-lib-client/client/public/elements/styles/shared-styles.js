import ucdCssProps from "./campus-theme-properties.css";
import ucdCss from "./campus-theme.css";
import damsCssProps from "./dams-styles-properties.css";
import damsCss from "./dams-styles.css";

// Insert campus and DAMS style properties for polymer elements
let styleEle = document.createElement('style');
styleEle.id = 'foobar';
styleEle.innerHTML = ucdCss + ucdCssProps + damsCssProps;
document.head.appendChild(styleEle);

// Insert campus and DAMS style rules for polymer elements
let templateEle = document.createElement('template');
templateEle.innerHTML = `<style>${ucdCss + damsCss}</style>`;
let dmEle = document.createElement('dom-module');
dmEle.id = 'shared-styles';
dmEle.appendChild(templateEle);
document.head.appendChild(dmEle);

// import this for Lit elements
export const sharedStyles = `${ucdCss + damsCss}`;
