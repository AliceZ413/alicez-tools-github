import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import $utils from '@/utils/utils';

Vue.config.productionTip = false;
Vue.prototype.$utils = $utils;

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import Cube from 'cube-ui'
Vue.use(Cube);


//给Date添加Format方法
Date.prototype.format = function(fmt) {
	//author: meizz
	var o = {
		'M+': this.getMonth() + 1, //月份
		'd+': this.getDate(), //日
		'h+': this.getHours(), //小时
		'm+': this.getMinutes(), //分
		's+': this.getSeconds(), //秒
		'q+': Math.floor((this.getMonth() + 3) / 3), //季度
		S: this.getMilliseconds(), //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	for (var k in o) if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
	return fmt;
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
