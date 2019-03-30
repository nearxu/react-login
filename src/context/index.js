import React,{useReducer} from 'react';

import Store from './store';
import {routes} from './routes';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import Reducer from './reducer';
export const Index = () => {
  const [state,dispatch] = useReducer(Reducer,Store);
  console.log(state,'state');
  return (
    <Router>
      <div>
      {routes.map((route, i) => (
        <Route exact key={i} path={route.path} component={route.component}/>
      ))}
      </div>
    </Router>
  )
}