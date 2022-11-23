ARG INIT_BASE=gcr.io/ucdlib-pubreg/init-services:main
ARG FIN_SERVER_IMAGE
FROM ${FIN_SERVER_IMAGE} as fin-server
FROM ${INIT_BASE}

COPY --from=fin-server /fin/api /fin-api
RUN cd /fin-api && npm link

RUN mkdir -p /etc/ucdlib-service-init
COPY postgres /etc/ucdlib-service-init/postgres
COPY fcrepo /etc/ucdlib-service-init/fcrepo
COPY docker-run.sh /

ENV PG_DATABASE=fcrepo

CMD /docker-run.sh