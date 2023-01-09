ARG INIT_BASE=gcr.io/ucdlib-pubreg/init-services:main
FROM ${INIT_BASE}

RUN mkdir -p /etc/ucdlib-service-init
COPY postgres /etc/ucdlib-service-init/postgres
COPY docker-run.sh /

ENV PG_DATABASE=fcrepo
