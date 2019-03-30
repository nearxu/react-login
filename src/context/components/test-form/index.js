import React from 'react';
import { Field } from './field';
import { Store } from './store';
import { reducer } from './reducer';

export const Form = () => {
  const store = React.useContext(Store);
  const [state, dispatch] = React.useReducer(reducer, store);
  console.log(state.values);
  const submit = () => {

  }
  return (
    <Store.Provider value={{ state, dispatch }}>
      <form onSubmit={submit}>
        <Field name="username" />
        <Field name="password" />
        <button>submit</button>
      </form>
    </Store.Provider>
  )
}