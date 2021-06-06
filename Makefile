SHELL:=/bin/bash

help:
	@echo "start-dev - Starts webpack-dev-server for local development."
	@echo "start-production - Starts serving production assets via Express.js."
	@echo "start-lint - Runs linting."
	@echo "start-types-check - Runs type checking."
	@echo "start-tests - Runs the test suite."
	@echo "start-tests-watch - Runs the test suite in watch mode."

start-dev:
	docker-compose run --rm --service-ports dev

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