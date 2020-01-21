ARG NODE_UTILS_VERSION
FROM ucdlib/fin-node-utils:${NODE_UTILS_VERSION} as fin-node-utils
FROM tesseractshadow/tesseract4re

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

COPY --from=fin-node-utils /fin-node-utils /fin-node-utils
RUN cd /fin-node-utils && npm install -g
ENV NODE_PATH /usr/lib/node_modules

RUN mkdir /service
WORKDIR /service

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY index.js .

ARG REPO_HASH
ARG REPO_TAG
ENV REPO_HASH ${REPO_HASH}
ENV REPO_TAG ${REPO_TAG}

CMD node index.js