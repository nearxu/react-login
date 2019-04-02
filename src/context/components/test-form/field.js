import React from 'react';
import { FormStoreContext } from './formStoreContext';
import { valueGetter } from './utils'
import { useFieldChange } from './useFieldChange';
export const Field = (props) => {
  const { children, label, name } = props;
  const store = React.useContext(FormStoreContext);
  const [error, setError] = React.useState(name && store ? store.error(name) : undefined);
  const [value, setValue] = React.useState(name && store ? store.get(name) : undefined);
  let child = children;
  // this is very nice fun ,use callback and get args[0]
  const onChange = React.useCallback(
    (...args) => name && store && store.set(name, valueGetter(...args), store.rules[name]),
    [name, store, valueGetter]
  )
  if (name && store && React.isValidElement(child)) {
    const childPorps = { [child.type]: value, onChange };
    child = React.cloneElement(child, childPorps);
  }
  useFieldChange(store, name, () => {
    setValue(store.get(name))
    setError(store.get(name))
  })
  console.log(error, 'error');
  return (
    <div className="container">
      {
        label && <div>{label}</div>
      }
      <div className="control">{child}</div>
      <div className="message">{error}</div>
    </div>
  )
}