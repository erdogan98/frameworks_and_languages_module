DOCKER_IMAGE:=server

build:
	docker build --tag ${DOCKER_IMAGE} .

install:
	npm init -y
	npm install express
	npm i -g nodemon
	npm i joi@13.1.0

run:
	nodemon .

test:
	docker run --rm ${DOCKER_IMAGE}
