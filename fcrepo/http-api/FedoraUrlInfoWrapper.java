package org.fcrepo.http.api;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.PathSegment;
import javax.ws.rs.core.UriBuilder;
import javax.ws.rs.core.UriInfo;

public class FedoraUrlInfoWrapper implements UriInfo {
	
	private UriInfo uriInfo;
	private HttpHeaders headers;
	private static String ORIGIN = "origin";
	
	FedoraUrlInfoWrapper(UriInfo uriInfo, HttpHeaders headers) {
		this.uriInfo = uriInfo;
		this.headers = headers;
	}
	
	private String getOriginHeader() {
		List<String> origins = headers.getRequestHeader(ORIGIN);
		if( origins == null ) return null;
		if( origins.size() == 0 ) return null;
		return origins.get(0);
	}
	
	private URI getOriginUri() {
		String origin = getOriginHeader();
		if( origin == null ) return null;
		try {
			return new URI(origin);
		} catch (URISyntaxException e) {
			return null;
		}	
	}
	
	private URI wrapUri(URI uri) {
		if( uri == null ) return uri;
		URI originUri = getOriginUri();
		if( originUri == null ) return uri;
		
		try {
			return new URI(originUri.getScheme(), uri.getUserInfo(), originUri.getHost(),
					originUri.getPort(), uri.getPath(), uri.getQuery(), uri.getFragment());
		} catch (URISyntaxException e) {
			e.printStackTrace();
			return uri;
		}
	}
	
	private UriBuilder wrapUriBuilder(UriBuilder builder) {
		if( builder == null ) return builder;
		URI originUri = getOriginUri();
		if( originUri == null ) return builder;
		
		return builder.scheme(originUri.getScheme()).host(originUri.getHost()).port(originUri.getPort());
	}

	@Override
	public String getPath() {
		return uriInfo.getPath();
	}

	@Override
	public String getPath(boolean decode) {
		return uriInfo.getPath(decode);
	}

	@Override
	public List<PathSegment> getPathSegments() {
		return uriInfo.getPathSegments();
	}

	@Override
	public List<PathSegment> getPathSegments(boolean decode) {
		return uriInfo.getPathSegments();
	}

	@Override
	public URI getRequestUri() {
		return wrapUri(uriInfo.getRequestUri());
	}

	@Override
	public UriBuilder getRequestUriBuilder() {
		return wrapUriBuilder(uriInfo.getRequestUriBuilder());
	}

	@Override
	public URI getAbsolutePath() {
		return wrapUri(uriInfo.getAbsolutePath());
	}

	@Override
	public UriBuilder getAbsolutePathBuilder() {
		return wrapUriBuilder(uriInfo.getAbsolutePathBuilder());
	}

	@Override
	public URI getBaseUri() {
		return wrapUri(uriInfo.getBaseUri());
	}

	@Override
	public UriBuilder getBaseUriBuilder() {
		return wrapUriBuilder(uriInfo.getBaseUriBuilder());
	}

	@Override
	public MultivaluedMap<String, String> getPathParameters() {
		return uriInfo.getPathParameters();
	}

	@Override
	public MultivaluedMap<String, String> getPathParameters(boolean decode) {
		return uriInfo.getPathParameters(decode);
	}

	@Override
	public MultivaluedMap<String, String> getQueryParameters() {
		return uriInfo.getQueryParameters();
	}

	@Override
	public MultivaluedMap<String, String> getQueryParameters(boolean decode) {
		return uriInfo.getQueryParameters(decode);
	}

	@Override
	public List<String> getMatchedURIs() {
		return uriInfo.getMatchedURIs();
	}

	@Override
	public List<String> getMatchedURIs(boolean decode) {
		return uriInfo.getMatchedURIs(decode);
	}

	@Override
	public List<Object> getMatchedResources() {
		return uriInfo.getMatchedResources();
	}

	@Override
	public URI resolve(URI uri) {
		return wrapUri(uriInfo.resolve(uri));
	}

	@Override
	public URI relativize(URI uri) {
		return wrapUri(uriInfo.relativize(uri));
	}

}
