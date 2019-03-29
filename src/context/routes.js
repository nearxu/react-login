export const routes = [
  {
    path:'/',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'/login',
    component:(resolve => require(['./components/login'],resolve))
  },
  {
    path:'/register',
    component:(resolve => require(['./components/register'],resolve))
  },
  {
    path:'/home',
    component:(resolve => require(['./components/home'],resolve))
  },
]