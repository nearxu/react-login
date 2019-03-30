import { deepGet, deepSet } from './utils';
export class FormStore {
  constructor(values) {
    this.values = values;
    this.listeners = [];
  }
  get(name) {
    return name === undefined ? { ...this.values } : deepGet(this.values, name)
  }
  set(name, value) {
    if (typeof name === 'string') {
      deepSet(this.values, name, value)
      this.notify(name);
    } else if (name) {
      Object.keys(name).forEach(n => this.set(n, name[n]))
    }
  }
  validata(name) {
    if (name === undefined) {
      const err = undefined;
      return [err, this.get()]
    } else {
      const value = this.get(name);
      return [undefined, value];
    }
  }
  notify(name) {
    this.listeners.forEach(listener => listener(name))
  }
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index > -1) this.listeners.splice(index, 1);
    }
  }
}