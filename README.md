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

You can initialize the FIN instance with [sample data](https://github.com/UCDavisLibrary/fin-example-repository/) by doing the following:

Start a bash shell on the main server container
```bash
$ docker-compose exec server bash
```

Create a admin account.  This account should be the same account you login with.
```
$ node /app/cli admin add-admin -u [username]
```

Setup the FIN CLI with your dams host
```
$ fin config set host $DAMS_URL
```

Login the FIN CLI for the container.  You will need to copy the given url into a browser,
follow the CAS login flow, then copy the token and paste it into the terminal
```bash
$ fin login --headless 
```

Clone the example data repo
```bash
$ git clone https://github.com/UCDavisLibrary/fin-example-repository.git
```

Finally, run the initialization script
```bash
$ cd /fin-example-repository && ./initialize
```

*Note if you are running a local FIN server on your machine (localhost), you will need to 
reset the FIN CLI host after login, since localhost will point to container.  The steps
for a localhost FIN server init are as follows:

```bash
docker-compose exec server bash
node /app/cli admin add-admin -u [username]
fin config set host $DAMS_URL
fin login --headless 
git clone https://github.com/UCDavisLibrary/fin-example-repository.git

# so this is the additional step.  It sets the 'host' to the localhost port
# the fin server is running on inside the container.
fin config set host http://localhost:3001

cd /fin-example-repository && ./initialize
```