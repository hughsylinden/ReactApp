import axios from "axios"
import { useState, useEffect } from "react"
import Message from "./components/Message"
import './App.css';

function App() {
  const initialState = { body: "",name:"" }
  const [display, setDisplay] = useState([])
  const [input, setInput] = useState(initialState)
  useEffect( ()=>{
     axios.get('http://localhost:8080/messages').then(res=>{
      setDisplay(res.data)
    })
  },)

  const handleSubmit =  (e) =>{
    e.preventDefault();
     axios.post('http://localhost:8080/messages', {name:input.name,body:input.body}).then(res=>{
      setDisplay(...[display], res.data)
    })
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
