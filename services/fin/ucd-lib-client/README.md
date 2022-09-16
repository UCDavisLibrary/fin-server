
# Client Development

## Init client

First install the server and client dependencies
```
npm install
cd public/client; npm install
```

Then you will need to link the node-utils module.

In the fin-ucd-lib-server/node-utils folder run:

```
npm link
```

Then in the fin-ucd-lib-server/services/ucd-lib-client/client/public folder run
```
npm link @ucd-lib/fin-ucd-lib-node-utils
```

This will create a symbolic link from the node-utils to your client node_modules
allowing the client code access to shared .js files.

## Realtime builds

To run webpack each time a file changes, simply run

```bash
npm run watch
```

This will generate the `./client/public/js/bundle.js` file

## Dist build

To generate a dist release, first uptick the `./client/public/package.json` version.  This
will ensure the cache control is broken for the new files.

Then build the new `./client/dist` directory by running:

```bash
npm run dist
```

## Update the loader

Webcomponent polyfills, babel polyfills (for IE) and script
loading are handled by the `@ucd-lib/cork-app-load` package.  This 
package handles stable versions of these polyfills so you don't
have to worry about them. If there is a update available to this package
you need to do the following:

```bash
cd ./public/client
yarn add @ucd-lib/cork-app-load@[new version here]
rm -rf loader
cp -r node_modules/\@ucd-lib/cork-app-load/lib loader
```

This will pull the new version from NPM and update the source.