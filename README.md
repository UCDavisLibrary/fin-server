# unnamed-ucd-dams
UC Davis Library DAMS - Fedora Commons based, running in Docker with CAS authentication

## Setup

first, you need to create a .env file at the root of either /docker/ucd-dams or
/docker/ucd-dams-local-dev (for local machine development).

It needs to specify the following:

```
JWT_SECRET=[secret here]
JWT_ISSUER=[issuer, domain]
JWT_TTL=[optional, time in seconds, defaults to 1 hour]
```

## Linux: Setup max_map_count

```bash
sudo sysctl -w vm.max_map_count=262144
```

See here: https://github.com/docker-library/elasticsearch/issues/111