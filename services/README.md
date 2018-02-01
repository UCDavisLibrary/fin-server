# Fin Services

Currently Fin has four types of services.

- ProxyService
  - A passthrough proxy service that proxies a HTTP request to a external service
  and returns the services response
- WebhookService
  - A event service that listens for Fedora events and sends a HTTP POST to a service any time a event is fired.  The Fedora event headers and message body are sent in the body of the POST.
- FrameService
  - A JSON-LD service that returns a framed JSON-LD response based on the path of the service.
- ExternalSerivce
  - A external service will send a HTTP 302 redirect to a external service.  The url of the redirect will include the current Fin url (host and path) as well as a auth token if the user is logged in.  The external service can then request data and make updates to Fin on the users behalf.  YOU SHOULD HAVE TRUST IN ALL REGISTERED EXTERNAL SERVICES.

## Services HTTP flow

![Service Overview](fin-service-overview.png)