FROM node:8

RUN mkdir service
COPY index.js service/
COPY controller.js service/

RUN cd /service && npm install 
CMD node service