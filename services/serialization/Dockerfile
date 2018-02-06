FROM node:8

RUN mkdir -p /service
COPY ./* /service/
RUN cd /service && npm install 

CMD node service