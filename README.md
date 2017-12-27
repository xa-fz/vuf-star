# vuf-star

> A Vue.js component


## Build Setup

``` bash
# 安装 npm install --save-dev vuf-star@1.0.0

使用:
<vuf-star :size="36" :score="3.5">
</vuf-star>

size---是星星图片的大小，分为24/36/48
score----评分

分数算法机制:分数的2倍向下取整后除以2 例：4.2-->4.2*2=8.4-->向下取整8-->除以2等于4分 

算法可作调整