## Browser Quirks, access Fedora from a browser

There are a couple browser quirks that Fin handles you should be aware of if you are building a external service that accesses Fedora.

When browser makes a CORS request ([readme more about Fin and CORS](./cors.md)) it first makes a preflight OPTIONS request with the `access-control-request-headers` headers set.  Be default Fedora doesn't handle the request appropriately.  Fin will intercept any OPTIONS request with the `access-control-request-headers` set and respond with apporiate CORS headers for the domain.

If a browser is make requests to Fedora (/fcrepo/rest) and varying the `Accept` parameter to read container RDF in defering formats, the browser cache will get in the way.  Infact if you request `Accept: text/turtle` from a browser, the next time you visit the container in a browser you will may get turtle instead of the default Fedora HTML view of a container.  To get around the browser cache, all requests to /fcrepo are set so they do not cache with the following response headers:

 - `Cache-Control:` no-cache, no-store, must-revalidate
 - `Expires:` 0
 - `Pragma:` no-cache