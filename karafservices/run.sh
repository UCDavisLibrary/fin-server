#! /bin/bash

node /proxy &

mkdir -p /data/descriptions
mkdir -p /data/binaries

sleep 15 
/opt/karaf/bin/start
tail -f /opt/karaf/data/log/karaf.log