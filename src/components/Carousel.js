import React from 'react'
import carousel1 from '../Assets/Carousel1.jpg'
import carousel2 from '../Assets/Carousel2.jpg'
import carousel3 from '../Assets/Carousel3.jpg'

const Carousel = () => {
  return (
    <div class="container h-50 mt-4">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carousel1} alt="..." class="d-block w-100" style={{ height: "400px" }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>One Click Banking</h5>
        <p>All Banking Services available at one click.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={carousel2} alt="..." class="d-block w-100" style={{ height: "400px" }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Prudentia Bank App</h5>
        <p>A app for all your Digital Payments.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={carousel3} alt="..." class="d-block w-100" style={{ height: "400px" }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Value for Deposits</h5>
        <p>We value your Deposits with proper interest rates.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
