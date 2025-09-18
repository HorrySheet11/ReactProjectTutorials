import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users,setUsers] = useState([]);

  const fetchData = () =>{
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response)=> setUsers(response.data));
  }
  
useEffect(()=>{
  fetchData();
},[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {users.length > 0 && (
          <ul>
            {users.map((user)=>(
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )

        }
      </header>
    </div>
  );
};

export default App;
