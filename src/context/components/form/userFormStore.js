import React from 'react';

import { FormStore } from './formStore';

const useFromStore = (values) => {
  return React.useMemo(() => new FormStore(values), [values]);
}

export default useFromStore;