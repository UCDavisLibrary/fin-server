FROM fcrepo/fcrepo:6.3.0

RUN mkdir -p /etc/fin
COPY fcrepo.properties /etc/fin/fcrepo.properties
COPY root-authorization.ttl /etc/fin/root-authorization.ttl

# TODO: this example completely disables authn and authz.
# We just want to display authz.
# COPY server-no-auth.xml $CATALINA_HOME/conf/server.xml

COPY tomcat-users.xml $CATALINA_HOME/conf/tomcat-users.xml
ENV FEDORA_USER_USERNAME=fedoraUser
ENV FEDORA_USER_PASSWORD=fedoraUser

COPY activemq.xml $CATALINA_HOME/webapps/fcrepo/WEB-INF/classes/activemq.xml

ENV CATALINA_OPTS="-Dfcrepo.config.file=/etc/fin/fcrepo.properties"