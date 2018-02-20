# Fin Configuration 

The following are the standard environmental variables used by Fin and it's core services.

## FIN_URL (required)

Default: http://localhost:3000

This should be the root url (domain name) of your Fin service. 

## JWT_SECRET (required)

Secret used to encode all Fin JWT tokens

## JWT_ISSUER (required)

Issuer to be used when validating JWT tokens.  ex: library.ucdavis.edu

## JWT_TTL (time in seconds)

Default: 1 day

How long should the JWT token be valid

## JWT_COOKIE_NAME

Default: fin-jwt

Name of cookie to store JWT token

## FCREPO_HOST

Default: fcrepo

Host name of the `fcrepo` service

## FIN_LOG_LEVEL

Default: info

## FIN_COOKIE_SECRET

Default: changeme

Used to encrypt your cookies

## FIN_COOKIE_MAX_AGE (time in milliseconds)

Default: 7 days

## FIN_ALLOW_ORIGINS

Comma separated list of origins you would like to grant access to FIN.  Requests from these origins will set proper CORS headers in the response as well as handle the browser preflight OPTIONS CORS request.

[Read more](./cors.md)

## FIN_CACHE_EXPIRE (time in seconds)

Default: 12 hours

How long to cache GET requests to /fcrepo containers

## CAS_URL

Example: https://cas.ucdavis.edu/cas

Used by the AuthorizationService CAS

## CAS_AGENT_DOMAIN

Defaults to the root domain of the CAS_URL.  So if the CAS_URL = `https://cas.ucdavis.edu/cas`, the CAS_AGENT_DOMAIN will be `ucdavis.edu`.  A user logging into the UC Davis CAS with username alice would login to Fin as alice@ucdavis.edu.

## REDIS_HOST

Default: redis

## REDIS_PORT

Default: 6379

## BASIC_AUTH_AGENT_DOMAIN

Default: local

Used by the basic-auth service.  Domain to append to agent (username) string.  ex: bob@local

