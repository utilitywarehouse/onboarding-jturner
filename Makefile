REGISTRY=registry.uw.systems
NAMESPACE=onboarding
APP_NAME=jturner-onboarding

install:
	npm install

run:
	npm start

build:
	npm run build

test:
	npm run test

docker_login:
	docker login -u $(NAMESPACE) -p $(UW_DOCKER_PASS) $(REGISTRY)

docker_build:
	docker build -t $(REGISTRY)/$(NAMESPACE)/$(APP_NAME):$(CIRCLE_SHA1) .
	docker tag $(REGISTRY)/$(NAMESPACE)/$(APP_NAME):$(CIRCLE_SHA1) $(REGISTRY)/$(NAMESPACE)/$(APP_NAME):latest

docker_push:
	docker push $(REGISTRY)/$(NAMESPACE)/$(APP_NAME)