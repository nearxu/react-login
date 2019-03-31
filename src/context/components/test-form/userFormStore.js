import React from 'react';
import { FormStore } from './store';

const userFormStore = (values, rules) => {
  return React.useMemo(() => new FormStore(values, rules), [values, rules])
}

export default userFormStore