import React from 'react'
import { Navbar, Nav, Container, Card, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <Navbar bg="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>PRINCESS MOMO</Navbar.Brand>
                    </LinkContainer>
                    <LinkContainer to="/my-words">
      <Nav.Link>Words</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/blog-entries">
          <Nav.Link>Blog</Nav.Link>
      </LinkContainer>

      <LinkContainer to="/login">
      <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
      </LinkContainer>








<Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <Row>
    <Card style={{ width: '8rem', height: '7rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Chinese</Card.Title>
    <Card.Text>
      200 Words
    </Card.Text>
    
  </Card.Body>
</Card>

<Card style={{ width: '8rem', height: '7rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Japanese</Card.Title>
    <Card.Text>
      60 Words
    </Card.Text>
    
  </Card.Body>
</Card>

<Card style={{ width: '8rem', height: '7rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Spanish</Card.Title>
    <Card.Text>
      1000 Words
    </Card.Text>
    
  </Card.Body>
</Card>

<Card style={{ width: '8rem', height: '7rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>French</Card.Title>
    <Card.Text>
      60 Words
    </Card.Text>
    
  </Card.Body>
</Card>

<Card style={{ width: '8rem', height: '7rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Tagalog</Card.Title>
    <Card.Text>
      600 Words
    </Card.Text>
    
  </Card.Body>
</Card>
    
    
</Row>
   
    
    </Nav>
    
  </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </header>
    )
}

export default Header
