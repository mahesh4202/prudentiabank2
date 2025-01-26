import * as React from 'react';
import './Loan.css';
import personalloan from '../Assets/personalloan.jpg'
import carloan from '../Assets/carloan.jpg..jpg'
import propertyloan from '../Assets/propertyloan.jpg'
import educationloan from '../Assets/educationloan.jpg'
import businessloan from '../Assets/businessloan.jpg'
import agricultureloan from '../Assets/agricultureloan.jpg'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LoanFirst() {
  return (
    <div className='container'>
      <div className='d-flex'>
      <Link className='my-5 mx-3 cards' style={{ width: '20rem' }}>
        <Card.Img variant="top" src={personalloan} />
        <Card.Body>
          <Card.Title className='cardtext'>Personal Loan</Card.Title>
        </Card.Body>
      </Link>
      <Link className='my-5 mx-3 cards' style={{ width: '20rem' }}>
        <Card.Img variant="top" src={carloan} />
        <Card.Body >
          <Card.Title className='cardtext'>Car Loan</Card.Title>
        </Card.Body>
      </Link>
      <Link className='my-5 mx-3 cards' style={{ width: '20rem' }}>
        <Card.Img variant="top" src={propertyloan} />
        <Card.Body>
          <Card.Title className='cardtext'>Property Loan</Card.Title>
        </Card.Body>
      </Link>
      </div>
      <div className='d-flex'>
      <Link className='my-5 mx-3 cards' style={{ width: '20rem' }}>
        <Card.Img variant="top" src={businessloan} />
        <Card.Body>
          <Card.Title className='cardtext'>Business Loan</Card.Title>
        </Card.Body>
      </Link>
      <Link className='my-5 mx-3 cards' style={{ width: '20rem' }}>
      <Card.Img variant="top" src={educationloan} />
        <Card.Body>
          <Card.Title className='cardtext'>Business Loan</Card.Title>
        </Card.Body>
      </Link>
      <Link className='my-5 mx-3 cards' style={{ width: '20rem' }}>
        <Card.Img variant="top" src={agricultureloan} />
        <Card.Body>
          <Card.Title className='cardtext'>Agricultural Loan</Card.Title>
        </Card.Body>
      </Link>
      </div>
    </div>
  );
}
export default LoanFirst;