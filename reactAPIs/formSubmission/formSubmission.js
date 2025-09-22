import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState } from 'react';

// Form Submission with axios

const FormSubmission= () => {
  const [formData, setFormData] = useState({
    title: '',
    completed: '',
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post('https://jsonplaceholder.typicode.com/todos', {formData})
    .then(res => console.log(res.data))
    } catch (error) {
      console.log('Error creating data', error)
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <form onSubmit={handleSubmit}>
        <label> Title:
          <input 
            type='text'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>

        <label> Completed?:
          <select name="completed" value={formData.completed} onChange={handleInputChange}>
            <option value='' selected disabled hidden >Select value</option>
            <option value={true} >True</option>
            <option value={false} >False</option>
          </select>
        </label>

          <button type='submit'>Submit Data</button>
        </form>

      </header>
    </div>
  )
};

export default FormSubmission;
