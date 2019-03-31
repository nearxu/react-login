import React from 'react';
import { FormStore } from './store';

const userFormStore = (values) => {
  return React.useMemo(() => new FormStore(values), [values])
}

export default userFormStore