SHELL := /bin/bash

build:
	@bake src/pres.js --output resources/js/
	@cp -r images output/
	@boxit
	@node upload.js

test:
	@mocha --reporter spec

.PHONY: test