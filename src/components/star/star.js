/**
 * Created by FZ on 2017/12/27.
 */
import starComponent from './star.vue'

const VueStar = {
  install :function (Vue) {
    Vue.component('vuf-star',starComponent);
  }
}

export default VueStar
