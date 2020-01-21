FROM postgres:10.5

COPY db-init.sql /docker-entrypoint-initdb.d/db-init.sql
ENV POSTGRES_DB fcrepo

ARG REPO_HASH
ARG REPO_TAG
ENV REPO_HASH ${REPO_HASH}
ENV REPO_TAG ${REPO_TAG}