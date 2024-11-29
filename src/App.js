/* import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

import React from "react";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App(){

  const[asientos, setAsientos]=useState([]);

  //Backend

  const obtenerAsientos = async()=>{
    try{
      const respuesta= await axios.get('http://localhost:3000/api/asientos');
      setAsientos(respuesta.data);

    } catch(error){
      console.error('Error al capturar los asientos:', error)

    }
  }
  const reservarAsientos = async(id)=>{
    try{
      const respuesta= await axios.post(`http://localhost:3000/api/asientos/${id}`);
      setAsientos(respuesta.data);

    } catch(error){
      console.error('Error al capturar los asientos:', error)

    }
  }
  return(
    <div>

    </div>
  ); 
}
