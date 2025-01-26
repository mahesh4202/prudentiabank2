import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function FooterEx() {
  return (
    <MDBFooter style={{ backgroundColor: "#e1e1e1" , color: "#ffffff"}} className='text-center text-lg-start text-muted'>
      <section>
        <MDBContainer className='text-center text-md-start mt-2'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                prudentia bank
              </h6>
              <p>
                Our website and application are there to cater all your financial needs.
              </p>
            </MDBCol>
            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <Link style={{ textDecoration: "none" }} to='/loan' className='text-reset'>
                  Loan
                </Link>
              </p>
              <p>
                <Link style={{ textDecoration: "none" }} to="/upi" className='text-reset'>
                  UPI
                </Link>
              </p>
              <p>
                <Link style={{ textDecoration: "none" }} to="/mutualfunds" className='text-reset'>
                  Mutual Funds
                </Link>
              </p>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-2'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' style={{ textDecoration: "none" }} className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' style={{ textDecoration: "none" }} className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>
            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' />
                35-123, Whitefield, Pune
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' />
                info@prudentiabank.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' /> +91-9327246597
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center p-4' style={{ backgroundColor: '#e1e1e1' }}>
        © 2024 Copyright: 
        <a className='text-reset fw-bold' href='https://prudentiabank.com/'>
          prudentiabank.com
        </a>
      </div>
    </MDBFooter>
  );
}