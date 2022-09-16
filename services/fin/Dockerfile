FROM node:16

RUN apt-get update
RUN apt-get install -y git jq zip unzip vim
RUN apt-get clean

RUN mkdir /fin
RUN mkdir -p /etc/fin
WORKDIR /fin

COPY package.json .
COPY package-lock.json .
RUN npm install --production
RUN npm link
RUN npm link @ucd-lib/fin-node-utils

# Client
COPY ucd-lib-client ucd-lib-client
RUN cd ucd-lib-client/client/public && npm install
RUN cd ucd-lib-client/client/public && ln -s node_modules/\@ucd-lib/cork-app-load/lib loader
RUN npm run dist

# Services
COPY api api
COPY cas cas
COPY essync essync
COPY gateway gateway
COPY node-utils node-utils
COPY trusted-proxy trusted-proxy

# implement gateway config
COPY gateway-ucd/transforms /etc/fin/transforms
COPY gateway-ucd/core-services.js /etc/fin/core-services.js
COPY gateway-ucd/app-services.js /etc/fin/app-services.js

CMD [ "bash", "-c", "tail -f /dev/null"]