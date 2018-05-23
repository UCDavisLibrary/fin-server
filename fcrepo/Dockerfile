FROM jetty:9.4.6

ENV FCREPO_HOME=/var/lib/jetty/fedora-data \
    FCREPO_NAME=fcrepo \
    FCREPO_VERSION=4.7.5 \
    FCREPO_WAR=/var/lib/jetty/webapps/fcrepo.war \
		FCREPO_ETC=/etc/fcrepo

ENV	FCREPO_MODESHAPE_CONFIGURATION=file://${FCREPO_ETC}/repository.json
ENV	FCREPO_AUTH_WEBAC_AUTHORIZATION=file://${FCREPO_ETC}/root-authorization.ttl
ENV FCREPO_ACTIVEMQ_CONFIGURATION=file://${FCREPO_ETC}/activemq.xml

RUN apt-get update
RUN apt-get install -y wget unzip

# Pre-made webac that currently doesn't work with jetty
# RUN wget https://github.com/fcrepo4-exts/fcrepo-webapp-plus/releases/download/fcrepo-webapp-plus-4.7.3/fcrepo-webapp-plus-webac-4.7.3.war -O /var/lib/jetty/webapps/fcrepo.war

# Workaround for broken pre-made war above.
# going to add files ourselves to base Fedora war
RUN wget https://github.com/fcrepo4/fcrepo4/releases/download/fcrepo-${FCREPO_VERSION}/fcrepo-webapp-${FCREPO_VERSION}.war -O ${FCREPO_WAR}

RUN cd /var/lib/jetty/webapps && \
    unzip ${FCREPO_NAME}.war -d ${FCREPO_NAME} && \
    rm ${FCREPO_NAME}.war

COPY ./webac-jars/* /var/lib/jetty/webapps/${FCREPO_NAME}/WEB-INF/lib/
COPY ./http-api/fcrepo-http-api-${FCREPO_VERSION}.jar /var/lib/jetty/webapps/${FCREPO_NAME}/WEB-INF/lib/
RUN chmod -R a+r /var/lib/jetty/webapps/${FCREPO_NAME}/WEB-INF/lib/
COPY ./webac-spring-files/* /var/lib/jetty/webapps/${FCREPO_NAME}/WEB-INF/classes/spring/
RUN chmod -R a+r /var/lib/jetty/webapps/${FCREPO_NAME}/WEB-INF/classes/spring/
COPY ./fin-config/web.xml /var/lib/jetty/webapps/${FCREPO_NAME}/WEB-INF/
COPY ./fin-config/activemq.xml /var/lib/jetty/webapps/${FCREPO_NAME}/WEB-INF/classes/config/
# end workaround

# Add files for jetty / cas / jwt authentication
COPY ./jetty-auth-jars/* /var/lib/jetty/lib/ext/
COPY ./fin-config/fcrepo.xml /var/lib/jetty/webapps/fcrepo.xml

# Create an external configuration setup
RUN mkdir -p ${FCREPO_ETC}
COPY ./etc/fcrepo/* ${FCREPO_ETC}/

RUN mkdir -p ${FCREPO_HOME} && chmod -R a+rw ${FCREPO_HOME}
VOLUME ["$FCREPO_HOME"]

ENV JAVA_OPTS="-Dfile.encoding=UTF-8 \
    -Dfcrepo.home=${FCREPO_HOME} \
    -Dfcrepo.modeshape.configuration=${FCREPO_MODESHAPE_CONFIGURATION}" \
    -Dfcrepo.auth.webac.authorization=${FCREPO_AUTH_WEBAC_AUTHORIZATION}" \
    -Dfcrepo.activemq.configuration=${FCREPO_ACTIVEMQ_CONFIGURATION}"

CMD java $JAVA_OPTS -jar "$JETTY_HOME/start.jar"
