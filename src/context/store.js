import React from 'react';

const Store = React.createContext({
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

export default Store;