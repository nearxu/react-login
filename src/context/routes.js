import {Login} from './components/login';
import {Register} from './components/register';
import {Home} from './components/home';

// no surpose component:(() => require(['./components/login']))
// route config 支持多层嵌套

export const routes = [
  {
    path:'/',
    redirectTo:'/login',
  
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/home',
    component:Home
  },
]