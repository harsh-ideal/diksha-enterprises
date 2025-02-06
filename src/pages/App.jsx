import React from 'react'; 
import {Col, Container, Row} from 'react-bootstrap';

import '../App.css'
import DikshaNavbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Outlet } from 'react-router-dom';



function App() {

  console.log("app.js ----")

  return (
    <Container fluid>
      <Row>
        <DikshaNavbar/>
        
      </Row>
      <main>
    <Outlet/>
    </main>
    <Row>
      
    <Footer/>
    </Row>
  </Container>
  );
}

export default App
