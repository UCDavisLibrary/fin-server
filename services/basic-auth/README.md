# Basic Authentication Service

The basic authentication service is a standard username/password service for fin.  Please note, this service is recommended for demo purposes only.  Security on the web is tricky and the fin developers recommend using a 3rd party authentication provider (like the [CAS service](../cas)) if possible.

*For all instructions below, it will be assumed the basic-auth service has been registered with a 
service id of **basic**

## UI Endpoints

There are two HTML pages provided for logging in and account creation:

### /auth/basic/login

Login w/ username and password

### /auth/basic/create.html

Create a user account

## Rest Endpoints

### POST /auth/basic/user

 - Payload: JSON

Post a user object to create a account

### DELETE /auth/basic/user/:username

 - Must be fin admin

Delete a user

### GET /auth/basic/user/:username

Get user information

### POST /auth/basic/login

 - Payload: JSON w/ username & password

Log user in.  If successful, sets `X-FIN-AUTHORIZED-AGENT` header.

## CLI

The following commands are exposed via a simple container CLI:

```bash
node /service/cli
```
