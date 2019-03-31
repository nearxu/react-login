import React from 'react';

export function useFormChange(store, onChange) {
  React.useEffect(() => {
    if (!store) return;
    return store.subscribe(n => onChange(n))
  }, [store])
}