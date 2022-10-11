FROM docker.elastic.co/elasticsearch/elasticsearch:8.4.3

ENV ES_JAVA_OPTS="-Xms512m -Xmx512m"

COPY elasticsearch.yml /usr/share/elasticsearch/config/elasticsearch.yml

ARG UCD_LIB_SERVER_REPO_HASH
ARG UCD_LIB_SERVER_REPO_TAG
ENV UCD_LIB_SERVER_REPO_HASH ${UCD_LIB_SERVER_REPO_HASH}
ENV UCD_LIB_SERVER_REPO_TAG ${UCD_LIB_SERVER_REPO_TAG}