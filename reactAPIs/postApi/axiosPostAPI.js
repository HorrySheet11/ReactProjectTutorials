import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

// Post request with axios

export default class App extends React.Component {
  state = {
    name: '',
    result: []
  };

  handleChange = (event) =>{
    this.setState({name: event.target.value})
  }

  handleSubmit = (event) =>{
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`,{user})
      .then((res) =>{
        this.setState({result: res.data.user.name});
      });
  }


  render(){  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name: 
            <input type='text' name='name' onChange={this.handleChange} />
          </label>
          <button type='submit'>Add</button>
        </form>
        <h4>Result: {this.state.result}</h4>
      </header>
    </div>
  );}
};