import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  console.log(props);
  return (
    <div>
      <p>hello home</p>
      <Link to="/login">logout</Link>
    </div>
  )
}

export default Home