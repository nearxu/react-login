import React from 'react';

export class FormStore {
  constructor(values, rules) {
    this.values = values;
    this.listeners = [];
    this.rules = rules;
    this.errors = {};
  }
  get(name) {
    return this.values[name]
  }
  set(name, value, validate) {
    // this.values name value
    if (typeof name === 'string') {
      // not understand
      // const nameArr = name.split('.');
      // for (let i = 0; i < nameArr.length; i++) {
      //   const p = nameArr[i];
      //   if (i === nameArr.length - 1) {
      //     this.values[p] = value;
      //   }
      //   // this.values = this.values[p];
      // }
      if (validate) this.validate(name);
      this.values[name] = value;
      this.notify(name);
    }
  }
  error(...args) {
    let [name, value] = args;
    if (args.length === 0) return this.errors;
    if (typeof name === 'string') {
      name = Object.keys(this.errors)[name];
    }
    if (args.length === 2) {
      if (value === undefined) {
        delete this.errors[name];
      } else {
        this.errors[name] = value
      }
    }
    return this.errors[name]
  }
  validate(name) {
    if (name === undefined) {
      Object.keys(this.rules).forEach(n => this.validate(n))
      this.notify('*')

      const message = this.error(0)
      const error = message === undefined ? new Error(message) : message;
      return [error, this.get()]
    } else {
      const validates = this.rules[name];
      const value = this.get(name);
      const result = validates ? validates(value, this.values) : true;
      const message = this.error(name, result === true ? undefined : result || 'err')
      const error = message === undefined ? new Error(message) : true
      return [error, value]
    }
  }
  notify(name) {
    this.listeners.forEach(listener => listener(name))
  }
  subscribe(listener) {
    this.listeners.push(listener);
  }
}