#! /bin/bash

FCREPO_VERSION=4.7.5

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
CONFIG_FILES_DIR=$DIR/webac-spring-files
JAR_FILES_DIR=$DIR/webac-jars

TMP_DIR=webac-war
TMP_WAR=${TMP_DIR}.war

JARS=( "fcrepo-auth-roles-common-${FCREPO_VERSION}.jar" "fcrepo-mint-${FCREPO_VERSION}.jar" "fcrepo-module-auth-webac-${FCREPO_VERSION}.jar" )
CONFIGS=( "auth-master.xml" "auth-repo.xml" "minter.xml" )

cd DIR
wget https://github.com/fcrepo4-exts/fcrepo-webapp-plus/releases/download/fcrepo-webapp-plus-${FCREPO_VERSION}/fcrepo-webapp-plus-webac-${FCREPO_VERSION}.war -O ${TMP_WAR}
unzip ${TMP_WAR} -d ${TMP_DIR}

rm -rf $CONFIG_FILES_DIR
rm -rf $JAR_FILES_DIR
mkdir $CONFIG_FILES_DIR
mkdir $JAR_FILES_DIR

for jar in "${JARS[@]}"
do
	cp $TMP_DIR/WEB-INF/lib/$jar $JAR_FILES_DIR/
done

for config in "${CONFIGS[@]}"
do
	cp $TMP_DIR/WEB-INF/classes/spring/$config $CONFIG_FILES_DIR/
done

rm -rf ${TMP_DIR}
rm ${TMP_WAR}