#!/usr/bin/env bash
set -o nounset
set -o errexit

apt-get install -y curl

sudo sh -c 'curl -sL https://deb.nodesource.com/setup | bash -'
apt-get install -y nodejs git rsync ssh-client

cd /rise-realtime/server
npm install && npm install -g bower && bower install --allow-root --config.interactive=false

kill $(pidof node) || true
sleep 1 && SERVER_NAME=$1 && node /rise-realtime/server/server.js &
