import React from 'react';
import "./logo.css";



function Logo(props) {
  
  return (
    <div className="logo">
    <img
      alt="Logo"
      height="56px"
      src="https://cdn-images-1.medium.com/max/1200/1*K2bYZLFHQo3kVhzs17DP5g.jpeg"
      {...props}
    />
    </div>
  )
}

export default Logo
