# FIN (Fedora IN docker) Server

The UC Davis Library DAMS Server - 
 - Fedora Commons based
 - Runs in Docker
 - CAS authentication
 - NodeJS Server and Services
 - Loris IIIF Service

## Setup

first, you need to create a .env file at the root of either /docker/ucd-dams or
/docker/ucd-dams-local-dev (for local machine development).

It needs to specify the following:

```
JWT_SECRET=[secret here]
JWT_ISSUER=[issuer, domain]
JWT_TTL=[optional, time in seconds, defaults to 1 hour]
JWT_VERBOSE=[boolean, controls fcrepo jwt log level]
DAMS_URL=[full url to DAMS is hosted on. so http://localhost:3000 or https://mydams.org]
```

## Linux: Setup max_map_count

This is required to run Elastic Search

```bash
sudo sysctl -w vm.max_map_count=262144
```

See here: https://github.com/docker-library/elasticsearch/issues/111

# Example Data

You can initialize the FIN instance with [sample data](https://github.com/UCDavisLibrary/fin-example-repository/) by running the following from
the /docker/ucd-dams dir:

```bash
$ docker-compose exec server node app/cli example
```