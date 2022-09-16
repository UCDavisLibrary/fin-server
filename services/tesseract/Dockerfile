ARG CORE_SERVER_REPO_TAG
FROM ucdlib/fin-node-utils:${CORE_SERVER_REPO_TAG} as fin-node-utils
FROM tesseractshadow/tesseract4re:latest

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

COPY --from=fin-node-utils /fin-node-utils /fin-node-utils
RUN cd /fin-node-utils && npm link
ENV NODE_PATH /usr/lib/node_modules

RUN mkdir /service
WORKDIR /service

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY index.js .

ARG TESSERACT_SERVICE_REPO_HASH
ARG TESSERACT_SERVICE_REPO_TAG
ENV TESSERACT_SERVICE_REPO_HASH ${TESSERACT_SERVICE_REPO_HASH}
ENV TESSERACT_SERVICE_REPO_TAG ${TESSERACT_SERVICE_REPO_TAG}

CMD node index.js