DOCKER_IMAGE:=client

build:
	docker build -t ${DOCKER_IMAGE}:dev .

run:
	docker run  -it  --rm -v ${PWD}:/app  -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true ${DOCKER_IMAGE}:dev

test:
	docker run --rm ${DOCKER_IMAGE}
