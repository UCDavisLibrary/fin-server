FROM node:8

RUN apt-get update
RUN apt-get install -y git jq zip unzip
RUN npm install -g @ucd-lib/fin-cli@0.4.9
RUN apt-get clean

RUN mkdir app

ADD package.json /app/
ADD package-lock.json /app/
RUN cd /app && npm install --production

ADD cli /app/cli
ADD controllers /app/controllers
ADD lib /app/lib
ADD models /app/models
ADD assets /app/assets
ADD index.js /app/
ADD gitinfo.json /app/

COPY default-frames /etc/fin/frames

RUN echo '{"basePath":"/fcrepo/rest","host":"https://localhost:3001","test":true}' > /root/.fccli

CMD cd /app && node index.js