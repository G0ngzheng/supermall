import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

// // 按钮
// import { Button } from 'vant'
// // 轮播
// import { Swipe, SwipeItem } from 'vant';
// // 单元格
// import { Cell, CellGroup } from 'vant';
// // 图标
// import { Icon } from 'vant';
// // 图片
// import { Image } from 'vant';
// // 布局
// import { Row, Col } from 'vant';
// // 弹出层
// import { Popup } from 'vant';
//
//
// Vue.use(Popup);
// Vue.use(Row).use(Col);
// Vue.use(Image);
// Vue.use(Icon);
// Vue.use(Cell).use(CellGroup);
// Vue.use(Swipe).use(SwipeItem);
// Vue.use(Button)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
