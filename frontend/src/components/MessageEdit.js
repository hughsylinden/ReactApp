import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavBar from "./AppNavBar"
import postMessage from '../requests/postMessage';
import updateMessage from '../requests/updateMessage';

function MessageEdit(props) {
    const { id } = useParams();
    let navigate = useNavigate();
    const initialState = {
        name: '',
        body: ''
    };
    const [editedMessage,setEditedMessage] = useState(initialState)

    const handleInputChange = (e) =>{
        e.preventDefault();
        setEditedMessage({...editedMessage, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = {name:editedMessage.name,body:editedMessage.body}
        id==='new'? postMessage(message) : updateMessage(message,id)
        navigate('/messages')
    }

    const title = <h2>{id ==='new' ? 'Add Message' : 'Edit Message'}</h2>;
    return (
      <div>
      <AppNavBar />
      <Container>
          {title}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" value={editedMessage.name || ''}
                onChange={handleInputChange} autoComplete="name"/>
            </FormGroup>
            <FormGroup>
              <Label for="body">Message</Label>
              <Input type="text" name="body" id="body" value={editedMessage.body || ''}
                onChange={handleInputChange} autoComplete="body"/>
            </FormGroup>
            <FormGroup>
              <Button color="primary" type="submit">Save</Button>{' '}
              <Button color="secondary" tag={Link} to="/messages">Cancel</Button>
            </FormGroup>
          </Form>
      </Container>
      </div>
    )
}
export default MessageEdit;