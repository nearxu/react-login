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
  set(name, value) {
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
  notify(name) {
    this.listeners.forEach(listener => listener(name))
  }
  subscribe(listener) {
    this.listeners.push(listener);
  }
}