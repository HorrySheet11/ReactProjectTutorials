import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

// Delete request with axios

const DeleteData= () => {

  const handleDelete =  async () => {
    try {
      await axios.delete('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => console.log(res.data))
      alert('Data deleted')
    } catch (error) {
      alert('Error deleting data.')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2>Deleting API Data</h2>
        <button
          onClick={handleDelete}
        >Delete Data
          </button>

      </header>
    </div>
  )
};

export default DeleteData;
