import React from 'react';
import Form from './form';
import userFormStore from './userFormStore';
import useFormChange from './useFormChange';

const defaultStore = {
  username: 'default',
  password: ''
}

const Index = () => {
  const store = userFormStore(defaultStore);

  useFormChange(store, (name) => {
    console.log('change', name, store.get(name))
  })
  const onSubmit = (e) => {
    e.preventDefault();
    const [error, values] = store.validata();
    console.log(values);
  }
  return (
    <div>
      <Form store={store}>
        <Form.Field label="username" name="username">
          <input />
        </Form.Field>
        <Form.Field label="password" name="password">
          <input />
        </Form.Field>
        <button onClick={onSubmit}>submit</button>
      </Form>
    </div>
  )
}

export default Index;