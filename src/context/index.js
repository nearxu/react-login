import React,{userContext} from 'react';

import Store from './store';
import {routes} from './routes';
import { Router } from "react-router";

export const Index = () => {
  const {state,dispatch} = useContext(Store);
  console.log(state,'state');
  return (
   <Router history={hashHistory} routes={routes} />
  )
}