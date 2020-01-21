ARG FIN_SERVER_VERSION
FROM ucdlib/fin-server:${FIN_SERVER_VERSION}

COPY transforms /etc/fin/transforms
COPY core-services.js /etc/fin/core-services.js

ARG REPO_HASH
ARG REPO_TAG
ENV REPO_HASH ${REPO_HASH}
ENV REPO_TAG ${REPO_TAG}