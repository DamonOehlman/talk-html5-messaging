SHELL := /bin/bash

build:
	@bake src/pres.js --output resources/js/
	@cp -r images output/
	@/development/projects/DamonOehlman/boxit/bin/boxit
	@node upload.js

test:
	@mocha --reporter spec

.PHONY: test