const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [password, setPassword] = useState(null);
  const [count, setCount] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const timerRef = useRef();

  function makePassword(){
    if(timerRef.current) clearInterval(timerRef.current);

    setPassword(Math.floor(Math.random() * 999999) + 100000);
    setCount(5); 
    setButtonDisabled(true);

    timerRef.current = setInterval(()=>{
      setCount(sec=>{
        if (sec == 1){
          setButtonDisabled(false);
          clearInterval(timerRef.current);
        }return sec -1;
      })
    },1000)

  }
  useEffect(()=>{
    return ()=>{
      if(timerRef.current) clearInterval(timerRef.current)
    }
    
  },[])

  return(
    <div className="container">
     <h1 id="otp-title">OTP Generator</h1>
     <h2 id="otp-display" >
      {!!password ? password : "Click 'Generate OTP' to get a code"}
     </h2>
    
       <p id="otp-timer" aria-live='polite'>
        {count != null && (
        count > 0 ? `Expires in: ${count} seconds` : 'OTP expired. Click the button to generate a new OTP.'
        )}
       </p>
     
     
     <button id="generate-otp-button" 
     onClick={makePassword} 
     disabled={buttonDisabled}>Generate OTP</button>
    </div>
  )
};
