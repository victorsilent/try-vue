import Vue from 'vue';
import 'bulma/css/bulma.css';
import Router from 'vue-router';
import AddUser from '@/components/AddUser';
import ListUsers from '@/components/ListUsers';
import SearchUser from '@/components/SearchUser';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/add',
      name: 'AddUser',
      component: AddUser,
    },
    {
      path: '/list',
      name: 'ListUsers',
      component: ListUsers,
    },
    {
      path: '/search',
      name: 'SearchUser',
      component: SearchUser,
    },
  ],
});
