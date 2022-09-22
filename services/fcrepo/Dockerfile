FROM fcrepo/fcrepo:6.0.0-beta-1

RUN mkdir -p /etc/fin
COPY fcrepo.properties /etc/fin/fcrepo.properties
COPY activemq.xml /etc/fin/activemq.xml

ENV CATALINA_OPTS="-Dfcrepo.config.file=/etc/fin/fcrepo.properties"