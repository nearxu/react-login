import React,{useContext} from 'react';

import Store from './context/store';
import Index from './context/index';

export const App = () => {
  return (
    <Store.Provider value={{state,dispatch}}>
      <Index />
    </Store.Provider>
  )
}