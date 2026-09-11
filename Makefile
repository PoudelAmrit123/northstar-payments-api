.PHONY: install dev test lint build docker-up docker-down

install:
	npm ci

dev:
	npm run dev

test:
	npm test

lint:
	npm run lint

build:
	npm run build

docker-up:
	docker compose up --build

docker-down:
	docker compose down
