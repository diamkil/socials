current_commit=$(git rev-parse --short HEAD)
current_commit_tag=diamkil/socials:$current_commit
latest_tag=diamkil/socials:latest

docker build . -t $current_commit_tag -t $latest_tag
docker image push $current_commit_tag
docker image push $latest_tag