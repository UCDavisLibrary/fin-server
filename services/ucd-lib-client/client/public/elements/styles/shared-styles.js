import styles from "./shared-styles.html"

const sharedStyles = document.createElement('template');
sharedStyles.innerHTML = styles;
document.head.appendChild(sharedStyles.content);