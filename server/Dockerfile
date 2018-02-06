FROM node:8

RUN apt-get update
RUN apt-get install -y git jq
RUN npm install -g @ucd-lib/fin-cli@0.0.8
RUN apt-get clean

COPY ./ /app
RUN echo '{"basePath":"/fcrepo/rest","host":"https://localhost:3001","test":true}' > /root/.fccli

RUN cd /app && npm install 

CMD cd /app && node index.js