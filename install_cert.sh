#!/usr/bin/env bash

if ! command -v mkcert > /dev/null 2>&1; then
    echo "\`mkcert\` not found. Nothing to do."
    exit 0
fi

mkcert -install \
    -cert-file cert.pem \
    -key-file key.pem \
    localhost
cat cert.pem key.pem > node_modules/webpack-dev-server/ssl/server.pem
rm cert.pem key.pem