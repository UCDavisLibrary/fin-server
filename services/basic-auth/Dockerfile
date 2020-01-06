FROM node:12

RUN mkdir service

ADD package.json /service/
ADD package-lock.json /service/
RUN cd /service && npm install --production

ADD index.js /service/
ADD controller.js /service/
ADD model.js /service/
ADD cli.js /service/
ADD lib /service/lib
ADD public /service/public

CMD node service