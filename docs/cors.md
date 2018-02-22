# Cross-Origin Resource Sharing (CORS)

With Fin possibly being the heart of your application ecosystem, you may wish to have applications running on other domains have access to your Fin instance.  By default cross-origin domain requests are blocked in modern browsers.  You can however make cross origin requests if [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) are enabled.

Fin supports CORS headers for registered domains.  There are two ways to register a domain for CORS access in Fin:

 - `FIN_ALLOW_ORIGINS` environmental variable.  This should be a comma separated list of domains that are allowed to access Fin. 
 - ExternalServices.  Any registered external services domain will be allowed to access Fin via CORS.


## Root Domain

When Fin checks the referer header, it will check if the root domain is registered.  That means if a request is from `foo.bar.org`, if `bar.org` has access then the request will be allowed.  Similarly if you register an external service at `baz.ext-service.org` any request from `*.ext-service.org` will be allowed.

## Details Exposed Headers and Allowed Methods

Fin will set the following headers if a domain is allowed:

 - `Access-Control-Allow-Methods`: GET, POST, PUT, DELETE, PATCH, OPTIONS
 - `Access-Control-Expose-Headers`: content-type, link, content-disposition, content-length, pragma, expires, cache-control
 - `Access-Control-Allow-Headers`: authorization, cookie, content-type, prefer, slug, cache-control
 - `Access-Control-Allow-Credentials`: true
 - `Access-Control-Allow-Origin`: [referer origin]
