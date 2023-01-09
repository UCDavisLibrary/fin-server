FROM node:16


ENV FIN_SERVICE_ROOT=/fin/services
ENV FIN_API_ROOT=/fin/api
ENV FIN_CONFIG_ROOT=/etc/fin
# Build docker build context path should be the root of this repository
ARG FIN_REPO_SERVICE_ROOT=services/fin
ARG FIN_REPO_API_ROOT=fin-api

RUN apt-get update
RUN apt-get install -y git jq zip unzip vim apt-transport-https ca-certificates gnupg
RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | \
  tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | \
  apt-key --keyring /usr/share/keyrings/cloud.google.gpg add - && apt-get update -y && apt-get install google-cloud-cli -y

RUN apt-get clean

RUN mkdir -p $FIN_SERVICE_ROOT
RUN mkdir -p $FIN_API_ROOT
RUN mkdir -p $FIN_CONFIG_ROOT

# Node API package
WORKDIR ${FIN_API_ROOT}
COPY ${FIN_REPO_API_ROOT}/package.json .
COPY ${FIN_REPO_API_ROOT}/package-lock.json .
RUN npm install && npm link
# The npm link doesn't always properly set this :/
RUN ln -s /fin/api/cli/bin/fin.js /usr/local/bin/fin

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

# Services Code
WORKDIR ${FIN_SERVICE_ROOT}
COPY ${FIN_REPO_SERVICE_ROOT}/api api
COPY ${FIN_REPO_SERVICE_ROOT}/essync essync
COPY ${FIN_REPO_SERVICE_ROOT}/gateway gateway
COPY ${FIN_REPO_SERVICE_ROOT}/node-utils node-utils
COPY ${FIN_REPO_SERVICE_ROOT}/trusted-proxy trusted-proxy

# Leave us in the service root dir
WORKDIR ${FIN_SERVICE_ROOT}

CMD [ "bash", "-c", "tail -f /dev/null"]