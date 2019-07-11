FROM node:10

COPY package.json /service/package.json
COPY package-lock.json /service/package-lock.json
RUN cd /service && npm install --production

COPY index.js /service/index.js
COPY lib /service/lib

WORKDIR /
CMD node service