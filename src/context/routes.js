import { Login } from './views/login';
import { Register } from './views/register';
import { Home } from './views/home';

// no surpose component:(() => require(['./components/login']))
// route config 支持多层嵌套

export const routes = [
  {
    path: '/',
    redirectTo: '/login',

  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/home',
    component: Home
  },
]