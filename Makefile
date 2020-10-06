SHELL:=/bin/bash

help:
	@echo "start-dev - Starts webpack-dev-server for local development."
	@echo "start-production - Starts serving production assets via Express.js."
	@echo "start-tests - Runs the test suite."
	@echo "start-tests-upload-coverage - Runs the test suite and posts results."
	@echo "start-tests-watch - Runs the test suite in watch mode."

start-dev:
	docker-compose run --rm --service-ports web yarn run webpack:dev-server

start-production:
	docker-compose up web

start-tests:
	docker-compose run --rm web yarn test

start-tests-upload-coverage:
	$(eval ci_env=$(shell bash <(curl -s https://codecov.io/env)))
	docker-compose run ${ci_env} --rm web ./scripts/upload_coverage.sh

start-tests-watch:
	docker-compose run --rm web yarn test --watchAll