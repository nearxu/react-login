
export class FormStore {
  constructor(values) {
    this.values = values;
    this.listeners = [];
  }
  get(name) {
    return this.values[name]
  }
  set(name, value) {
    // this.values name value
    if (typeof name === 'string') {
      this.values[name] = value;
      this.notify(name);
    }
  }
  notify(name) {
    this.listeners.forEach(listener => listener(name))
  }
  subscribe(listener) {
    this.listeners.push(listener);
  }
}