ENV_VAR = NODE_ENV=test

all: jshint
	$(ENV_VAR) ./node_modules/.bin/mocha --check-leaks --recursive ./test

jshint:
	$(ENV_VAR) ./node_modules/.bin/jshint index.js lib/* test/*

mocha:
	$(ENV_VAR) ./node_modules/.bin/mocha --check-leaks --watch --colors --growl --recursive ./test

.PHONY: all
