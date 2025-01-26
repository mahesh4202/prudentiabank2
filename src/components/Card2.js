import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image3 from '../Assets/Main Page-Product.3.jpg'
import image4 from '../Assets/Main Page-Product.4.jpg'

function Card2() {
  return (
    <CardGroup className='container'>
      <Card className='mx-1 my-2'>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "700" }}>Fixed Deposit</Card.Title>
            <button class="learn-more mt-3 mb-1">
                <span class="bn3637 bn38" style={{ padding: "10px" }}>Learn More</span>
            </button>
        </Card.Body>
      </Card>
      <Card className='mx-1 my-2'>
        <Card.Img variant="top" src={image4} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "700" }}>Car Loan</Card.Title>
            <button class="learn-more mt-3 mb-1">
                <span class="bn3637 bn38" style={{ padding: "10px" }}>Learn More</span>
            </button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Card2;