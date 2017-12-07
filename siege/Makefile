#! /usr/bin/make -f

host:=https://rc.library.ucdavis.edu
#host:=http://localhost:8000
search:=$(host)/?search_option=3&s

time:=5
siege_opts:=-v --delay=0.5 --concurrent=3 --internet --time=${time}M --no-parser
siege:=/usr/local/bin/siege $(siege_opts)
#siege:=docker run qjhart/siege $(siege_opts)

tags.urls.out: tags.urls
	$(siege) --file=$< 2> $@

tags.urls: tags.txt
	echo 'S=$(search)' > $@
	cat $< | sed -e 's/^/\$$(S)=/' >> $@
