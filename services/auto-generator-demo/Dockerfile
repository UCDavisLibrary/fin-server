FROM node:8

ADD index.js /service/index.js
ADD package-lock.json /service/package-lock.json
ADD package.json /service/package.json

RUN cd /service && npm install --production

CMD node service