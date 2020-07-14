ARG CORE_SERVER_REPO_TAG
FROM ucdlib/fin-node-utils:${CORE_SERVER_REPO_TAG} AS fin-node-utils
FROM node:12

RUN apt-get update
RUN apt-get install -y git jq zip unzip
RUN apt-get clean

COPY --from=fin-node-utils /fin-node-utils /fin-node-utils
RUN cd /fin-node-utils && npm link
ENV NODE_PATH /usr/local/lib/node_modules

RUN mkdir app
WORKDIR /app

ADD package.json .
ADD package-lock.json .
RUN npm install --production

COPY controllers controllers
COPY lib lib
COPY models models
COPY assets assets
COPY index.js .

ARG CORE_SERVER_REPO_HASH
ARG CORE_SERVER_REPO_TAG
ENV CORE_SERVER_REPO_HASH ${CORE_SERVER_REPO_HASH}
ENV CORE_SERVER_REPO_TAG ${CORE_SERVER_REPO_TAG}

CMD node index.js