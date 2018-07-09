# Docker
 主机/宿主——容器 (通过卷volume可和主机共享文件)

------------

**共享镜像**

1. repository（docker pull）
2. image -> tar文件 (docker save)  tar文件 -> image (docker load)

**定制镜像**

dockerfile -> image (docker build -t name .)(.为执行上下文)
过程：
- From nginx                         image1
- RUN yarn && yarn run build:dev     image2
- .
- .
- .
- hello-world                        image10

image1 ~ image10为中间镜像，image10也为最终的镜像
中间镜像不可见，由docker维护，存于缓存，下次build不需要重新创建，可复用镜像
重新build时候判断是重新创建中间镜像还是使用缓存中的镜像：
1. 检查前一步是否是恢复出来的
2. 本行代码在images中存在


###Nginx

**查看nginx镜像默认配置**
- 创建并进入容器：docker run -it nginx bin/bash
- 查看配置：cat etc/nginx/nginx.conf
