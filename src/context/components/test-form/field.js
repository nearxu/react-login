import React from 'react';
import { FormStoreContext } from './formStoreContext';
import { valueGetter } from './utils'
import { useFieldChange } from './useFieldChange';
export const Field = (props) => {
  // const { dispatch } = React.useContext(Store);
  // let timer = null;
  // const changeValue = (e) => {
  //   e.persist();
  //   if (!timer) {
  //     timer = setTimeout(() => {
  //       dispatch({ type: "ADD_VALUE", payload: { [e.target.name]: e.target.value } });
  //       timer = null
  //     }, 500)
  //   }
  // }
  const { children, label, name } = props;
  const store = React.useContext(FormStoreContext);
  // const [error, setError] = React.useContext(name && store ? store.error(name) : undefined);
  const [value, setValue] = React.useState(name && store ? store.get(name) : undefined);
  let child = children;
  // this is very nice fun ,use callback and get args[0]
  const onChange = React.useCallback(
    (...args) => name && store && store.set(name, valueGetter(...args)),
    [name, store, valueGetter]
  )
  if (name && store && React.isValidElement(child)) {
    const childPorps = { [child.type]: value, onChange };
    child = React.cloneElement(child, childPorps);
  }
  useFieldChange(store, name, () => {
    setValue(store.get(name))
    // setError(store.get(name))
  })
  return (
    <div className="container">
      {
        label && <div>{label}</div>
      }
      <div className="control">{child}</div>
      <div className="message"></div>
    </div>
  )
}