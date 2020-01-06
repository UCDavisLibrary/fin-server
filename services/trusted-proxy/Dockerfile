FROM node:12

RUN mkdir /service

COPY package.json /service/package.json
COPY package-lock.json /service/package-lock.json
RUN cd /service && npm install --production

COPY index.js /service/index.js

CMD node /service