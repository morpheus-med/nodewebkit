#!/bin/bash -ex

version=v0.10.4
build=node-webkit-$version-linux-x64
filename=$build.tar.gz
cachefile=~/.npm/nodewebkit/$filename

if [ "$(sha1sum $cachefile)" != "841966df76536d053d28bd93ab50896053fedbdf  $cachefile" ]; then
    wget --output-document=$cachefile https://s3-us-west-2.amazonaws.com/morpheus-repository/$filename 
fi

rm -rf nodewebkit
tar xf $cachefile
mv $build nodewebkit
