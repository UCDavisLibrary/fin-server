#! /usr/bin/make -f
SHELL:=/bin/bash

org:=ucdlib

hash    := $(shell git log -1 --pretty=%h)
branch := $(shell git rev-parse --abbrev-ref HEAD)
tags   := $(shell git tag)

git:=branch tags

service_dirs:=$(foreach d,basic-auth cas essync loris ucd-lib-client,../../services/$d)
$(foreach d,${service_dirs},$(eval ${d}/image:=fin-$(notdir $d)-service))

other_dirs:= ../../fcrepo ../../server \
 ../../services/auto-generator-demo ../../services/trusted-proxy \
 ../../fuseki/jena-fuseki

$(foreach d,${other_dirs},$(eval ${d}/image:=fin-$(notdir $d)))

#dirs:=$(shell find ../.. -name Dockerfile | grep -v old-demos | sed -e 's|/Dockerfile$$||g')
dirs:=${service_dirs} ${other_dirs}

INFO::
	@echo "Build and Push Images"; \
  echo "  push all images: 'make push'";\
	echo "  make one image: 'make dirs=../../server build'";\
	echo "  only tag with current git branch: 'make tag=branch build'";\
	echo "  only tag with current git commit: 'make tag=hash build'";\
	echo "  only tag with current package.json verion: 'make tag=package build'"
#	@echo -e "$(foreach d,${dirs},${d} -> ${${d}/image}\n)"


define docker
images::$2
INFO::
	@echo $1 $2

.PHONY::$2
build::$2
$2:$1/Dockerfile
	@cd $1;\
	docker build -t ${org}/$2:${branch} .; \
#	docker tag ${org}/$2:${branch} ${org}/$2:${hash}; \
	if [[ -n "${tags}" ]]; then \
	  for t in ${tags}; do \
		  docker tag ${org}/$2:${branch} ${org}/$2:$$$$t; \
    done; \
  fi; \
	if [[ -f package.json ]]; then  \
	  docker tag ${org}/$2:${branch} ${org}/$2:`jq -r .version < package.json`; \
	fi; \
	if [[ -f version ]]; then \
	  docker tag ${org}/$2:${branch} ${org}/$2:`cat version`; \
	fi

push::build
	@echo docker push $2

endef

$(foreach d,${dirs},$(eval $(call docker,$d,${$d/image})))

login:
	@docker log -u ${DOCKER_USER} -p ${DOCKER_PASS}
