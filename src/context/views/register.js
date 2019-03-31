import React from 'react';
import Form from '../components/form/form';
import userFormStore from '../useFormStore';
import { useFormChange } from '../useFormChange';
import { userService } from '../../services';
import { history } from '../../helpers';
import {withRouter} from 'react-router-dom';

const defaultValue = {
  username: '',
  password: ''
}
const Register = (props) => {
  const store = userFormStore(defaultValue);
  const onSubmit = e => {
    e.preventDefault();
    userService.register(store.values)
      .then(
        user => {
          props.history.push('/login')
        },
        error => {
          console.log(error)
        }
      )

  }
  useFormChange(store, (name) => {
    console.log('change', name, store.get(name))
  })
  return (
    <Form store={store}>
      <Form.Field label="username" name="username">
        <input />
      </Form.Field>
      <Form.Field label="password" name="password">
        <input />
      </Form.Field>
      <button onClick={onSubmit}>register</button>
    </Form>
  )
}

export default withRouter(Register);