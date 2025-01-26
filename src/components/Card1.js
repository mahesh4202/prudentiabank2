import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import image1 from '../Assets/Main Page-Product.1.jpg'
import image2 from '../Assets/Main Page-Product.2.jpg'

function Card1() {
  return (
    <CardGroup className='container'>
    <Card className='mx-1 my-2'>
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title style={{ fontWeight: "700" }}>Home Loan</Card.Title>
            <button class="learn-more mt-3 mb-1">
                <span class="bn3637 bn38" style={{ padding: "10px" }}>Learn More</span>
            </button>
      </Card.Body>
    </Card>
      <Card className='mx-1 my-2'>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title style={{ fontWeight: "700" }}>Gold Loan</Card.Title>
            <button class="learn-more mt-3 mb-1">
                <span class="bn3637 bn38" style={{ padding: "10px" }}>Learn More</span>
            </button>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Card1;