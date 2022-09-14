//1.导入Vue和VueRouter包
import Vue from "vue";
import VueRouter from "vue-router";
import SongsParts from "@/components/SongsPart.vue"
//调用Vue.use()函数，把VueRouter安装为Vue的插件
Vue.use(VueRouter)
//创建路由实例对象
const router = new VueRouter({
    routes:[
      {path:'/songspart',components:SongsParts}
    ]
})
//向外共享路由实例对象
export default router