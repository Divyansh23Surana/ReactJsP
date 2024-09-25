import logo from './logo.svg';
import React, { useState } from 'react'
import TextBox from './Components/TextBox';
import './App.css';
import Navbar from './Components/navbar';
import Product from './Components/Product';

function App() {
 


  return (
  <>
  <Navbar/>
  <div className='container'>
  <TextBox heading="Enter the data"/>
 <div>
<Product/>
 </div>
  </div>
  </>
  );
}

export default App;
