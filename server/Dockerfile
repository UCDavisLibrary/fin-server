ARG NODE_UTILS_VERSION
FROM ucdlib/fin-node-utils:${NODE_UTILS_VERSION} as fin-node-utils
FROM node:12

RUN apt-get update
RUN apt-get install -y git jq zip unzip
RUN apt-get clean

COPY --from=fin-node-utils /fin-node-utils /fin-node-utils
RUN cd /fin-node-utils && npm install -g
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

ARG REPO_HASH
ARG REPO_TAG
ENV REPO_HASH ${REPO_HASH}
ENV REPO_TAG ${REPO_TAG}

CMD node index.js