FROM docker.elastic.co/elasticsearch/elasticsearch:5.4.1

ENV bootstrap.memory_lock=true
ENV ES_JAVA_OPTS="-Xms512m -Xmx512m"

COPY elasticsearch.yml /usr/share/elasticsearch/config/elasticsearch.yml

ARG REPO_HASH
ARG REPO_TAG
ENV REPO_HASH ${REPO_HASH}
ENV REPO_TAG ${REPO_TAG}