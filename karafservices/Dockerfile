FROM java:8-jdk

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64

ENV KARAF_VERSION=4.1.2

RUN wget http://www.gtlib.gatech.edu/pub/apache/karaf/${KARAF_VERSION}/apache-karaf-${KARAF_VERSION}.tar.gz; \
    mkdir /opt/karaf; \
    tar --strip-components=1 -C /opt/karaf -xzf apache-karaf-${KARAF_VERSION}.tar.gz; \
    rm apache-karaf-${KARAF_VERSION}.tar.gz; \
    mkdir /deploy;

COPY ./*.cfg /opt/karaf/etc/

# TODO: get logging to work (ie pipe to stdout) 
# RUN chmod 755 /opt; \
    # sed -i "21s/out/stdout/" /opt/karaf/etc/org.ops4j.pax.logging.cfg;

RUN mkdir -p /opt/karaf/data/log && touch /opt/karaf/data/log/karaf.log

VOLUME ["/opt/karaf/deploy"]
EXPOSE 1099 8101 44444

CMD sleep 15 && /opt/karaf/bin/start && tail -f /opt/karaf/data/log/karaf.log