SHELL:=/bin/bash

help:
	@echo "start-dev - Starts webpack-dev-server for local development."
	@echo "start-express-dev - Starts serving production assets via Express.js & ts-node-dev (hot reloading upon changes)"
	@echo "start-production - Starts serving production assets via Express.js & Node.js."
	@echo "start-lint - Runs linting."
	@echo "start-types-check - Runs type checking."
	@echo "start-tests - Runs the test suite."
	@echo "start-tests-watch - Runs the test suite in watch mode."

start-dev:
	docker-compose run --rm --service-ports dev

start-express-dev:
	docker-compose run --rm --service-ports yarn express:dev-server

start-production:
	docker-compose up web

start-lint:
	docker-compose run --rm dev yarn run lint

start-types-check:
	docker-compose run --rm dev yarn run types:check

start-tests:
	docker-compose run --rm dev yarn test

start-tests-watch:
	docker-compose run --rm dev yarn test --watchAll