
import React from "react";
import AppNavBar from "./AppNavBar"
import { Button, Container } from 'reactstrap';
import { Link } from "react-router-dom"



function Home() {
  return (
    <div>
      <AppNavBar />
      <Container fluid>
        <Button color="link"><Link to="/messages">Messages</Link></Button>
      </Container>
    </div>
  );
}

export default Home;
