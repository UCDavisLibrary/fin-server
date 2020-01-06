FROM node:12

RUN mkdir service

COPY package.json service/
COPY package-lock.json service/
RUN cd /service && npm install --production

COPY index.js service/
COPY controller.js service/

CMD node service