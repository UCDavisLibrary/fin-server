# FIN Server Documentation

## Fin Core

There are three service at the core of Fin:

- [Fedora](../fcrepo)
  - A [Fedora Commons](https://wiki.duraspace.org/display/FEDORA4x/) container with [JWT](https://jwt.io/) authentication and [WebAC](https://www.w3.org/wiki/WebAccessControl) authorization using the [Fedora WebAC plugin](https://wiki.duraspace.org/display/FEDORA4x/WebAC+Authorization+Delegate). 
- Redis
  - A key/value store [Redis](https://redis.io/) is used for storing sessions, admins, service signatures and available to all other local services to be leveraged for basic storage (the [basic-auth](../services/basic-auth) service using to store username/password information).
- [Fin Server](../server)
  - A NodeJS/ExpressJS server that acts as a proxy to route fin HTTP requests to desired services.  The fin server also adds endpoints for handling some auth functionality such as logout and admin administration.

## Services

Fin is built using composable micoservices.  If you want to develop on or deploy Fin, this is recommended reading.

[Service Documentation](../services/README.md)

## FIN CLI

[https://github.com/UCDavisLibrary/fin-cli](https://github.com/UCDavisLibrary/fin-cli)

A command line interface and shell for interactive with fin.  Built using the [fin-node-api](https://github.com/UCDavisLibrary/fin-node-api) it provides functionality for interacting with Fin and Fedora.  It provides a simple CLI for performing all [Fedora HTTP API requests](https://wiki.duraspace.org/display/FEDORA4x/RESTful+HTTP+API) as well as working with [Fin services](../services/README.md), WebAC/acl the Fin way and authentication.

Install CLI (NodeJS w/ NPM Required)

```bash
npm install -g fin-cli
```

## Administrators

Addministrators are users that access the fedora component with webac disabled. This allows access to all parts of the fedora repositry.  You probably want to add a new administrator to your system.  This is accomplished with this command

```bash
docker-compose exec server node app/cli admin add-admin -u quinn
```

This will give the user `quinn` admin access to the system.  By default, using the command-line tool `fin login quinn` will automatically add administrative privildges.  In the future `fin login quinn` will only authenticate the user quinn, where access is still via the fedora's webac rules, and `fin login --admin quinn` will create an administrative token. 

## Demo

[UC Davis DAMS Demo](docker/fin-demo/README.md)