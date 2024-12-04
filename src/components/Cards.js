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
            <CCard className='mx-3' style={{ overflowX: "hidden"}}>
                <CCardImage orientation="top" src={image1} style={{ width: "100%" , height:"70%" }}/>
                <CCardBody>
                <CCardTitle className='mb-4'>Home Loan</CCardTitle>
                <button class="learn-more mb-3">
                <span class="bn3637 bn38" style={{ padding: "10px" }}>Learn More</span>
                </button>
                </CCardBody>
            </CCard>
            <CCard className='mx-3' style={{ overflowX: "hidden"}}>
                <CCardImage orientation="top" src={image2} />
                <CCardBody>
                <CCardTitle className='mb-4'>Gold Loan</CCardTitle>
                <button class="learn-more mb-3">
                <span class="bn3637 bn38" style={{ padding: "10px" }}>Learn More</span>
                </button>
                </CCardBody>
            </CCard>
            <CCard className='mx-3' style={{ overflowX: "hidden"}}>
                <CCardImage orientation="top" src={image3} />
                <CCardBody>
                <CCardTitle className='mb-4'>Fixed Deposit</CCardTitle>
                <button class="learn-more mb-3">
                <span class="bn3637 bn38" style={{ padding: "10px" }}>Learn More</span>
                </button>
                </CCardBody>
            </CCard>
            <CCard className='mx-3' style={{ overflowX: "hidden"}}>
                <CCardImage orientation="top" src={image4} />
                <CCardBody>
                <CCardTitle className='mb-4'>Car Loan</CCardTitle>
                <button class="learn-more mb-3">
                <span class="bn3637 bn38" style={{ padding: "10px" }}>Learn More</span>
                </button>
                </CCardBody>
            </CCard>
            </CCardGroup>
    </Container>
  )
}

export default Cards