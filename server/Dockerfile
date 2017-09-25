FROM node:8.5

COPY ./index.js /app/index.js
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

RUN cd /app && npm install 

CMD cd /app && node index.js