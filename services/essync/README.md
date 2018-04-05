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