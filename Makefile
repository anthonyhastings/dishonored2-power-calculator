help:
	@echo "start-dev - Starts webpack-dev-server for local development."
	@echo "start-production - Starts serving production assets via Express.js."
	@echo "start-tests - Starts the test suite (primarily used by TravisCI)."

start-dev:
	docker-compose run --rm --service-ports express npm run webpack:dev-server

start-production:
	docker-compose up

start-tests:
	docker-compose run --rm --service-ports express npm test
