docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -dp 127.0.0.1:3306:3306 -v D:/ProgramFiles/mysql:/var/lib/mysql --restart unless-stopped --network demo_net mysql:8


docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -dp 127.0.0.1:3306:3306 -v /home/dev/demo/mysql:/var/lib/mysql --restart unless-stopped --network demo_net mysql:8


docker run --name mysql -e MYSQL_ROOT_PASSWORD=g8GyY*%sX5%K@6 -dp 127.0.0.1:3309:3306 -v /home/dev/project/db/mysql:/var/lib/mysql --restart unless-stopped --network demo_net mysql:8