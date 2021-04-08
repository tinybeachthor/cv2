all: build deploy

build:
	yarn build
.PHONY: build

deploy:
	rclone --config rclone.conf sync -P build/ remote:$$DEPLOY_URL
.PHONY: deploy
