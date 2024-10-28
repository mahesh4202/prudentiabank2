import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../Assets/Main Page-Product.1.jpg'
import image2 from '../Assets/Main Page-Product.2.jpg'
import image3 from '../Assets/Main Page-Product.3.jpg'
import image4 from '../Assets/Main Page-Product.4.jpg'

function CardEx() {
  return (
    <div className='my-5'>
      <h1 className='mb-5'>Our Products</h1>
      <Container className="d-flex">
        <Row>
    <Card style={{ width: '16rem' }} className='ms-3 mb-3'>
      <Card.Img variant="top" src={image1} className='mt-3' width={100} height={170}/>
      <Card.Body>
        <Card.Title>Home Loan</Card.Title>
        <Button variant="primary">Know more..</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem' }} className='ms-3 mb-3'>
      <Card.Img variant="top" src={image2} className='mt-3' width={100} height={170}/>
      <Card.Body>
        <Card.Title>Gold Loan</Card.Title>
        <Button variant="primary">Know more..</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem' }} className='ms-3 mb-3'>
      <Card.Img variant="top" src={image3} className='mt-3' width={100} height={170}/>
      <Card.Body>
        <Card.Title>Fixed Deposit</Card.Title>
        <Button variant="primary">Know more..</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '16rem' }} className='ms-3 mb-3'>
      <Card.Img variant="top" src={image4} className='mt-3' width={100} height={170}/>
      <Card.Body>
        <Card.Title>Car Loan</Card.Title>
        <Button variant="primary">Know more..</Button>
      </Card.Body>
    </Card>
        </Row>
      </Container>
    </div>
  );
}

export default CardEx;