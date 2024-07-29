import './home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function HeadShot(){
return (
  <>
   

    <Container>
      <Row className='black white'>
        <Col className='left-half'>
     <p>some place holder text</p>
        </Col>
        <Col className ='right-half' >
        <img className='headshot' src="../../unnamed.jpg" alt="" />
        </Col>
      </Row>
    </Container>
  </>
);
}
