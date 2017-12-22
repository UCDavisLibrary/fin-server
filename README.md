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

## Adding Administrators

Addministrators are users that access the fedora component with webac disabled. This allows access to all parts of the fedora
repositry.  You probably want to add a new administrator to your system.  This is accomplished with this command

```bash
USER=quinn
docker-compose exec server node app/cli admin add-admin -u $USER
```

This will give the user `quinn` admin access to the system.  By default, using the command-line tool `fin login quinn` will automatically add administrative privildges.  In the future `fin login quinn` will only authenticate the user quinn, where access is still via the fedora's webac rules, and `fin login --admin quinn` will create an administrative token. 

# Example Data

You can initialize the FIN instance with [sample data](https://github.com/UCDavisLibrary/fin-example-repository/) by running the following from
the /docker/ucd-dams dir:

```bash
$ docker-compose exec server node app/cli example
```
