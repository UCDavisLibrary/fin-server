FROM node:8

COPY index.js /service/index.js
COPY package.json /service/package.json
COPY package-lock.json /service/package-lock.json

RUN cd /service && npm install --production

CMD node /service