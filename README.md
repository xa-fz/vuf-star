# vuf-star 
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/vuf-star)
[![Codeship](https://img.shields.io/badge/csdn-blog-red.svg)](http://blog.csdn.net/q553866469/article/details/78909601)
> a component in vueJs to show star for shop


## Build Setup

``` bash
 # npm install --save-dev vuf-star@1.0.4
API:
<vuf-star :size="this.starSize" :score="this.starScore">
</vuf-star>

export default () {
  data(){
    return: {
      starSize: 36,
      starScore: 3.5
    }
  }
}
parameter：
     imagesSize  score
     24/36/48    1~5
     
mechanism：> 0.5score is one score，< 0.5score is none
