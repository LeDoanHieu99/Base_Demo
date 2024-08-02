mkdir -v -p /home/dev/project/be/volume/app/public/files && \
mkdir -v -p /home/dev/project/be/volume/app/logs && \
docker stop demo_be && \
docker rm demo_be && \
docker rmi demo_be:1.0.0 && \
docker build -t demo_be:1.0.0 . && \
echo docker run --restart unless-stopped --env TZ="Asia/Ho_Chi_Minh" -dp 127.0.0.1:3005:3005 --name demo_be --network demo_net -v /home/dev/demo/be/NAME/volume:/home/demo/volume demo_be:1.0.0