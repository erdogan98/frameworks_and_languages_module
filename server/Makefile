DOCKER_IMAGE:=server

build:
	docker build --tag ${DOCKER_IMAGE} .

install:
	npm init -y
	npm install express
	npm i -g nodemon

run:
	nodemon .

test:
	docker run --rm ${DOCKER_IMAGE}
