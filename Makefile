help:
	@echo "start-production - Starts serving production assets via Express.js."
	@echo "start-dev - Starts webpack-dev-server for local development."
	@echo "start-tests - Starts the test suite."
	@echo "start-tests-upload-coverage - Starts the test suite and posts results."
	@echo "start-tests-watch - Starts the test suite in watch mode."

start-production:
	docker-compose up

start-dev:
	docker-compose run --rm --service-ports web npm run webpack:dev-server

start-tests:
	docker-compose run --rm web npm run test

start-tests-upload-coverage:
	docker-compose run --rm web npm run test:upload-coverage

start-tests-watch:
	docker-compose run --rm web npm run test:watch
