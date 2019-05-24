SHELL:=/usr/bin/env bash

.PHONY: run_ios
run:
	npm start
                                                                 
.PHONY: help
help:
	@echo 'List all targets available witn "make list"'

.PHONY: list
list:
	@$(MAKE) -pRrq -f $(lastword $(MAKEFILE_LIST)) : 2>/dev/null | awk -v RS= -F: '/^# File/,/^# Finished Make data base/ {if ($$1 !~ "^[#.]") {print $$1}}' | sort | egrep -v -e '^[^[:alnum:]]' -e '^$@$$'
