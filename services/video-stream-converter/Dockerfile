FROM node:10

RUN mkdir /service
ADD package.json /service/
ADD package-lock.json /service/
RUN cd /service && npm install --production

ADD index.js /service/
ADD lib /service/lib

CMD node service