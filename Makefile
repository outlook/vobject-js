ENV_VAR = NODE_ENV=test

all: jshint
	$(ENV_VAR) ./node_modules/.bin/mocha --check-leaks test/* test/*/*

jshint:
	$(ENV_VAR) ./node_modules/.bin/jshint index.js lib/* test/*

mocha:
	$(ENV_VAR) ./node_modules/.bin/mocha --check-leaks --watch test/* test/*/*

.PHONY: all
