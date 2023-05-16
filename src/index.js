import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const index = 0;
const element = (
  <h1 className='heading' tabIndex={index}>
    <span className='text'>Hello {new Date().toLocaleTimeString()}</span>
    <img src='' />
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
