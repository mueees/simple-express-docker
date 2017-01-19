Build image:
docker build -t mueees/simple-express-docker .

Run image:
docker run -ti --net test -p 7777:7777 -d mueees/simple-express-docker bash

Print app output:
docker logs <container id>

Enter the container
$ docker exec -it <container id> /bin/bash