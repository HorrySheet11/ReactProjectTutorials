import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { generate} from "random-words";

function App() {
  const [word,setWord] = useState();
  const [definition, setDefinition] = useState();

  useEffect(()=>{
    const randomWord = generate({maxLength: 10});
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${randomWord}`)
              .then((response)=>response.json()) 
              .then((data)=>{console.log(data)
                setWord(data[0].word)
                setDefinition(data[0].meanings)
              });
  },[]);
    
  function refreshPage(){ 
      window.location.reload(); 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Word: {word}</h2>
        <input type="button" onClick={refreshPage} value='New Word'/>
        <h3>Definition: </h3>
        {definition?.map((words)=>{
          return <p>{words.partOfSpeech + ': '} 
            {words.definitions[0].definition}</p>
        })}
      </header>
    </div>
  );
};

export default App;
