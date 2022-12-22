create schema if not exists finac;
set search_path=finac,public;

CREATE TABLE IF NOT EXISTS "grant" (
  grant_id SERIAL PRIMARY KEY,
  created timestamp NOT NULL DEFAULT NOW(),
  expire timestamp NOT NULL,
  agent TEXT NOT NULL,
  role TEXT NOT NULL,
  UNIQUE(agent, role)
);
CREATE INDEX IF NOT EXISTS grant_expire_idx ON "grant" (expire);
CREATE INDEX IF NOT EXISTS grant_agent_idx ON "grant" (agent);
CREATE INDEX IF NOT EXISTS grant_role_idx ON "grant" (role);

CREATE TABLE IF NOT EXISTS grant_history (
  grant_history_id SERIAL PRIMARY KEY,
  created timestamp NOT NULL DEFAULT NOW(),
  expire timestamp NOT NULL,
  agent TEXT NOT NULL,
  role TEXT NOT NULL
);

CREATE OR REPLACE FUNCTION create_grant_history() 
RETURNS TRIGGER AS $$
    BEGIN
      INSERT INTO finac.grant_history (created, expire, agent, role)
      VALUES (OLD.created, OLD.expire, OLD.agent, OLD.role);
      
      RETURN OLD;
    END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER grant_history
AFTER UPDATE OR DELETE ON "grant"
FOR EACH ROW EXECUTE PROCEDURE create_grant_history();

CREATE OR REPLACE VIEW current_grants AS
SELECT * FROM "grant" WHERE expire > NOW();

CREATE TABLE IF NOT EXISTS access (
  access_id SERIAL PRIMARY KEY,
  created timestamp NOT NULL DEFAULT NOW(),
  expire timestamp NOT NULL,
  path TEXT NOT NULL,
  agent TEXT NOT NULL,
  UNIQUE(path, agent)
);
CREATE INDEX IF NOT EXISTS access_path_idx ON access (path);
CREATE INDEX IF NOT EXISTS access_agent_idx ON access (agent);
CREATE INDEX IF NOT EXISTS access_expire_idx ON access (expire);

CREATE OR REPLACE VIEW current_access AS
SELECT * FROM access WHERE expire > NOW();

CREATE TABLE IF NOT EXISTS access_history (
  access_history_id SERIAL PRIMARY KEY,
  created timestamp NOT NULL DEFAULT NOW(),
  expire timestamp NOT NULL,
  path TEXT NOT NULL,
  agent TEXT NOT NULL
);

CREATE OR REPLACE FUNCTION create_access_history() 
RETURNS TRIGGER AS $$
    BEGIN
      INSERT INTO finac.access_history (created, expire, path, agent)
      VALUES (OLD.created, OLD.expire, OLD.path, OLD.agent);
      
      RETURN OLD;
    END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER access_history
AFTER UPDATE OR DELETE ON access
FOR EACH ROW EXECUTE PROCEDURE create_access_history();