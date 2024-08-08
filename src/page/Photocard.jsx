import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Photocard() {
  return (
<div style={{ padding:"10rem" }}>
  <Card style={{ width: '30rem', height: '20rem', padding: '2rem', justifyContent:"center",alignItems:"center", flexDirection: 'row', backgroundColor:"whitesmoke" }}>
    
    <div style={{ flex: '0 0 auto' }}>
      <Card.Img 
        style={{ borderRadius: '110rem', height: '10rem', width: '10rem', objectFit: 'cover',marginBottom:"4rem" }} 
        variant="top" 
        src="https://img.freepik.com/free-photo/confident-good-looking-beautiful-woman-with-blonde-dyed-hair-dressed-casual-clothes-looking-seriously_176420-15186.jpg" 
      />
    </div>
    
    <Card.Body style={{ flex: '1', marginLeft: '2rem' }}>
      <Card.Text>
        <h1 style={{ fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '0',color:"" }}>Jackqueline</h1>
        <h1 style={{ fontWeight: 'bold', fontSize: '1.4rem', marginTop: '0' }}>Thomson</h1>
        <p style={{ fontWeight: 'bold', justifyContent:""}}>M A N A G E R</p>
        
        <h6 style={{ fontWeight: 'lighter' }}>ID-123877788</h6>
        <h6 style={{ fontWeight: 'lighter' }}>556-123877788</h6>
        <h6 style={{ fontWeight: 'lighter' }}>hello@realygreatenis.com</h6>
        <br />
        <p>Card no. 12345</p>
      </Card.Text>
    </Card.Body>
    
  </Card>
</div>

    
  )
}

export default Photocard