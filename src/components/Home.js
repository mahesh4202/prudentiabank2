import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import SlideCardMainEx from './SlideCardMainEx'
import ImageTextComponent from './ImageTextComponent'
import FooterEx from './Footer'
import Card1 from './Card1'
import Card2 from './Card2'
import CustReview from './CustReview'

const Home = () => {
  return (
    <div>
        <Header />
        <Carousel />
        <h1 className='mt-5'>Our Products</h1>
        <Card1 />
        <Card2 />
        <SlideCardMainEx />
        <h1>Rate us</h1>
        <CustReview />
        <ImageTextComponent />
        <FooterEx />
    </div>
  )
}

export default Home