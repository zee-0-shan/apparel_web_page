import { useState } from 'react';
import './App.css';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [error, setError] = useState(false)
  const[input,setInput]=useState("")
  const[message,setMessage]=useState("")

  function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

const handleClick=()=>{
  
  if(!input){
    setError(true)
    setMessage("please fill the details")
  }
 else if(!validateEmail(input)){
    setError(true)
    setMessage("please give correct email")
 }
 else{
  setError(false)
  setMessage("")
 }

}
  return (
    <div className="App">
        <div className="title">
            <img src="./circle.svg" alt="logo" />
            <p>BASE APPAREL</p>
          </div>
        <div className="container">
            <div className="right">
            
              <span className="header">
                  <h1><span>WE'RE</span> COMING SOON</h1>
              </span>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, qui. Reiciendis odit sed ipsa incidunt expedita autem, veniam voluptatum iste nemo in minima quod omnis. Ea id repudiandae tempore enim. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, quidem?</p>
              {error && <ErrorMessage>{message}</ErrorMessage>}
            <div className="email">
              <input  value={input} type="email" onChange={(e)=>setInput(e.target.value)} placeholder='Email address' />
            <button className='btn' onClick={()=>handleClick()}>{">"}</button>
              </div>
            </div>
            <div className="left">
              <img src="https://st3.depositphotos.com/3203307/18596/i/600/depositphotos_185963658-stock-photo-unicorn-nebula-background.jpg" alt="horse" />
            </div>
        </div>
      </div>
  );
}

export default App;
