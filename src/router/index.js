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
      path: '/',
      name: 'ListUsers',
      component: ListUsers,
    },
    {
      path: '/add',
      name: 'AddUser',
      component: AddUser,
    },
    {
      path: '/search',
      name: 'SearchUser',
      component: SearchUser,
    },
  ],
});
