import React from 'react';

const useFormChange = (store,onChange) => {
  React.useEffect(() => {
    if(!store) return ;
    return store.subscribe(n => {onChange(n)})
  },[store])
}

export default useFormChange;