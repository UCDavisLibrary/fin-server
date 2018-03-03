# FCREPO Configuration

Following the advice from Fedora [Configuration Best
Practices](https://wiki.duraspace.org/display/FEDORA4x/Best+Practices+-+Fedora+Configuration),
we've moved some files to an external location.  This allows an easier
modification for users.  This is exposed as /etc/fcrepo/* configuration files.

The default repository.json file is the same as found in
`classpath:/config/serlet-auth/repository.json` with a modification to include
extra RDF prefixes that are defined in `namespaces.cnd`

I've also included the other files suggested but the Best Practices, with the
exception of the config.xml file for the spring framework, which is
unintelligible for me.
