help: ## Display available commands
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Setup all project dependencies
	npm i

run-%: ## Run a day script, ie make run-01
	node ./$*/index.js

test: ## Run whole tests
	npm run test

test-watch: ## Watch whole tests
	npm run test:watch
