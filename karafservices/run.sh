#! /bin/bash

node /proxy &
sleep 15 
/opt/karaf/bin/start
tail -f /opt/karaf/data/log/karaf.log