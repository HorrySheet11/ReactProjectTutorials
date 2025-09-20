import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

// Post request with axios

const CreateData= () => {
  const [newUser, setNewUser] = useState('');
  const [isCustomer, setIsCustomer] = useState(false);

  const handleCreate = async () =>{
    try{
      const user = {
        name: newUser, 
        customer: isCustomer
      }

      await axios.post('https://jsonplaceholder.typicode.com/todos',{user})
      .then(res => console.log(res.data))
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
        <label>Name:   
          <input 
          type='text'
          value={newUser}
          onChange={(e)=> setNewUser(e.target.value)}
        /></label>

        <label>Customer? <select 
          type='select'
          value={isCustomer}
          onChange={(e)=> setIsCustomer(e.target.value)}
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        </label>
        <button onClick={handleCreate}>Create</button>
      </header>
    </div>
  )
};

export default CreateData;
