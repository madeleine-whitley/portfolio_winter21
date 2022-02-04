import { Navbar, Container } from 'react-bootstrap';

const MainNavbar = ({}) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
              Home
          </Navbar.Brand>
          <Navbar.Brand href="/about">
              About
          </Navbar.Brand>
          <Navbar.Brand href="/contacts">
              Contact 
          </Navbar.Brand>
          <Navbar.Brand href="/projects">
              Projects
          </Navbar.Brand>
          <Navbar.Brand href="/skills">
              Skills
          </Navbar.Brand>
          <Navbar.Brand href="/testimonials">
              Testimonials
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


export default MainNavbar;