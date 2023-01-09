create schema if not exists essync;
set search_path=essync,public;

DO $$ BEGIN
  CREATE TYPE fcrepo_update_type as enum ('Create', 'Update', 'Delete', 'Follow', 'Purge', 'Reindex');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS update_log (
  update_log_id SERIAL PRIMARY KEY,
  updated timestamp NOT NULL DEFAULT NOW(),
  path TEXT NOT NULL UNIQUE,
  update_types fcrepo_update_type[] NOT NULL,
  container_types text[] NOT NULL,
  event_id TEXT NOT NULL UNIQUE,
  event_timestamp timestamp NOT NULL
);
CREATE INDEX IF NOT EXISTS update_log_path_idx ON update_log (path);
CREATE INDEX IF NOT EXISTS update_log_updated_idx ON update_log (updated);

CREATE TABLE IF NOT EXISTS update_status (
  update_log_id SERIAL PRIMARY KEY,
  updated timestamp NOT NULL DEFAULT NOW(),
  path TEXT NOT NULL UNIQUE,
  update_types fcrepo_update_type[] NOT NULL,
  container_types text[] NOT NULL,
  event_id TEXT NOT NULL,
  event_timestamp timestamp NOT NULL,
  action TEXT NOT NULL,
  transform_service TEXT,
  model TEXT,
  message TEXT,
  es_response JSONB,
  gitsource JSONB
);
CREATE INDEX IF NOT EXISTS update_status_path_idx ON update_status (path);
CREATE INDEX IF NOT EXISTS update_status_action_idx ON update_status (action);