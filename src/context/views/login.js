import React from 'react';
import Form from '../components/form/form';
import userFormStore from '../useFormStore';
import { useFormChange } from '../useFormChange';
import { userService } from '../../services';
import { history } from '../../helpers';
import { Link, withRouter } from 'react-router-dom';
const defaultValue = {
  username: '',
  password: ''
}
const Login = (props) => {
  const store = userFormStore(defaultValue);
  const onSubmit = e => {
    e.preventDefault();
    const { username, password } = store.values;
    userService.login(username, password)
      .then(
        user => {
          props.history.push('/home')
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
      <button onClick={onSubmit}>submit</button>
      <Link to="/register">register</Link>
    </Form>
  )
}

export default withRouter(Login)