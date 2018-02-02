docker ps -a | awk '{ print $1,$2 }' | grep default:PL | awk '{print $1 }' | xargs -I {} docker stop {} > /dev/null
docker rmi -f default:PL || true
docker build --no-cache -t default:PL .
