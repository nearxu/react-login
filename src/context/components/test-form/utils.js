export function valueGetter(...args) {
  const e = args[0];
  return e && e.target.value;
}

