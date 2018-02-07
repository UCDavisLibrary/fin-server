import styles from "./style-properties.html"
let styleWrapper = document.createElement('div');
styleWrapper.style.display = 'none';
styleWrapper.innerHTML = styles;
document.head.appendChild(styleWrapper);