# nodejs-sdl-api

Line Server ReST API.

Redis Dockerized
1- docker run --name <container-name> -d redis  (expose 6379ñ)

docker run --name my-redis -d redis
docker run -d --name my-redis redis --bind 127.0.0.1

docker run -it --link my-redis:redis --rm redis redis-cli -h redis -p 6379