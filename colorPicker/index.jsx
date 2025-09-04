const { useState } = React;

export const ColorPicker = () => {

  const [color, setColor] = useState('#ffffff');

  const getColor = (event) => {
    setColor(event.target.value);
  }

  return(
    <div id="color-picker-container" style={{backgroundColor: color}}>
    <p>Choose a background color using the picker below</p>
    <input onChange={getColor} id="color-input" type="color" value={color}/>
    </div>
  )
};

