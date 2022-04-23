import axios from "axios"
import { useState, useEffect } from "react"
import Message from "./components/Message"
import getMessages from "./requests/getMessages"
import postMessage from "./requests/postMessage"
import './App.css';

function App() {
  const initialState = { body: "",name:"" }
  const [display, setDisplay] = useState([])
  const [input, setInput] = useState(initialState)
  useEffect(()=>{
    getMessages(setDisplay)
  },)

  const handleSubmit =  (e) =>{
    e.preventDefault();

    postMessage(display,setDisplay,{name:input.name,body:input.body})
    e.target.reset()
  }

  const handleInputChange = (e) =>{
    e.preventDefault();
    setInput({...input, [e.target.name]:e.target.value})
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          name: <input name="name" onChange={handleInputChange}/><br/>
          message: <input name="body" onChange={handleInputChange} /><br/>
          <button type="submit">Add</button>
        </form>
      </div>
      <div>
        {display && display.map((message,key) => (
          <div key={message.id}><Message message={message} /></div>
        ))}
      </div>
    </div>
  );
}

export default App;
