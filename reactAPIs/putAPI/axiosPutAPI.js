import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

// Put request with axios

const UpdateData= () => {
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedCompleted, setUpdatedCompleted] = useState('');

  const handleUpdate = async () => {    
    try {

      const updateUser = {
        'title': updatedTitle,
        'completed': updatedCompleted
      };

      await axios.put('https://jsonplaceholder.typicode.com/todos/1', {updateUser})
        .then(res => console.log(res.data));
      alert('Data updated successfully!');
    } catch (error) {
      console.log('Error updating data: ', error);
    }
  };

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2>Updating API Data</h2>
        <label>New Title: <input
          type='text'
          value={updatedTitle}
          onChange={e => setUpdatedTitle(e.target.value)}
        /></label>

        <label>Completed? <select 
          type='select'
          value={updatedCompleted}
          onChange={(e)=> setUpdatedCompleted(e.target.value)}
        >
          <option value='' selected disabled hidden >Select value</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        </label>

        <button onClick={handleUpdate}>Update Data</button>

      </header>
    </div>
  )
};

export default UpdateData;
