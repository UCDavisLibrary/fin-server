FROM node:8

RUN mkdir service
ADD index.js /service/
ADD controller.js /service/
ADD model.js /service/
ADD cli.js /service/
ADD lib /service/lib
ADD package.json /service/
ADD package-lock.json /service/

RUN cd /service && npm install 
CMD node service