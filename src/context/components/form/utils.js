
export function isObject(obj) {
  return obj !== null && typeof obj === 'object'
}

export function deepGet(obj, path) {
  const parts = path.split('.')
  const length = parts.length

  for (let i = 0; i < length; i++) {
    if (!isObject(obj)) return undefined
    obj = obj[parts[i]]
  }

  return obj
}

export function deepSet(obj, path, value) {
  if (!isObject(obj)) return obj

  const root = obj
  const parts = path.split('.')
  const length = parts.length

  for (let i = 0; i < length; i++) {
    const p = parts[i]

    if (i === length - 1) {
      obj[p] = value
    } else if (!isObject(obj[p])) {
      obj[p] = {}
    }

    obj = obj[p]
  }

  return root
}

export function getPropName(value, type) {
  return typeof value === 'function' ? value(type) : value
}

export function getValueFromEvent(...args) {
  const e = args[0];
  return e && e.target && e.target.value;
}