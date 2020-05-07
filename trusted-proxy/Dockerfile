ARG CORE_SERVER_REPO_TAG
FROM ucdlib/fin-node-utils:${CORE_SERVER_REPO_TAG} as fin-node-utils
FROM node:12

COPY --from=fin-node-utils /fin-node-utils /fin-node-utils
RUN cd /fin-node-utils && npm install -g
ENV NODE_PATH /usr/local/lib/node_modules

RUN mkdir /service
WORKDIR /service

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY index.js .

ARG CORE_SERVER_REPO_HASH
ARG CORE_SERVER_REPO_TAG
ENV CORE_SERVER_REPO_HASH ${CORE_SERVER_REPO_HASH}
ENV CORE_SERVER_REPO_TAG ${CORE_SERVER_REPO_TAG}

CMD node index.js