install: install-deps
	npx simple-git-hooks

brain-games:
	node bin/brain-games.js

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci --legacy-peer-deps

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

.PHONY: test