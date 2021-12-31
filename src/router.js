import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/'
    },
    {
      path: '/2022/Omicron',
      redirect: '/2022/omicron'
    }
  ]
});

export default router;