import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const members = [
  { id: 1, first_name: 'Adam', last_name: 'Gospodarczyk', role: 'Member'},
  { id: 2, first_name: 'Przemek', last_name: 'Smyrdek', role: 'Member'},
  { id: 3, first_name: 'Marcin', last_name: 'Czarkowski', role: 'Member'}
];

const Member = { template: `<div>{{ $route.params.id }}</div>` };

const routes = [
  { path: '/members/:id', component: Member }
];
 

const router = new VueRouter({ routes });
const app = new Vue({ router }).$mount('#app');
