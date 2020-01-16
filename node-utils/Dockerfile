FROM node:12

RUN mkdir /fin-node-utils
WORKDIR /fin-node-utils

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY lib lib
COPY config.js .
COPY index.js .