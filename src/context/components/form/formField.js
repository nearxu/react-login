import React from 'react';
import { FormStoreContext } from './formStoreContext';
import { getPropName, getValueFromEvent } from './utils';
import useFieldChange from './useFieldChange';

export const FormField = (props) => {
  const { label, children, message, name, valueGetter = getValueFromEvent } = props;
  const store = React.useContext(FormStoreContext);

  const [value, setValue] = React.useState(name && store ? store.get(name) : undefined)

  const onChange = React.useCallback(
    (...args) => name && store && store.set(name, valueGetter(...args)),
    [name, store, valueGetter]
  )
  useFieldChange(store, name, () => {
    setValue(store.get(name))
  })
  let child = children;
  if (name && store && React.isValidElement(child)) {
    const prop = getPropName('value', child.type);

    // core cloneElement in order to onChange
    const childProps = { [prop]: value, onChange };
    child = React.cloneElement(child, childProps);
  }

  return (
    <div>
      {
        label && <div>{label}</div>
      }
      <div className="container">
        <div className="control">{child}</div>
        <div className="message">{message}</div>
      </div>
    </div>
  )
}