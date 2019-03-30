import React from 'react';
import { Store } from './store';

export const Field = (props) => {
  const { dispatch } = React.useContext(Store);
  let timer = null;
  const changeValue = (e) => {
    e.persist();
    if (!timer) {
      timer = setTimeout(() => {
        dispatch({ type: "ADD_VALUE", payload: { [e.target.name]: e.target.value } });
        timer = null
      }, 500)
    }
  }
  return (
    <div>
      <label>{props.name}</label>
      <input name={props.name} type="text" onChange={(e) => changeValue(e)} />
    </div>
  )
}