help:
	@echo "start-production - Starts serving production assets via Express.js."
	@echo "start-dev - Starts webpack-dev-server for local development."
	@echo "start-tests - Runs the test suite."
	@echo "start-tests-upload-coverage - Runs the test suite and posts results."
	@echo "start-tests-watch - Runs the test suite in watch mode."

start-production:
	docker-compose up web

start-dev:
	docker-compose run --rm --service-ports web npm run webpack:dev-server

start-tests:
	docker-compose up --abort-on-container-exit --exit-code-from=test test

start-tests-upload-coverage:
	docker-compose run --rm test npm run test:upload-coverage

start-tests-watch:
	docker-compose run --rm test npm run test:watch