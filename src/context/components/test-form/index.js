import React from 'react';
import Form from './form';
import userFormStore from './userFormStore';
import { useFormChange } from './useFormChange';

const defaultName = {
  username: '',
  password: ''
}

const defaultRules = {
  username: (val) => !!val.trim(),
  password: (val) => /[0-9]/g.test(val)
}

export const Index = () => {
  const store = userFormStore(defaultName, defaultRules);
  useFormChange(store, (name) => {
    console.log('change', name, store.get(name))
  })

  return (
    <div>
      <Form store={store}>
        <Form.Field label="username" name="username">
          <input />
        </Form.Field>
        <Form.Field label="password" name="password">
          <input type="password" />
        </Form.Field>
      </Form>
    </div>
  )
}