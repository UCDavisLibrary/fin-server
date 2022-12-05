create schema if not exists label_service;
set search_path=label_service,public;

CREATE TABLE IF NOT EXISTS label_container (
  label_container_id SERIAL PRIMARY KEY,
  uri TEXT NOT NULL,
  sha TEXT NOT NULL,
  UNIQUE(uri)
);

CREATE TABLE IF NOT EXISTS label (
  label_id SERIAL PRIMARY KEY,
  container TEXT REFERENCES label_container(uri) NOT NULL,
  subject TEXT NOT NULL,
  predicate TEXT NOT NULL,
  object TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS label_container_idx ON label (container);
CREATE INDEX IF NOT EXISTS label_subject_idx ON label (subject);