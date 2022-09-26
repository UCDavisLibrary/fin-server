## Classes

<dl>
<dt><a href="#FinApi">FinApi</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#RDF_FORMATS">RDF_FORMATS</a> : <code>Object</code></dt>
<dd><p>JSON_LD: application/ld+json<br />
N_TRIPLES: application/n-triples<br />
RDF_XML: application/rdf+xml<br />
SPARQL_UPDATE: application/sparql-update<br />
N3: text/n3<br />
PLAIN: text/plain<br />
TURTLE: text/turtle</p>
</dd>
<dt><a href="#FILE_EXTENSIONS">FILE_EXTENSIONS</a> : <code>Object</code></dt>
<dd><p>.json: application/ld+json<br />
.nt: application/n-triples<br />
.xml: application/rdf+xml<br />
.n3: text/n3<br />
.txt: text/plain<br />
.ttl: text/turtle</p>
</dd>
<dt><a href="#GET_JSON_ACCEPT">GET_JSON_ACCEPT</a> : <code>Object</code></dt>
<dd><p>Optional Accept HTTP header values for GET request of Content-Type=application/ld+json</p>
</dd>
<dt><a href="#GET_PREFER">GET_PREFER</a> : <code>Object</code></dt>
<dd><p>Optional Prefer HTTP header values for GET request</p>
</dd>
<dt><a href="#PUT_PEFER">PUT_PEFER</a> : <code>Object</code></dt>
<dd><p>Optional Prefer HTTP header values for PUT request.
Allows replacing the properties of a container without having to provide all of the server-managed triples.</p>
</dd>
<dt><a href="#acl">acl</a> : <code>class</code></dt>
<dd><p>set of functions for interacting with fin webac.</p>
</dd>
<dt><a href="#service">service</a> : <code>class</code></dt>
<dd><p>set of functions for interacting with fin services.</p>
</dd>
<dt><a href="#transform">transform</a> : <code>Object</code></dt>
<dd><p>util functions for turtle, json-ld and sparql transforms</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#setConfig">setConfig(params)</a></dt>
<dd><p>Set the API config</p>
<p>To make authenticated requests you should supply either a username/refreshToken or
username/password combo.  Then if a JWT doesn&#39;t exist or is expired, the request 
function will fetch a new JWT before the request is made.</p>
</dd>
<dt><a href="#getConfig">getConfig()</a> ⇒ <code>Object</code></dt>
<dd><p>return config object</p>
</dd>
<dt><a href="#isSuccess">isSuccess(response)</a> ⇒ <code>Boolean</code></dt>
<dd><p>Given a HTTP response see if response is in 200 range</p>
</dd>
<dt><a href="#get">get(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Retrieve the content of the resource</p>
</dd>
<dt><a href="#head">head(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Retrieve HTTP headers of the resource</p>
</dd>
<dt><a href="#post">post(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Create new resources within a LDP container</p>
</dd>
<dt><a href="#put">put(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Create a resource with a specified path, or replace the triples associated 
with a resource with the triples provided in the request body.</p>
</dd>
<dt><a href="#patch">patch(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Sparql base update</p>
</dd>
<dt><a href="#delete">delete(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Delete a resource</p>
</dd>
<dt><a href="#copy">copy(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Copy a resource (and its subtree) to a new location</p>
</dd>
<dt><a href="#move">move(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Move a resource (and its subtree) to a new location</p>
</dd>
<dt><a href="#startTransaction">startTransaction(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Start a new transaction, returns transation token.</p>
</dd>
<dt><a href="#commitTransaction">commitTransaction(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Commit transation</p>
</dd>
<dt><a href="#rollbackTransaction">rollbackTransaction(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Rollback transation</p>
</dd>
<dt><a href="#getVersions">getVersions(options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get a current version</p>
</dd>
<dt><a href="#getVersion">getVersion(options)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#createVersion">createVersion(options)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#revertToVersion">revertToVersion(options)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#deleteVersion">deleteVersion(options)</a> ⇒ <code>Promise</code></dt>
<dd></dd>
<dt><a href="#parseLinkHeader">parseLinkHeader(link)</a> ⇒ <code>Object</code></dt>
<dd><p>helper for parsing HTTP link header.  many utils for this
do not assume multiple rel&#39;s of the same value which fedora returns.</p>
</dd>
</dl>

<a name="FinApi"></a>

## FinApi
**Kind**: global class  
<a name="new_FinApi_new"></a>

### new FinApi()
FIN API class

Many classes return a promise with a object that looks like {response, body, authenticated}
where
 - response: HTTP response object
 - body: HTTP body contents
 - authenticated: boolean flag if a JWT token was sent along with the request

<a name="RDF_FORMATS"></a>

## RDF_FORMATS : <code>Object</code>
JSON_LD: application/ld+json<br />
N_TRIPLES: application/n-triples<br />
RDF_XML: application/rdf+xml<br />
SPARQL_UPDATE: application/sparql-update<br />
N3: text/n3<br />
PLAIN: text/plain<br />
TURTLE: text/turtle

**Kind**: global variable  
<a name="FILE_EXTENSIONS"></a>

## FILE_EXTENSIONS : <code>Object</code>
.json: application/ld+json<br />
.nt: application/n-triples<br />
.xml: application/rdf+xml<br />
.n3: text/n3<br />
.txt: text/plain<br />
.ttl: text/turtle

**Kind**: global variable  
<a name="GET_JSON_ACCEPT"></a>

## GET_JSON_ACCEPT : <code>Object</code>
Optional Accept HTTP header values for GET request of Content-Type=application/ld+json

**Kind**: global variable  
<a name="GET_PREFER"></a>

## GET_PREFER : <code>Object</code>
Optional Prefer HTTP header values for GET request

**Kind**: global variable  
<a name="PUT_PEFER"></a>

## PUT_PEFER : <code>Object</code>
Optional Prefer HTTP header values for PUT request.
Allows replacing the properties of a container without having to provide all of the server-managed triples.

**Kind**: global variable  
<a name="acl"></a>

## acl : <code>class</code>
set of functions for interacting with fin webac.

**Kind**: global variable  
<a name="service"></a>

## service : <code>class</code>
set of functions for interacting with fin services.

**Kind**: global variable  
<a name="transform"></a>

## transform : <code>Object</code>
util functions for turtle, json-ld and sparql transforms

**Kind**: global variable  
<a name="setConfig"></a>

## setConfig(params)
Set the API config

To make authenticated requests you should supply either a username/refreshToken or
username/password combo.  Then if a JWT doesn't exist or is expired, the request 
function will fetch a new JWT before the request is made.

**Kind**: global function  

| Param | Description |
| --- | --- |
| params | key/value pairs to set |
| params.host | FIN host ex. http://mydams.org |
| params.fcBasePath | Fedora base path (default: /fcrepo/rest) |
| params.jwt | JWT Token |
| params.refreshToken | refresh token to use if JWT expires |
| params.username | username to use with refreshToken or password if JWT expires |
| params.password | password to use if JWT expires |
| params.transactionToken | custom transaction token |

<a name="getConfig"></a>

## getConfig() ⇒ <code>Object</code>
return config object

**Kind**: global function  
<a name="isSuccess"></a>

## isSuccess(response) ⇒ <code>Boolean</code>
Given a HTTP response see if response is in 200 range

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>Object</code> | HTTP response object |

<a name="get"></a>

## get(options) ⇒ <code>Promise</code>
Retrieve the content of the resource

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | arguments |
| options.path | <code>String</code> | resource path |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |

<a name="head"></a>

## head(options) ⇒ <code>Promise</code>
Retrieve HTTP headers of the resource

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | arguments |
| options.path | <code>String</code> | resource path |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |

<a name="post"></a>

## post(options) ⇒ <code>Promise</code>
Create new resources within a LDP container

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | arguments |
| options.path | <code>String</code> | resource path |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.file | <code>Object</code> | (optional) path to file to upload |
| options.content | <code>Object</code> | (optional) content to upload |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |
| options.transactionToken | <code>String</code> | (optional) override config.transactionToken |

<a name="put"></a>

## put(options) ⇒ <code>Promise</code>
Create a resource with a specified path, or replace the triples associated 
with a resource with the triples provided in the request body.

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | arguments |
| options.path | <code>String</code> | resource path |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.file | <code>Object</code> | (optional) path to file to upload |
| options.content | <code>Object</code> | (optional) content to upload |
| options.partial | <code>Object</code> | (optional) only partial update happening, sets Prefer header to handling=lenient; received="minimal" |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |
| options.transactionToken | <code>String</code> | (optional) override config.transactionToken |

<a name="patch"></a>

## patch(options) ⇒ <code>Promise</code>
Sparql base update

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | arguments |
| options.path | <code>String</code> | resource path |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.file | <code>Object</code> | (optional) path to file to upload |
| options.content | <code>Object</code> | (optional) content to upload |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |
| options.transactionToken | <code>String</code> | (optional) override config.transactionToken |

<a name="delete"></a>

## delete(options) ⇒ <code>Promise</code>
Delete a resource

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | arguments |
| options.path | <code>String</code> | resource path |
| options.permanent | <code>Boolean</code> | remove /fcr:tombstone as well |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |
| options.transactionToken | <code>String</code> | (optional) override config.transactionToken |

<a name="copy"></a>

## copy(options) ⇒ <code>Promise</code>
Copy a resource (and its subtree) to a new location

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | arguments |
| options.path | <code>String</code> | resource path |
| options.destination | <code>Boolean</code> | path to copy resource to |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |
| options.transactionToken | <code>String</code> | (optional) override config.transactionToken |

<a name="move"></a>

## move(options) ⇒ <code>Promise</code>
Move a resource (and its subtree) to a new location

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | arguments |
| options.path | <code>String</code> | resource path |
| options.destination | <code>Boolean</code> | path to move resource to |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |
| options.transactionToken | <code>String</code> | (optional) override config.transactionToken |

<a name="startTransaction"></a>

## startTransaction(options) ⇒ <code>Promise</code>
Start a new transaction, returns transation token.

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated, transactionToken}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | arguments |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |

<a name="commitTransaction"></a>

## commitTransaction(options) ⇒ <code>Promise</code>
Commit transation

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | arguments |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |
| options.transactionToken | <code>String</code> | (optional) override config.transactionToken |

<a name="rollbackTransaction"></a>

## rollbackTransaction(options) ⇒ <code>Promise</code>
Rollback transation

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | arguments |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |
| options.transactionToken | <code>String</code> | (optional) override config.transactionToken |

<a name="getVersions"></a>

## getVersions(options) ⇒ <code>Promise</code>
Get a current version

**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |

<a name="getVersion"></a>

## getVersion(options) ⇒ <code>Promise</code>
**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.versionName | <code>String</code> | version to get |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |

<a name="createVersion"></a>

## createVersion(options) ⇒ <code>Promise</code>
**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.versionName | <code>String</code> | version to create |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |

<a name="revertToVersion"></a>

## revertToVersion(options) ⇒ <code>Promise</code>
**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.versionName | <code>String</code> | version name to revert to |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |

<a name="deleteVersion"></a>

## deleteVersion(options) ⇒ <code>Promise</code>
**Kind**: global function  
**Returns**: <code>Promise</code> - {response, body, authenticated}  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.versionName | <code>String</code> | version to delete |
| options.headers | <code>Object</code> | resource headers, key/value pairs |
| options.host | <code>String</code> | (optional) override config.host |
| options.fcBasePath | <code>String</code> | (optional) override config.fcBasePath |

<a name="parseLinkHeader"></a>

## parseLinkHeader(link) ⇒ <code>Object</code>
helper for parsing HTTP link header.  many utils for this
do not assume multiple rel's of the same value which fedora returns.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| link | <code>String</code> | HTTP link header |

