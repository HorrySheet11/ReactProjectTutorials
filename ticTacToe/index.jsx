const { useState,useEffect } = React;

export function Board() {
  const arrayGrid = Array(9).fill('');
  const [grid, setGrid] = useState(arrayGrid);
  
  const [player, setPlayer] = useState('X');
  const [isDisabled, setIsDisabled] = useState(false);
  const [paragraph, setParagraph] = useState(`Next Player: ${player}`)
  const disabledArray = [];
  
  const tttFunction = (square) =>{
    
    disabledArray.push(square);
    console.log(disabledArray);

    const newArray = [...grid];
    newArray[square] = player;
    setGrid(newArray)
    console.log(square);
    const winningArray = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6], 
      [1,4,7],
      [2,5,8],
      [0,4,8], 
      [2,4,6]
    ];
      
    console.log(newArray);
    
    for (let i = 0; i < winningArray.length; i++) {
    const [a, b, c] = winningArray[i];
      if (newArray[a] && newArray[a] === newArray[b] && newArray[a] === newArray[c]) {
        setIsDisabled(true);
        setParagraph(`Winner: ${player}`)
        return
      }else if(!newArray.includes('')){
        setIsDisabled(true);
        setParagraph(`Draw`)
        return
      }
    }
    
    player=='X'? setPlayer('O'): setPlayer('X');
    setParagraph(`Next Player: ${player}`)
    
  }

  const resetGame = () =>{
    setGrid(arrayGrid);
    setPlayer('X');
    setIsDisabled(false);
    setParagraph(`Next Player: ${player}`)
  }
return(
  <div className="Board">
  <h1>Tic Tac Toe</h1>
  <p>{paragraph}</p>
    <div className="grid">
      {grid.map((e,i) => <button 
      onClick={()=> tttFunction(i)} 
      className='square' 
      disabled={grid.at(i) == '' ? false : true} 
      key={i}>{e}</button>)}
    </div>
  <button id="reset" type='reset' onClick={resetGame}>Reset Game</button>  
  </div>
)
}