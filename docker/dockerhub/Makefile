#! /usr/bin/make -f
SHELL:=/bin/bash

org:=ucdlib

hash    := $(shell git log -1 --pretty=%h)
branch := $(shell git rev-parse --abbrev-ref HEAD)
tags   := $(shell git tag --contains)

tag:=branch tags package

service_dirs:=$(foreach d,basic-auth cas essync loris ucd-lib-client,../../services/$d)
$(foreach d,${service_dirs},$(eval ${d}/image:=fin-$(notdir $d)-service))

# Snowflake for the client service
../../services/ucd-lib-client/image:=fin-ucd-lib-client

other_dirs:= ../../fcrepo ../../server \
 ../../services/auto-generator-demo ../../services/trusted-proxy

$(foreach d,${other_dirs},$(eval ${d}/image:=fin-$(notdir $d)))

extra_dirs:=
#extra_dirs:=../../fuseki/jena-fuseki
$(foreach d,${extra_dirs},$(eval ${d}/image:=fin-$(notdir $d)))


#dirs:=$(shell find ../.. -name Dockerfile | grep -v old-demos | sed -e 's|/Dockerfile$$||g')
dirs:=${service_dirs} ${other_dirs} ${extra_dirs}

INFO::
	@echo "Build and Push Images"; \
  echo "  build all images: 'make build'";\
  echo "  build and push all images: 'make build push'";\
  echo "  just push all images: 'make push'";\
	echo "  make one image: 'make dirs=../../server build'"; \
	echo "  alternatively make one image: 'make fin-auto-generator-demo'"; \
	echo "  include tag with current package.json version: 'make package-version=1 build'"
#	echo "  include tag with current git branch: 'make tag=branch build'";\
#	echo "  only tag with current git commit: 'make tag=hash build'";\


ifdef package-version
define package-version-tag
	if [[ -f package.json ]]; then  \
	  docker tag ${org}/$2:${branch} ${org}/$2:`jq -r .version < package.json`; \
	fi; \
	if [[ -f version ]]; then \
	  docker tag ${org}/$2:${branch} ${org}/$2:`cat version`; \
	fi
endef
else
define package-version-tag
	echo "No tags from package.json";
endef
endif

define docker
images::$2
INFO::
	@echo $2: $1

#	docker tag ${org}/$2:${branch} ${org}/$2:${hash};

.PHONY::$2
build::$2
$2:$1/Dockerfile
	@cd $1;\
	docker build -t ${org}/$2:${branch} .; \
	if [[ -n "${tags}" ]]; then \
	  for t in ${tags}; do \
		  docker tag ${org}/$2:${branch} ${org}/$2:$$$$t; \
    done; \
  fi;\
	$(call package-version-tag,$1,$2)

push::
	docker push ${org}/$2

endef

$(foreach d,${dirs},$(eval $(call docker,$d,${$d/image})))

login:
	@docker log -u ${DOCKER_USER} -p ${DOCKER_PASS}
