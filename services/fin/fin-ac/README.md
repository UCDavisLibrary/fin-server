# FinAC

FinAC provides additional access control functionality for container access and discovery leveraging the Fedora LDP's WebAC implementation.

FinAC uses standard WebAC to limit access to the LDP containers and binaries via the `/fcr:acl` endpoint.  However, special `acl:agent` roles allow `Essync` to pull over containers metadata to the Fin discovery layer (Elastic Search API) even if the container is not publicly accessible (`acl:agentClass foaf:agent` has been overridden).

## API

The FinAC provides a service layer (`/svc:finac`) for:

 - POST: convince of modifying the WebAC with FinAC supported agents
 - GET: inspecting the containers current FinAC state
 - DELETE: convince for removing all FinAC agents from the WebAC container
 - PUT: Temporarily promote users to FinAC agent role for a specified path (and only for that specified path)

All endpoints will modify the contains root `ArchivalGroup` container if it exists.  Otherwise the specified path will be used. 

## Elastic Search Roles  

When `Essync` queries the LDP for container metadata, the query uses the defined FinAC agents.  So only public containers, or containers protected with specified FinAC agents will be added to elastic search.  There are two agents the `Essync` will use:

 - `discovery`: this agent will allow `Essync` to access the container.  The Elastic Search document will be given the role of `public`, allowing anyone to discover the container metadata via the Fin API.
 - `protected`: this agent will allow `Essync` to access the container.  The Elastic Search document will be given the role of `protected-[pathname]` where `[pathname]` is the uri path of the container minus `/fcrepo/rest` (Fin standard practice).  Additionally, the `admin` role will be added to the elastic search document.

When a user queries the discovery layer (Fin API), if the user has been temporarily granted `protected` access to a LDP path via `PUT [path]/svc:finac`, the users role list will include `protected-[pathname]` for all protected FinAC grants.  The users role list will still include all roles granted via the JWT token.

## User LDP Roles

When a user queries the LDP, FinAC will grant additional agent roles to user.

 - Any user temporarily promoted to `protected` or `discovery` at a specified path via the `PUT [path]/svc:finac` endpoint will be have the agent assigned to them when making a request to the LDP at the specified path.
 - As a convenience, any user with the `admin` role in their JWT token, will be promoted to `protected` and `discovery` agents, so they can always access FinAC protected containers without the `admin` agent having to be specified as well.

# FinAC Agent/Role Cheat Sheet

Here is a list of agents/roles and how they affect various parts of the Fin deployment:

## admin

- LDP access:
  - users with this role are promoted to `discovery` and `protected` by the gateway
- Essync access:
  - none.  You must assign `discovery` or `protected` to make the container available to `Essync` and therefore the search API.
- API access:
  - no special grants via FinAC.  However, the `admin` role is added to all `protected` elastic search documents.

## protected

- LDP Access:
  - If a user has been temporarily granted access to the specified path via FinAC PUT, the user will be promoted to the `protected` agent.
- Essync access:
  - yes.  This container will be accessible via `Essync` and therefore the search API.
- API access:
  - If a user as been granted `protected` access to the specified path, the user will be able to access to Elastic Search record.  Under the hood, this is accomplished by assigning both the user and the Elastic Search record the role of `protected-[pathname]`. The `admin` role will be added to the document as well.

## discovery

- LDP Access
  - If a user has been temporarily granted access to the specified path via FinAC PUT, the user will be promoted to the `discovery` agent.
- Essync access:
  - yes.  This container will be accessible via `Essync` and therefore the search API.
- API access:
  - yes.  All containers with the `discovery` agent in the LDP will be marked with the `public` role in the Elastic Search record.

## public

- LDP Access
  - This is the default `acl:agentClass foaf:Agent` WebAC agent for `/item` and `/collection` containers. All users can access.
- Essync access
  - yes, it's public
- API access:
  - yes, it's public.  All Elastic Search records will be marked with the `public` role.

## All other WebAC agents

- LDP Access
  - Standard WebAC.  The user must be granted this agent via the JWT token `roles` parameter.
- Essync access
  - no.  unless the container has been assigned the `protected` or `discovery` agent as well.
- API access:
  - no.  unless the container has been assigned the `protected` or `discovery` agent as well.  At which point see above.  However, if the `protected` or `discovery` is attached, then any user with the additional role will be able to access the Elastic Search document without the temporary promotion via the `/svc:finac` API, providing a way for permanent grants.
   - ex: WebAC agents: `protected` and `library`.  Now any user with the `library` role in their JWT Token can always access the container via the LDP as well as the search API.
