FROM node:8.5

RUN apt-get update
RUN apt-get install -y git jq
RUN git clone https://github.com/UCDavisLibrary/fin-cli
RUN cd fin-cli && npm install -g

COPY ./ /app

RUN cd /app && npm install 

CMD cd /app && node index.js