# FinAC

FinAC provides additional access control functionality for container access and discovery leveraging to the Fedora LDP's WebAC implementation.

FinAC uses standard WebAC to limit access to the LDP containers and binaries via the `/fcr:acl` endpoint.  However, special `acl:agent` roles inform `essync` to pull over containers metadata to the fin discovery layer (elastic search api) even if the container is not publicly accessible (`acl:agentClass foaf:agent`).

## API

The FinAC provides a service layer (`/svc:finac`) for:

 - POST: convince of modifing the WebAC with FinAC supported agents
 - GET: inspecting the current FinAC state
 - DELETE: convince for removing the FinAC agents from the WebAC container
 - PUT: Temporarly promte users to FinAC agent role for a specified path (and only for that specified path)

## Elastic Search Roles  

When `essync` queries the LDP for container metadata, the query uses the defined FinAC roles.  So only public containers, or containers protected with specified FinAC agents will be added to elastic search.  There are two roles the `essync` will use:

 - `discovery`: this agent will allow `essync` to access the container.  The Elastic Search document will be given the role of `public`, allowing anyone to discover the container metadata via the fin api.
 - `protected`: this agent will allow `essync` to access to container.  The Elastic Search document will be given the role of `protected-[pathname]` where `[pathname]` is the uri path of the container minue `/fcrepo/rest` (fin standard practice).

When a user queries the dicovery layer, if the user has been temporily granted `protected` access to a LDP path via `PUT [path]/svc:finac`, the users role list will include `protected-[pathname]` for all additional protected FinAC grants.  The users role list will still include all roles granted via the JWT token.

## User LDP Roles

When a user queries the LDP, FinAC will grant additional agent roles to user.

 - Any user temporily promoted to `protected` or `discovery` at a specified path via the `PUT [path]/svc:finac` endpoint will be have the agent assigned to them when making a request to the LDP at the specified path.
 - As a convience, any user with the `admin` role in their JWT token, will be promoted to `protected` and `discovery` agents, so they can always access FinAC protected containers.

# FinAC Role Cheat Sheet

Here is a list of roles and how they affect various parts of the fin deployment:

## admin

- LDP access:
  - users with this role promoted to `discovery` and `protected` by the gateway
- essync access:
  - none.  You must assign `discovery` or `protected` to make the container available to `essync` and therefore the search api.
- api access:
  - no special grants via FinAC.

## protected

- LDP Access:
  - If a user has been granted `protected` access to the specified path, the user will be promoted to the `protected` role.
- essync access:
  - yes.  This container will be accessible via `essync` and therefor the search api.
- api access:
  - If a user as been granted `protected` access to the specified path, the user will be able to access to Elastic Search record.  Under the hood, this is accomplished by assigning both the user and the elastic search record the role of `protected-[pathname]`.

## discovery

- LDP Access
  - If a user has been granted `discovery` access to the specified path, the user will be promoted to the `discovery` role.
- essync access:
  - yes.  This container will be accessible via `essync` and therefor the search api.
- api access:
  - yes.  All containers with the `discovery` agent in the LDP will be marked with the `public` role in the Elastic Search record.

## public

- LDP Access
  - This is the default `acl:agentClass foaf:Agent` WebAC agent for `/item` and `/collection` containers. All users can access.
- essync access
  - yes, it's public
- api access:
  - yes, it's public.  All Elastic Search records will be marked with the `public` role.