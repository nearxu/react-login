import React from 'react';
import Index from './context/components/form/index';

export const App = () => {
  return (
    <Index />
  )
}
// import Store from './context/store';
// import {Index} from './context/index';

// export const App = () => {
//   const { state, dispatch } = useContext(Store);
//   return (
//     <Store.Provider value={{ state, dispatch }}>
//       <Index />
//     </Store.Provider>
//   )
// }