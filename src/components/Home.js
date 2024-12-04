import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Stats from './Stats'
import SlideCardMainEx from './SlideCardMainEx'
import ImageTextComponent from './ImageTextComponent'
import FooterEx from './Footer'
import Cards from './Cards'

const Home = () => {
  return (
    <div>
        <Header />
        <Carousel />
        <h1 className='my-5'>Our Products</h1>
        <Cards />
        <Stats />
        <SlideCardMainEx />
        <ImageTextComponent />
        <FooterEx />
    </div>
  )
}

export default Home