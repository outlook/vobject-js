test: jshint mocha

mocha:
	NODE_ENV=test ./node_modules/.bin/mocha --check-leaks -w test/*

jshint:
	./node_modules/.bin/jshint index.js lib/* test/*

.PHONY: test
