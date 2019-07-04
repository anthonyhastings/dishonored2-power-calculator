help:
	@echo "start-dev - Starts webpack-dev-server for local development."
	@echo "start-production - Starts serving production assets via Express.js."
	@echo "start-tests - Runs the test suite."
	@echo "start-tests-upload-coverage - Runs the test suite and posts results."
	@echo "start-tests-watch - Runs the test suite in watch mode."

start-dev:
	docker-compose run --rm --service-ports web npm run webpack:dev-server

start-production:
	docker-compose up web

start-tests:
	docker-compose run --rm web npm test

start-tests-upload-coverage:
	docker-compose run --rm web npm run test:upload-coverage

start-tests-watch:
	docker-compose run --rm web npm test -- --watchAll