import React from 'react'
import '../App.css';
import logo from '../Assets/Prudentia Bank.png'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import FooterEx from './Footer'
import UPIFirst from './UPIFirst';

const UPI = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link>
          <img src={logo} alt="Logo" />
          </Link>
          <Nav className='heading'>Prudentia Bank</Nav>
        </div>
        <Nav>
          <Link className='navlink' to="/">Home</Link>
          <Link className='navlink' to="/loan">Loan</Link>
          <Link className='navlink' style={{ backgroundColor: "white" , color: "black" , borderRadius: "20px" }}to="/upi">UPI</Link>
          <Link className='navlink' to="/mutualfunds">Mutual Funds</Link>
          <Link className='navlink' to="/contactus">Contact us</Link>
        </Nav>
      </div>
      <UPIFirst />
      <FooterEx />
    </div>
  )
}

export default UPI
