const { useState, useMemo } = React;

export function CurrencyConverter() {

  const currencies = ['USD', 'GBP', 'JPY', 'EUR'];

  const mapping = {
    USD: 1,
    EUR: 0.86,
    GBP: 0.74,
    JPY: 147.91
  };


  const [input, setInput] = useState(1);
  const [select1, setSelect1] = useState('USD');
  const [select2, setSelect2] = useState('USD');
  const [map1, setMap1] = useState('');
  const [map2, setMap2] = useState('');

  let conversion = useMemo(()=>{
    return (input * (map1/map2)).toFixed(2);
  },[input, select1])

  
  
  return(<div>
    <form>
      <h1>Currency Converter</h1>
      <p>{select1} to {select2} Convertion</p>
      <input type="number" value={input} onChange={e=> setInput(e.target.value)} />

      <p>Start Currency</p>

      <select id="select1" value={select1} onChange={e=>{setSelect1(e.target.value);setMap1(mapping[e.target.value])}}>
        {currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
      </select>

      <p>End Currency</p>

      <select id="select2" value={select2} onChange={e =>
  {setSelect2(e.target.value);setMap2(mapping[e.target.value])}}>
        {currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}
      </select>
      <h2>Converted Amount: {conversion} {select2}</h2>
    </form>
  </div>)
}