import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

// Post request with axios

const CreateData= () => {
  const [newData, setNewData] = useState('');

  const handleCreate = async () =>{
    try{
      await axios.post('https://jsonplaceholder.typicode.com/todos',{newData});
      alert('Data created successfully :>')
    }catch (error){
      console.log('Error creating data', error)
    }
  }

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2>Create new Data: </h2>
        <input 
          type='text'
          value={newData}
          onChange={(e)=> setNewData(e.target.value)}
        />
        <p>{newData}</p>
        <button onClick={handleCreate}>Create</button>
      </header>
    </div>
  )
};

export default CreateData;
