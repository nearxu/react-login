import React from 'react';
import { FormStoreContext } from './formStoreContext';
import { Field } from './field';

const Form = (props) => {
  // const store = React.useContext(Store);
  // const [state, dispatch] = React.useReducer(reducer, store);
  // console.log(state.values);
  // const submit = () => {

  // }
  const { children, store } = props
  return (
    <FormStoreContext.Provider value={store}>
      {children}
    </FormStoreContext.Provider>
  )
}

Form.Field = Field;

export default Form;