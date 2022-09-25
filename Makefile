SHELL:=/bin/bash

help:
	@echo "start-client-dev - Starts vite dev server for local development."
	@echo "start-server-dev - Starts serving production assets via Express.js & ts-node / nodemon (hot reloading upon changes)"
	@echo "start-server - Starts serving production assets via Express.js & Node.js."
	@echo "start-lint - Runs linting."
	@echo "start-types-check - Runs type checking."
	@echo "start-tests - Runs the test suite."
	@echo "start-tests-watch - Runs the test suite in watch mode."

start-client-dev:
	docker-compose run --rm --service-ports dev

start-server-dev:
	docker-compose run --rm --service-ports dev yarn run server:dev

start-server:
	docker-compose up web

start-lint:
	docker-compose run --rm dev yarn run lint

start-types-check:
	docker-compose run --rm dev yarn run types:check

start-tests:
	docker-compose run --rm dev yarn test

start-tests-watch:
	docker-compose run --rm dev yarn test --watchAll