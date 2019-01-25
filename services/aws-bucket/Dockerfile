FROM node:10

COPY index.js /service/index.js
COPY lib /service/lib
COPY package.json /service/package.json
COPY package-lock.json /service/package-lock.json

RUN cd /service && npm install --production

WORKDIR /
CMD node service