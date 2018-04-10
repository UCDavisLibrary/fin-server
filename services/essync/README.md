# ESSYNC

ElasticSearch Sync

## Server

When running as a fin service, the essync message server should be registered as a WebhookService.  The server listens to fcrepo update events, when a new event comes in essync fetches the framed JSON-LD data for the container, runs a transform on the data and finally inserts into ElasticSearch.

## CLI

The `/service/reindex.js` file is available for manually reindexing all collections for a single collection. 

### Reindex All Collections

Reminder.  If you update the ElasticSearch index schema, you MUST reindex ALL collections.  You cannot make updates to an active ElasticSearch schema you have to recreate the entire thing.  The reindexer command for all collections will create a new index then swap out the old index with the new using an alias index name.

```bash
node /service/reindex.js
```

or from docker-compose

```bash
docker-compose exec essync node /service/reindex.js
```

### Reindex Single Collections

```bash
node /service/reindex.js [collection-name]
```

or from docker-compose

```bash
docker-compose exec essync node /service/reindex.js [collection-name]
```

## Record Transform

Essync preforms a series of edits to a record object before inserting into elastic search.  Below is a list of these edits.

  - Strip fin host from attribute ids
    - remove all protocol, host and base path from all ids.  Example 'http://mydams.org/fcrepo/rest/collection/foo/bar' becomes '/collection/foo/bar'
  - Set record thumbnail
    - sets `thumbnailUrl` property which is a base64 encoded 8px png representation of the record image.  The record image is looked up in the following order: `workExample`, record `id` (if `fileFormat` is of type image/*), `associatedMedia`.  The IIIF service is used to generate the png.
  - Set record image resolution
    - sets the `width` and `height` properties if the record has a representative image (see above).  The IIIF service is used to lookup image dimensions.
  - Coverts specified date formatted attributes to year
    - For a given set of attributes that are of type ISO 8601 Date, if the attribute is provided a new attribute is set that is just the year.
  - Set the root record flag
    - If a records `isPartOf` attribute is equal to the `collectionId` attribute, the record is a root record and the `isRootRecord` flag is set.  Root records are the root of a record tree and have special meaning.  Only root records will be visible in search and specified child attributes will be reduced into the root record for searching.