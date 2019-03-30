import React from 'react';

import { FormStoreContext } from './formStoreContext';
import { FormField } from './formField';

const Form = (props) => {
  const { onSubmit, children, store } = props;
  return (
    <FormStoreContext.Provider value={store}>
      <form onSubmit={onSubmit}>
        {children}
      </form>
    </FormStoreContext.Provider>
  )
}

Form.Field = FormField;

export default Form;
