import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function App() {
  return (
    <div className="App">
      <Navbar id='nav1' expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home"> Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Contact" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Whatsapp</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Linkedin
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Github</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Phone
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div id='hero'></div>

    <div id='about'>
      <h1>About Me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam vel. Arcu risus quis varius quam. Semper feugiat nibh sed pulvinar proin gravida. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Turpis cursus in hac habitasse platea dictumst quisque. Elementum nibh tellus molestie nunc non blandit massa enim nec. Tortor at risus viverra adipiscing at. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Fermentum iaculis eu non diam phasellus. Tincidunt tortor aliquam nulla facilisi cras fermentum. Fusce ut placerat orci nulla pellentesque dignissim enim. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Quam quisque id diam vel quam elementum pulvinar etiam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam vel. Arcu risus quis varius quam. Semper feugiat nibh sed pulvinar proin gravida. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Turpis cursus in hac habitasse platea dictumst quisque. Elementum nibh tellus molestie nunc non blandit massa enim nec. Tortor at risus viverra adipiscing at. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Fermentum iaculis eu non diam phasellus. Tincidunt tortor aliquam nulla facilisi cras fermentum. Fusce ut placerat orci nulla pellentesque dignissim enim. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Quam quisque id diam vel quam elementum pulvinar etiam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius quam quisque id diam vel. Arcu risus quis varius quam. Semper feugiat nibh sed pulvinar proin gravida. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Turpis cursus in hac habitasse platea dictumst quisque. Elementum nibh tellus molestie nunc non blandit massa enim nec. Tortor at risus viverra adipiscing at. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Fermentum iaculis eu non diam phasellus. Tincidunt tortor aliquam nulla facilisi cras fermentum. Fusce ut placerat orci nulla pellentesque dignissim enim. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Quam quisque id diam vel quam elementum pulvinar etiam.</p>
      <Button variant="outline-warning">More...</Button>{' '}
    </div>

    <div id='skills'>
    <h1>My Skills</h1>
    <CardGroup>
      <Card>
        
        <Card.Body>
          <Card.Title>HTML</Card.Title>
        </Card.Body>
        
      </Card>
      <Card>
        
        <Card.Body>
          <Card.Title>CSS</Card.Title>
        </Card.Body>
        
      </Card>
      <Card>
        
        <Card.Body>
          <Card.Title>JavaScript</Card.Title>
        </Card.Body>
        
      </Card>
      <Card>
        
        <Card.Body>
          <Card.Title>Bootstrap</Card.Title>
        </Card.Body>
        
      </Card>
      
      
    </CardGroup>


    <CardGroup>
      
      <Card>
        
        <Card.Body>
          <Card.Title>MongoDB</Card.Title>
        </Card.Body>
        
      </Card>
      <Card>
        
        <Card.Body>
          <Card.Title>ExpressJS</Card.Title>
        </Card.Body>
        
      </Card>
      <Card>
        
        <Card.Body>
          <Card.Title>ReactJS</Card.Title>
        </Card.Body>
        
      </Card>
      <Card>
        
        <Card.Body>
          <Card.Title>NodeJS</Card.Title>
        </Card.Body>
        
      </Card>
      
    </CardGroup>
    </div>

    <footer>
      copyright &copy; 2024
    </footer>
    </div>
  );
}

export default App;
