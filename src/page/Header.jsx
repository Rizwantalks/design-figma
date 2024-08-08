import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button'; // Import Button
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Header() {
    return (
      <>
       <Navbar expand="lg" className="bg-body-tertiary" style={{ padding: "1em", height: "auto", backgroundColor: "white", borderBottom: "2px solid whitesmoke" }}>
      <Container fluid>
        <Navbar.Brand href="#home" style={{ display: "flex", alignItems: "center" }}>
          <img  src="https://s3.amazonaws.com/freestock-prod/450/freestock_570359401.jpg" alt="Logo"  height="35px" 
            style={{ marginRight: "10px" }} />

          <p style={{ fontWeight: "bold", fontSize: "1.1rem", fontFamily: "sans-serif", margin: "0" }}>
            Untitled UI </p>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="ms-5"><h6>Home</h6></Nav.Link>
            <Nav.Link href="#home" className="ms-5"><h6>Products</h6></Nav.Link>
            <Nav.Link href="#home" className="ms-5"><h6>Resources</h6></Nav.Link>
            <Nav.Link href="#home" className="ms-5"><h6>Pricing</h6></Nav.Link>
          </Nav>

          <div className="d-flex align-items-center">
            <Button variant="" className="me-4">Log In</Button>
            <Button style={{ color: "white", backgroundColor: "rgb(124, 92, 173)" }}>Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <br />
    <div className='container-fluid'>
    <div style={{padding:"1.5rem",width:"100%"}}>
        <p style={{fontWeight:"bold",color:"rgb(124, 92, 173)"}}>published 13 jan 2022</p>
        <p  style={{fontWeight:"bold",color:"black",fontSize:"1.6rem",fontFamily:"sans-serif"}}>A Converstation With Lucy Bond</p>
    <h6 style={{width:"75%",color:"gray"}}>Lucy Bond is an interior desighner who started her carrer in newsalnd  hjgg guyguyguy gyuworking for large</h6>
    <h6 style={{width:"75%",color:"gray"}}>architecture filnms.. wWe chatted her gyuguyuyfy about deighn and tarting own studio</h6>
    
    </div>
    
       <div style={{padding:"1.5em"}}>
       <Row>
      <div className="col md-5">
    
    <img style={{height:"45rem",width:"29rem"}} src="https://th.bing.com/th/id/OIP.cGJiPFlua5ZSYaiw_zEzfQHaJQ?w=1080&h=1350&rs=1&pid=ImgDetMain" alt="" />
      </div>
    
    
      <div className="col md-6">
      
    
        <img style={{width:"170%",height:"70%"}} src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1224&fit=crop&ixid=eyJhcHBfaWQiOjcyNTgzfQ&auto=format&h=432" alt="" />
      </div>

      <div className="col md-1">
      
    
 
    </div>
       </Row>
        </div>
    
    <br />
        <div style={{justifyContent:"center",alignItems:"center"}}>
            <Row>

                <div className="col-md-2"></div>

                <div className="col-md-8">
                    <h6  style={{color:"gray"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque placeat deserunt commodi? Officiis veniam maxime praesentium? Quas deleniti, iste fuga nostrum, 
                        a incidunt debitis illum atque obcaecati,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorum doloremque quas neque tempora repudiandae earum soluta, vel debitis aperiam reprehenderit quam,
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, sed in nisi ipsam laudantium deleniti dignissimos facere ea eaque 
                        magnam pariatur! Dolorem eum necessitatibus fugit excepturi sunt odio officiis incidunt? omnis, cupiditate id laborum temporibus pariatur laudantium unde?dolore accusamus assumenda.</h6>

                </div>

                <div className="col-md-2"></div>
            </Row>

        </div>
   </div>

      </>
    );
  }
  
  export default Header;
  
