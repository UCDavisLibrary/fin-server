FROM tesseractshadow/tesseract4re

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

COPY index.js /service/index.js
COPY package.json /service/package.json
COPY package-lock.json /service/package-lock.json

RUN cd /service && npm install --production

WORKDIR /
CMD node service