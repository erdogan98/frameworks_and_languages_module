DOCKER_IMAGE:=client

build:
	docker build --tag ${DOCKER_IMAGE} .

install:
	npm init -y
	npm i -g create-react-app

test:
	docker run --rm ${DOCKER_IMAGE}
