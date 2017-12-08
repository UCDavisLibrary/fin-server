FROM java:8-jdk

ENV JAVA_HOME /usr/lib/jvm/java-8-openjdk-amd64

ENV KARAF_VERSION=4.1.2

RUN wget http://www.gtlib.gatech.edu/pub/apache/karaf/${KARAF_VERSION}/apache-karaf-${KARAF_VERSION}.tar.gz; \
    mkdir /opt/karaf; \
    tar --strip-components=1 -C /opt/karaf -xzf apache-karaf-${KARAF_VERSION}.tar.gz; \
    rm apache-karaf-${KARAF_VERSION}.tar.gz; \
    mkdir /deploy;

COPY ./*.cfg /opt/karaf/etc/

# RUN apt-get update && \
#     apt-get install -y apache2
# RUN a2enmod proxy && a2enmod proxy_http
# COPY ./000-default.conf /etc/apache2/sites-available/

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN mkdir proxy
COPY ./proxy/package* /proxy/
COPY ./proxy/index.js /proxy/
RUN cd /proxy && npm install

# TODO: get logging to work (ie pipe to stdout) 
# RUN chmod 755 /opt; \
    # sed -i "21s/out/stdout/" /opt/karaf/etc/org.ops4j.pax.logging.cfg;

RUN mkdir -p /opt/karaf/data/log && touch /opt/karaf/data/log/karaf.log

COPY ./run.sh /

VOLUME ["/opt/karaf/deploy"]
EXPOSE 1099 8101 44444

CMD /run.sh