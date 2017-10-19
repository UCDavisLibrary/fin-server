FROM node:8.5

RUN mkdir /service
COPY ./* /service/
RUN cd /service && npm install 

CMD node service