DOCKER_IMAGE:=server

build:
	docker build --tag ${DOCKER_IMAGE} .
run:
	docker run --rm -it --publish 8000:8000 ${DOCKER_IMAGE}

install_local:
	npm init -y
	npm install express
	npm i -g nodemon
	npm install cors

run_local:
	nodemon .

node_modules:
	npm install


run_shell:
	docker run --rm -it --publish 8000:8000 --entrypoint /bin/sh ${DOCKER_IMAGE}

package.json:
	npm init -y
	npm install express --save

clean:
	rm -rf \
		node_modules \