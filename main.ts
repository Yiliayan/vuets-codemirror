import Vue from 'vue';

import 'normalize.css';
import ElementUI from 'element-ui';
import SvgIcon from 'vue-svgicon';
import "element-ui/lib/theme-chalk/index.css";

import '@/styles/element-variables.scss';
import '@/styles/index.scss';

import axios from 'axios';
import Vueaxios from 'vue-axios';

import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import '@/icons/components';
import '@/permission';
// import { checkEnv } from '@/utils/checkEnv'
// import { emonitorReport } from '@/utils/emonitorReport'
import Raven from 'raven-js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import RavenVue from 'raven-js/plugins/vue';
// ant组件按需导入，不然可能会跟element有冲突
// import Empty from 'ant-design-vue/lib/empty'
// import Progress from 'ant-design-vue/lib/progress'

import clipboard from 'clipboard';

// 全局引入echarts
import Echarts from 'echarts';
import Cookies from 'js-cookie';

// 引入代码编辑器
import codemirror from 'vue-codemirror';
import 'codemirror/lib/codemirror.css';

// 粘贴工具注册到vue原型上
Vue.prototype.clipboard = clipboard;

Vue.prototype.$echarts = Echarts;

Vue.use(Vueaxios, axios);

Vue.use(ElementUI);
Vue.use(codemirror);
// Vue.component('a-empty', Empty)
// Vue.component('a-progress', Progress)
Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em',
});

Vue.config.productionTip = false;

Raven.config(
  'http://452ff4b02ee24b049449f64ad72642be@sentry.oa.com/2476',
  {
    release: process.env.GIT_SHA,
  },
).addPlugin(RavenVue, Vue)
  .install();

router.beforeEach((to, from, next) => {
  // if (checkEnv() === 'prod' || checkEnv() === 'test') {
  //   console.log('emonitorReport', window.location.href)
  //   emonitorReport()
  // }
  console.log('router.beforeEach');
  if (to.path === '/') {
    const cookies = Cookies.get();
    let i = 0;
    for (const key of Object.keys(cookies)) {
      if (key === 'homePage') {
        i = i + 1;
      }
    }
    // for (const key in cookies) {
    //   if (key === 'homePage') {
    //     i = i + 1
    //   }
    // }
    if (i === 1) {
      next({ path: '/lab/index' });
    } else {
      next();
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
