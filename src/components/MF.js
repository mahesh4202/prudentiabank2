import React from 'react'
import logo from '../Assets/Prudentia Bank.png'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import MFFirst from './MFFirst'
import FooterEx from './Footer'

const MF = () => {
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
          <Link className='navlink' to="/upi">UPI</Link>
          <Link className='navlink' style={{ backgroundColor: "white" , color: "black" , borderRadius: "20px" }} to="/mutualfunds">Mutual Funds</Link>
          <Link className='navlink' to="/contactus">Contact us</Link>
        </Nav>
      </div>
      <MFFirst />
      <FooterEx />
    </div>
  )
}

export default MF