install:
	npm ci
lint:
	npx eslint .
test:
	npm test
test-watch:
	npm test -- --watch
test-coverage:
	npm test -- --coverage
link:
	sudo npm link
unlink:
	sudo npm unlink
uninstall:
	sudo npm uninstall -g gendiff
publish:
	npm publish --dry-run