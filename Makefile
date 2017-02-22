install:
	npm install

start:
	npm run babel-node -- src/bin/brain-balance.js

publish:
	npm publish

build:
	npm run clean && npm run build

lint:
	npm run eslint -- src