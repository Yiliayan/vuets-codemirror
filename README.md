# vuets-codemirror
vue ts项目引入vue-codemirror

## 1、下载npm包
npm install vue-codemirror --save

## 2、在main.js中引入
import VueCodeMirror from 'vue-codemirror'  
import 'codemirror/lib/codemirror.css'  
Vue.use(VueCodeMirror)

由于vue-codemirror没有ts版本的包，引入时会报错：“Try `npm install @types/A` if it exists or add a new declaration (.d.ts) file containing 
  `declare module 'A';`ts(7016) */”
因此需要在根目录下添加 vue-codemirror.d.ts文件

## 3、在组件中使用
参考codemirror.vue
