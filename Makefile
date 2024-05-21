install: install-deps
	npx simple-git-hooks

run: 
	make install

run: 
	make lint

run: 
	make test

brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-gcd:
	node bin/brain-gcd.js

brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js

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