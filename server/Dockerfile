FROM node:8

RUN apt-get update
RUN apt-get install -y git jq
RUN npm install -g @ucd-lib/fin-cli@0.0.8
RUN apt-get clean

RUN mkdir app
ADD cli /app/cli
ADD controllers /app/controllers
ADD lib /app/lib
ADD models /app/models
ADD index.js /app/
ADD package.json /app/
ADD package-lock.json /app/

RUN echo '{"basePath":"/fcrepo/rest","host":"https://localhost:3001","test":true}' > /root/.fccli

RUN cd /app && npm install --production

CMD cd /app && node index.js