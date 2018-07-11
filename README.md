# Docker
 主机/宿主——容器 (通过卷volume可和主机共享文件)

**共享镜像**

1. repository
``` sh
docker pull
```

2. image -> tar文件 
``` sh
docker save
```
 tar文件 -> image
 ``` sh
 docker load
 ```

**定制镜像**

dockerfile ---> image

``` sh
docker build -t name .  // . 为执行上下文
```

过程：

- From nginx ---> image1
- MAINTAINER yhhcg ---> image2
- .
- .
- .
- hello-world ---> image10

Features：

1. 中间镜像不可见，由docker维护
2. 存于缓存，可复用

# Demo

##### [1. Nginx](https://github.com/yhhcg/docker-base-images/tree/master/nginx "Nginx")

**启动nginx**

- 定制镜像

``` sh
docker build -t nginx .
```

- 启动镜像

``` sh
docker run -d -p 8081:80 nginx
```

**查看nginx镜像默认配置**

- 创建并进入容器

```  sh
docker run -it nginx bin/bash
```

- 查看配置

``` sh
cat etc/nginx/nginx.conf
```
###### [2. Docker-compose](https://github.com/yhhcg/docker-base-images/tree/master/dockerCompose "Docker-compose")

可定义镜像的先后依赖关系

``` sh
docker-compose up
```