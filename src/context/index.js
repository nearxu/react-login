import React from 'react';

// import { routes } from './routes';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import  Login  from './views/login'
import Home  from './views/home';
import  Register  from './views/register';

export const Index = () => {
  return (
    // <Router>
    //   <div>
    //     {routes.map((route, i) => (
    //       <Route exact key={i} path={route.path} component={route.component} />
    //     ))}
    //   </div>
    // </Router>
    <Router>
      <div>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  )
}