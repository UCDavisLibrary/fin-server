## Dockerhub images

The Makefile in this directory builds and pushes dockerhub images.  By default,
for every build, the Makefile will tag the image with the current branchname,
and any current git tags.  It will also tag the images with any specific version
information from the image's package.json file and/or version file.

The motivation for this is to allow for docker compose files to use one
consistent version for the fin composition.  For example, to develop on a
particular branch, like `dev`, they can use the `:dev` tag for development.
When a set of images are ready to deploy, we can

## Production deployment

``` bash
git checkout master
# get merge dev, eg.
git tag -a $(date --iso)
#git tag v1.0.1  If you want another  specific tag
git commit
make build push
```

Then on the production server, you can set your version to `$(date --iso)` pull,
and you are ready to go.
