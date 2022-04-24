import React, { useState, useEffect } from 'react'
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import getMessages from "../requests/getMessages"
import deleteMessage from "../requests/deleteMessage"
import AppNavBar from './AppNavBar';


function MessageList() {
  const [display, setDisplay] = useState([])
  useEffect(()=>{
    getMessages(setDisplay)
    console.log('test')
  },[])



  const handleRemove = (id) => {
    deleteMessage(display,setDisplay,id)
  }

  const messageList = display.map(message => {
    return <tr key={message.id}>
      <td style={{whiteSpace: 'nowrap'}}>{message.name}</td>
      <td>{message.body}</td>
      <td>
        <ButtonGroup>
          <Button size="sm" color="primary" tag={Link} to={"/messages/" + message.id}>Edit</Button>
          <Button size="sm" color="danger" onClick={() => handleRemove(message.id)}>Delete</Button>    
        </ButtonGroup>
      </td>
    </tr>
    });
  
  return (
    <div>
      <AppNavBar/>
      <Container fluid>
        <div className="float-right">
          <Button color="success" tag={Link} to="/messages/new">Add Messages</Button>
        </div>
        <h3>Messages</h3>
        <Table className="mt-4">
          <thead>
            <tr>
            <th width="30%">Name</th>
            <th width="30%">Message</th>
            <th width="40%">Actions</th>
          </tr>
          </thead>
          <tbody>
            {messageList}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}

export default MessageList