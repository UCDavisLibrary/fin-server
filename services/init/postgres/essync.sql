create schema if not exists essync;
set search_path=essync,public;

CREATE TYPE fcrepo_update_type as enum ('Create', 'Update', 'Delete', 'Follow', 'Purge');

CREATE TABLE IF NOT EXISTS update_log (
  update_log_id SERIAL PRIMARY KEY,
  date timestamp NOT NULL DEFAULT NOW(),
  path TEXT NOT NULL UNIQUE,
  update_type fcrepo_update_type NOT NULL,
  container_types text[] NOT NULL
);
CREATE INDEX IF NOT EXISTS update_log_path_idx ON update_log (path);
CREATE INDEX IF NOT EXISTS update_log_date_idx ON update_log (date);

CREATE TABLE IF NOT EXISTS update_status (
  update_log_id SERIAL PRIMARY KEY,
  timestamp timestamp NOT NULL,
  path TEXT NOT NULL UNIQUE,
  update_type fcrepo_update_type NOT NULL,
  container_types text[] NOT NULL,
  action TEXT NOT NULL,
  message TEXT
);
CREATE INDEX IF NOT EXISTS update_status_path_idx ON update_status (path);
CREATE INDEX IF NOT EXISTS update_status_action_idx ON update_status (action);