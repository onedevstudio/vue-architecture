export default {
  path: '/users',
  name: 'users',
  // route level code-splitting
  // this generates a separate chunk (users.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "users" */ '@/views/Users'),
};
