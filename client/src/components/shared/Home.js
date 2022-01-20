import { Image, Container, Row, Col } from 'react-bootstrap';
const Home = ({}) => (
  <>
    <Container fluid>
      <Row>
        <Col>
    <h1 class='text-center'>Madeleine Whitley</h1>
    <h2 class='text-center'>Web Developer based in Salt Lake City, UT</h2>
    </Col>
    </Row>
    <Row>
        <Col>
    <div class="text-center">
      <Image src="https://images.unsplash.com/photo-1642553517785-f1daee6ba12d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt='landscape' width="500px" />
    </div>
    
    </Col>
    </Row>

    </Container>
  </>
)

export default Home;