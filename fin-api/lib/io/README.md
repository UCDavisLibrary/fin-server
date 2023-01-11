# Fin IO Import

## Basic Rules

 - Only ArchivalGroups and the child containers are imported.  The exception is Binary containers no contained in an ArchivalGroup.  This is for simple collections.
 - Import location
   - By default all ArchivalGroups are inserted under `/item` unless `@type` is schema: collection, then the path is `/collection`