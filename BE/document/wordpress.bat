docker run --name wordpress -p 103.28.173.9:8080:80 --network chuyendoiso_net -d wordpress

sudo docker run --name wp --volume /home/vncadmin/chuyendoiso/wordpress:/var/www/html -p 103.28.173.9:8080:80 --network chuyendoiso_net -d wordpress


sudo docker run --name wptest -p 103.28.173.9:8088:80 --network chuyendoiso_net -d wordpress

update wp_options 