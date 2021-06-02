import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';




function App() {
  const [change, setChange] = useState("");
  const handleChange =(e)=>{
    setChange(e.target.value);
  }  
  const handleClick =(e)=>{
    alert("you just type" + change)
  }
  const handleMouseOver =(e)=>{
    alert(e.target.childNodes[0].data)
  }
  return(
    <div>
      <input placeholder="Enter whatever you want" onChange={handleChange} value={change}></input>
      <p>{change}</p>
      <button onClick={handleClick}>click me</button>
      <p onMouseOver={handleMouseOver}> choose me</p>
    </div>
  )
}
export default App;
