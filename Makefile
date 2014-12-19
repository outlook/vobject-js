ENV_VAR = NODE_ENV=test

all: jshint tests vulnerabilities

jshint:
	$(ENV_VAR) ./node_modules/.bin/jshint index.js lib/* test/*

mocha:
	$(ENV_VAR) ./node_modules/.bin/mocha --check-leaks --watch --colors --growl --recursive ./test

tests:
	$(ENV_VAR) ./node_modules/.bin/mocha --check-leaks --recursive ./test

vulnerabilities:
	./node_modules/.bin/nsp audit-package	

.PHONY: all
