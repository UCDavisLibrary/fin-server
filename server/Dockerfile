FROM node:8.5

RUN apt-get update
RUN apt-get install -y git jq
RUN npm install -g @ucd-lib/fin-cli@0.0.8

COPY ./ /app
RUN echo '{"basePath":"/fcrepo/rest"}' > /root/.fccli

RUN cd /app && npm install 

CMD cd /app && node index.js