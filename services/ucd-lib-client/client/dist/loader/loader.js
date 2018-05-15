function classSupport() {
  try {
    eval("class Foo {}");
  } catch (e) { return false; }
  return true;
}

document.open();

if( !classSupport() ) {
  console.log('No class support, adding babel polyfills. using ie compatibility build');
  document.write('<script src="/loader/polyfills/babel-polyfill.js"></script>');
}

document.write('<script src="/loader/polyfills/webcomponents-loader.js" ></script>');
document.close();

function addScript(src) {
  var ele = document.createElement('script');
  ele.src = src;
  document.head.appendChild(ele);
}

function load() {
  console.log('Webcomponents ready.');
  if( classSupport() ) addScript('/js/bundle.js');
  else addScript('/js/ie-bundle.js');
}

if( window.WebComponents && WebComponents.ready) load();
else window.addEventListener('WebComponentsReady', load);