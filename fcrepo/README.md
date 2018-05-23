# FIN Fedora Container Image

Fin uses the latest release of fedora manually adding in the webac jars/spring config due to issues with the pre-built fedora-webac setup.  Additionally Fin adds the the jetty-jwt-filter for integration of JWT based authentication with Jetty.  Fin sets some custom configuration files.  Finally Fin adds a custom fcrepo-http-api jar to support setting fedora RDF host name and protocal via headers.

## /etc

Standard fcrepo config files that are copied to `/etc/fcrepo/`

## /fin-config

Custom spring and jetty config files for fin.

## /http-api

Custom fcrepo-http-api jar file to support setting RDF uris host and protocol via HTTP headers.  The source is located in a fork of the fcrepo4 repository here: https://github.com/UCDavisLibrary/fcrepo4/tree/fcrepo-4.7.5-headers.  Note you want to checkout the `fcrepo-4.7.5-headers` branch.

To build:

```
git clone https://github.com/UCDavisLibrary/fcrepo4
cd fcrepo4
git checkout fcrepo-4.7.5-headers
cd fcrepo-http-api
MAVEN_OPTS="-Xmx1024m -XX:MaxMetaspaceSize=1024m" mvn install
```

The new jars will be located in `/fcrepo-http-api/target`

## jetty-auth-jars

The jars required from the jetty-jwt-filter Jetty plugin.  The source for the jetty-jwt-filter is located in this repo: https://github.com/UCDavisLibrary/jetty-fedora-jwt-filter.  Reminder, this is a Jetty plugin, so jars in this folder are added to `/var/lib/jetty/lib/ext/`

## /webac-jar and /webac-spring-files

The jars and spring config files required for the webac plugin.  To update these files, see the `download-webac.sh` script.  This script will download the fcrepo-webapp-plus war and extract the required files into the `/webac-jar` and `/webac-spring-files` folders

# Upgrading Fedora versions

To build a new container image with and updated version of fedora:

- update `download-webac.sh` and set `FCREPO_VERSION` to new version number
- run `download-webac.sh`
- update `Dockerfile` and set `FCREPO_VERSION` to new version number
- rebuild image using docker or docker-compose