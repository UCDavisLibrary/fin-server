## Browser Quirks, access Fedora from a browser

There are a couple browser quirks that Fin handles you should be aware of if you are building a external service that accesses Fedora.

When browsers make a CORS request ([readme more about Fin and CORS](./cors.md)) it first makes a preflight OPTIONS request with the `access-control-request-headers` header set.  By default Fedora doesn't handle the request appropriately.  Fin will intercept any OPTIONS request with the `access-control-request-headers`, then set and respond with appropriate CORS headers for the domain.

If a browser is make requests to Fedora (/fcrepo/rest) varying the `Accept` parameter to read container RDF in differing formats, the browser cache will get in the way.  In fact if you request `Accept: text/turtle` from a browser, the next time you visit the container in a browser you will may get turtle instead of the default Fedora HTML view of a container.  To get around the browser cache, all requests to /fcrepo are set so they do not cache with the following response headers:

 - `Cache-Control:` no-cache, no-store, must-revalidate
 - `Expires:` 0
 - `Pragma:` no-cache