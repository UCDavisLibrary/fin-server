FROM node:8

RUN mkdir service
COPY index.js service/
COPY controller.js service/
COPY model.js service/
COPY cli.js service/
COPY lib service/
COPY package.json service/
COPY package-lock.json service/

RUN cd /service && npm install 
CMD node service