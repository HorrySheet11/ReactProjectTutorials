import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState([]);

  useEffect(()=>{
    const fetchFunction = async () =>{
      try{
        const response = await fetch('https://api.publicapis.org/entries');
        const result = await response.json();
        setData(result);
      }catch (error){
        console.log('Error fetching API', error);
      }
    };

    fetchFunction();
  },[]);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>API Data :)</h1>
        <ul>
          {data.map((item)=>(
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>

      {/* 
        
        <p>
          Edit <code>src/App.js</code> and save to reload. Heloo :)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       */}
      </header>
    </div>
  );
};

export default App;
