import React from 'react'
import './Sectioncount.css'
import { Container } from 'react-bootstrap';
import { BsPatchQuestion } from "react-icons/bs";
import { ImHappy } from "react-icons/im";
import { CiBank } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";

const Sectioncount = () => {
  return (
    <Container>
        <div class="row d-flex">
            <div class="column">
                <div class="card58">
                <p><CiBank/></p>
                <h3>1500+</h3>
                <p>Branches</p>
                </div>
            </div>
            <div class="column">
                <div class="card58">
                <p><BsPatchQuestion/></p>
                <h3>5600+</h3>
                <p>Queries solved</p>
                </div>
            </div>
            <div class="column">
                <div class="card58">
                <p><ImHappy/></p>
                <h3>10000+</h3>
                <p>Happy Customers</p>
                </div>
            </div>
            <div class="column">
                <div class="card58">
                <p><RiCustomerService2Line/></p>
                <h3>24/7</h3>
                <p>Support</p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Sectioncount