import React from 'react'
import { CCard , CCardImage , CCardTitle , CCardBody , CCardGroup} from '@coreui/react'
import image1 from '../Assets/Main Page-Product.1.jpg'
import image2 from '../Assets/Main Page-Product.2.jpg'
import image3 from '../Assets/Main Page-Product.3.jpg'
import image4 from '../Assets/Main Page-Product.4.jpg'
import { Container } from 'react-bootstrap'
import './Cards.css'

const Cards = () => {
  return (
    <Container>
        <CCardGroup>
            <CCard className='mx-3'>
                <CCardImage orientation="top" src={image1} style={{ width: "100%" , height:"70%" }}/>
                <CCardBody>
                <CCardTitle>Home Loan</CCardTitle>
                <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
                </button>
                </CCardBody>
            </CCard>
            <CCard className='mx-3'>
                <CCardImage orientation="top" src={image2} />
                <CCardBody>
                <CCardTitle>Gold Loan</CCardTitle>
                <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
                </button>
                </CCardBody>
            </CCard>
            <CCard className='mx-3'>
                <CCardImage orientation="top" src={image3} />
                <CCardBody>
                <CCardTitle>Fixed Deposit</CCardTitle>
                <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
                </button>
                </CCardBody>
            </CCard>
            <CCard className='mx-3'>
                <CCardImage orientation="top" src={image4} />
                <CCardBody>
                <CCardTitle>Car Loan</CCardTitle>
                <button class="learn-more">
                <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
                </button>
                </CCardBody>
            </CCard>
            </CCardGroup>
    </Container>
  )
}

export default Cards