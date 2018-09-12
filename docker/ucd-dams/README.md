# FIN Demo

The demo is the UC Davis Library DAMS which contains the following services/containers.  

![Demo Overview](../../docs/fin-demo-ucd-dams.png)

# Deployment

## Requirements
 - [Docker](https://docs.docker.com/install/)
 - [Docker Compose](https://docs.docker.com/compose/install/)

### Linux: Setup max_map_count for Elasticsearch 

This is required to run Elasticsearch

```bash
sudo sysctl -w vm.max_map_count=262144
```

More information here: [https://github.com/docker-library/elasticsearch/issues/111](https://github.com/docker-library/elasticsearch/issues/111)

## Running Demo

First navigate to this directory

```bash
cd docker/ucd-dams
```

Next, in your favorite text editor, create a new `.env` file with the following contents:

```env
JWT_SECRET=[your secret here]
JWT_ISSUER=[your org here]
FIN_URL=[your dams url here]
```

An example FOR TESTING ONLY could be:

```env
JWT_SECRET=testing
JWT_ISSUER=my-test-dams.org
FIN_URL=http://localhost:3000
```

Finally, start application with the following command:

```bash
docker-compose up
```

Now visit `http://localhost:3000` in your browser.

Directions for adding admin users can be found in the [main docs](../../docs/README.md#administrators) for this repo

## Example Data

You can initialize the FIN instance with [sample data](https://github.com/UCDavisLibrary/fin-example-repository/) by running the following from
the docker-compose file directory:

```bash
$ docker-compose exec server node app/cli example
```
