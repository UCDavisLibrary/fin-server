ARG FIN_SERVER_IMAGE
FROM ${FIN_SERVER_IMAGE} as fin-server
FROM tesseractshadow/tesseract4re:latest

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

COPY --from=fin-server /fin/services /fin-service-utils
RUN cd /fin-service-utils && npm link

RUN mkdir /service
WORKDIR /service

COPY package.json .
COPY package-lock.json .
RUN npm install --production
RUN npm link @ucd-lib/fin-service-utils

COPY index.js .

ARG FIN_SERVER_REPO_HASH
ARG FIN_SERVER_REPO_TAG
ENV FIN_SERVER_REPO_HASH ${FIN_SERVER_REPO_HASH}
ENV FIN_SERVER_REPO_TAG ${FIN_SERVER_REPO_TAG}

CMD node index.js