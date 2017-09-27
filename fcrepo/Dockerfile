FROM jetty:9.4.6

RUN apt-get update
RUN apt-get install -y wget unzip
RUN wget https://github.com/fcrepo4-exts/fcrepo-webapp-plus/releases/download/fcrepo-webapp-plus-4.7.3/fcrepo-webapp-plus-webac-4.7.3.war -O /var/lib/jetty/webapps/fcrepo.war

# HACK for loading spring jars on 'boot'
# crazy docker issue... need to get to the bottom of it.
RUN mkdir -p /var/lib/jetty/lib/ext && \
    unzip /var/lib/jetty/webapps/fcrepo.war -d /tmpfcrepo && \
    cp -r /tmpfcrepo/WEB-INF/lib/spring* /var/lib/jetty/lib/ext/ && \
    cp -r /tmpfcrepo/WEB-INF/lib/modeshape* /var/lib/jetty/lib/ext/ && \
    rm -rf /tmpfcrepo

RUN mkdir -p /fedora-data
RUN chmod -R a+rw /fedora-data

COPY ./jars/jetty-jwt-filter.jar /var/lib/jetty/lib/ext/jetty-jwt-filter.jar
COPY ./jars/java-jwt-3.1.0.jar /var/lib/jetty/lib/ext/java-jwt-3.1.0.jar
COPY ./jars/jackson-annotations-2.8.4.jar /var/lib/jetty/lib/ext/jackson-annotations-2.8.4.jar
COPY ./jars/jackson-core-2.8.8.jar /var/lib/jetty/lib/ext/jackson-core-2.8.8.jar
COPY ./jars/jackson-databind-2.8.8.1.jar /var/lib/jetty/lib/ext/jackson-databind-2.8.8.1.jar
COPY ./jars/commons-codec-1.10.jar /var/lib/jetty/lib/ext/commons-codec-1.10.jar
COPY ./jars/slf4j-simple-1.7.25.jar /var/lib/jetty/lib/ext/slf4j-simple-1.7.25.jar
COPY ./jars/slf4j-api-1.7.25.jar /var/lib/jetty/lib/ext/slf4j-api-1.7.25.jar

COPY ./fcrepo.xml /var/lib/jetty/webapps/fcrepo.xml

ENV JAVA_OPTS="-Dfile.encoding=UTF-8 \
    -Dfcrepo.home=/fedora-data \
    -Dfcrepo.modeshape.configuration=classpath:/config/servlet-auth/repository.json" 

CMD java $JAVA_OPTS  -jar "$JETTY_HOME/start.jar"