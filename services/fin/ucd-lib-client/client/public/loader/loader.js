(function() {

  function loaderRootPath() {
    if( window.CORK_LOADER_PATHS && window.CORK_LOADER_PATHS.loader ) {
      return window.CORK_LOADER_PATHS.loader;
    }
    return '/loader';
  }

  function bundleRootPath() {
    if( window.CORK_LOADER_PATHS && window.CORK_LOADER_PATHS.bundle ) {
      return window.CORK_LOADER_PATHS.bundle;
    }
    return '/js';
  }

  function classSupport() {
    try {
      eval("class Foo {}");
    } catch (e) { return false; }
    return true;
  }

  function addScript(src) {
    var ele = document.createElement('script');
    ele.src = src;
    document.head.appendChild(ele);
  }
  
  function load() {
    console.log('Webcomponents ready: '+(WebComponents.noPolyRequired ? 'native' : 'polyfill'));
  
    var version = '';
    if( window.CORK_LOADER_VERSIONS ) {
      version = '?_='+CORK_LOADER_VERSIONS.bundle;
      console.log('Using client bundle version: '+CORK_LOADER_VERSIONS.bundle);
    } else {
      console.warn('No client bundle version specified');
    }
  
    if( classSupport() ) addScript(bundleRootPath()+'/bundle.js'+version);
    else addScript(bundleRootPath()+'/bundle-ie.js'+version);
  }

  var version = '';
  if( window.CORK_LOADER_VERSIONS ) {
    version = '?_='+CORK_LOADER_VERSIONS.loader;
    console.log('Using loader version: '+CORK_LOADER_VERSIONS.loader);
  } else {
    console.warn('No loader version specified');
  }

  
  if( !classSupport() ) {
    console.log('No class support, adding babel polyfills. using ie compatibility build');
    document.open();
    document.write('<script src="'+loaderRootPath()+'/polyfills/polyfills.js'+version+'"><\/script>');
    document.close();
  }

  if( document.head.attachShadow && ('customElements' in window) && ('content' in document.createElement('template')) ) {
    window.WebComponents = {
      ready : true,
      noPolyRequired : true
    }
  } else {
    document.open();
    document.write('<script src="'+loaderRootPath()+'/polyfills/webcomponents-loader.js'+version+'" ><\/script>');
    document.close();
  }

  if( window.WebComponents && WebComponents.ready) load();
else window.addEventListener('WebComponentsReady', load);
})();

