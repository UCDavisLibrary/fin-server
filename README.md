# unnamed-ucd-dams
UC Davis Library DAMS - Fedora Commons based, running in Docker with CAS authentication

## Setup

first, you need to create a .env file at the root of this repository.
It needs to specify the following:

```
JWT_SECRET=[secret here]
JWT_ISSUER=[issuer, domain]
JWT_TTL=[time in seconds, defaults to 1 hour]
```