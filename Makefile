test: jshint mocha

jshint:
	./node_modules/.bin/jshint index.js lib/* test/*

mocha:
	NODE_ENV=test ./node_modules/.bin/mocha --check-leaks -w test/*

.PHONY: test
