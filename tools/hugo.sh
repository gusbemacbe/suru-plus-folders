#!/bin/bash

PID=`ps -eaf | grep hugo | grep -v grep | awk '{print $2}'`

if [[ "" !=  "$PID" ]]; then
  echo "Killing Hugo"
  killall -9 hugo
fi

hugo server --config 'config_prod.yaml' -l 'layouts' -b localhost -p 1984 --gc

# hugo server --config 'config.yaml' -l 'layouts' -b glocalhost -p 1989 -F --gc
# hugo server --config 'config.yaml' -l 'layouts' -F --gc --renderToDisk