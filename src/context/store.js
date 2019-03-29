import React from 'react';

export const =React.createContext({
  alert:{
    type:'alert-danger',
    message:"username or password is incorrect!"
  },
  registration:{
    registering:false
  },
  authentication:{
    loggedIn:false,
    user:{
      username:'',
      password:''
    }
  }
}) 