import React from 'react'
import Header from './Header'
import Carousel from './Carousel'
import CardEx from './icons'
import Stats from './Stats'
import SlideCardMainEx from './SlideCardMainEx'
import ImageTextComponent from './ImageTextComponent'
import FooterEx from './Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Carousel />
        <CardEx />
        <Stats />
        <SlideCardMainEx />
        <ImageTextComponent />
        <FooterEx />
    </div>
  )
}

export default Home