FROM node:16


ENV FIN_SERVICE_ROOT=/fin/services
ENV FIN_API_ROOT=/fin/api
ENV FIN_CONFIG_ROOT=/etc/fin
# Build docker build context path should be the root of this repository
ARG FIN_REPO_SERVICE_ROOT=services/fin
ARG FIN_REPO_API_ROOT=fin-api

RUN apt-get update
RUN apt-get install -y git jq zip unzip vim
RUN apt-get clean

RUN mkdir -p $FIN_SERVICE_ROOT
RUN mkdir -p $FIN_API_ROOT
RUN mkdir -p $FIN_CONFIG_ROOT

# Node API package
WORKDIR ${FIN_API_ROOT}
COPY ${FIN_REPO_API_ROOT}/package.json .
COPY ${FIN_REPO_API_ROOT}/package-lock.json .
RUN npm install --production && \
  npm link

# Main service package
WORKDIR ${FIN_SERVICE_ROOT}
COPY ${FIN_REPO_SERVICE_ROOT}/package.json .
COPY ${FIN_REPO_SERVICE_ROOT}/package-lock.json .
RUN npm install --production && \
  npm link && \
  npm link @ucd-lib/fin-service-utils @ucd-lib/fin-api

# API Code
WORKDIR ${FIN_API_ROOT}
COPY ${FIN_REPO_API_ROOT}/index.js .
COPY ${FIN_REPO_API_ROOT}/lib lib
COPY ${FIN_REPO_API_ROOT}/cli cli

# Client Code
WORKDIR ${FIN_SERVICE_ROOT}
COPY ${FIN_REPO_SERVICE_ROOT}/ucd-lib-client ucd-lib-client
RUN cd ucd-lib-client/client/public && \
  npm install && \
  ln -s node_modules/\@ucd-lib/cork-app-load/lib loader
# RUN npm run client-dist

# Services Cpde
COPY ${FIN_REPO_SERVICE_ROOT}/api api
COPY ${FIN_REPO_SERVICE_ROOT}/cas cas
COPY ${FIN_REPO_SERVICE_ROOT}/essync essync
COPY ${FIN_REPO_SERVICE_ROOT}/gateway gateway
COPY ${FIN_REPO_SERVICE_ROOT}/node-utils node-utils
COPY ${FIN_REPO_SERVICE_ROOT}/trusted-proxy trusted-proxy

# implement gateway config
WORKDIR ${FIN_CONFIG_ROOT}
COPY ${FIN_REPO_SERVICE_ROOT}/gateway-ucd/transforms transforms
COPY ${FIN_REPO_SERVICE_ROOT}/gateway-ucd/core-services.js core-services.js
COPY ${FIN_REPO_SERVICE_ROOT}/gateway-ucd/app-services.js app-services.js

# Leave us in the service root dir
WORKDIR ${FIN_SERVICE_ROOT}

CMD [ "bash", "-c", "tail -f /dev/null"]