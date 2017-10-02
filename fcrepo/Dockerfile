FROM jetty:9.4.7-jre8

MAINTAINER jrmerz@ucdavis.edu

ENV FCREPO_HOME=/var/lib/jetty/fedora-data \
 FCREPO_NAME=fcrepo \
 FCREPO_VERSION=4.7.4 \
 FCREPO_WAR=/var/lib/jetty/webapps/fcrepo.war

RUN wget https://github.com/fcrepo4-exts/fcrepo-webapp-plus/releases/download/fcrepo-webapp-plus-${FCREPO_VERSION}/fcrepo-webapp-plus-webac-${FCREPO_VERSION}.war -O ${FCREPO_WAR}

# HACK for loading spring jars on 'boot'
# crazy docker issue... need to get to the bottom of it.
RUN mkdir -p /var/lib/jetty/lib/ext && \
    cd /var/lib/jetty/lib/ext && \
    unzip -j ${FCREPO_WAR} WEB-INF/lib/spring* WEB-INF/lib/modeshape*

COPY ./jars/* /var/lib/jetty/lib/ext/

COPY ./fcrepo.xml /var/lib/jetty/webapps/fcrepo.xml

# Make your volume
RUN mkdir -p ${FCREPO_HOME} && chmod -R a+rw ${FCREPO_HOME}
VOLUME ["$FCREPO_HOME"]

ENV JAVA_OPTIONS="-Dfile.encoding=UTF-8 \
    -Dfcrepo.home=${FCREPO_HOME} \
    -Dfcrepo.modeshape.configuration=classpath:/config/servlet-auth/repository.json" 

CMD ["java","-jar","/usr/local/jetty/start.jar"]
#CMD java $JAVA_OPTIONS  -jar "$JETTY_HOME/start.jar"