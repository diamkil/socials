project=socials
current_commit=$(git rev-parse --short HEAD)
current_commit_tag=diamkil/$project:$current_commit
latest_tag=diamkil/$project:latest

docker build . -t $current_commit_tag -t $latest_tag
docker image push {$current_commit_tag,$latest_tag}