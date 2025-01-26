import React from 'react'
import './UPI.css'
import { Link } from 'react-router-dom';
import { FaCar, FaChevronCircleRight, FaHeartbeat } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RiBankFill, RiEBikeFill } from "react-icons/ri";
import { BsQrCode } from "react-icons/bs";
import { FaSatelliteDish } from "react-icons/fa";
import { GiArmBandage, GiKitchenTap , GiLightBulb } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { MdTrain } from "react-icons/md";
import { MdFlightTakeoff } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { GoGraph } from "react-icons/go";

const UPIFirst = () => {
  
  return (
    <div className='container'>
      <div className='mt-3'>
        <h1><b>Send Money</b></h1>
        <div className='d-flex'>
          <div className='my-2 mx-3 card2'>
            <Link>
              <IoPersonSharp className='icons'/>
              <h3 className='icontext'>To Contacts</h3>
            </Link>
          </div>
          <div className='my-2 mx-3 card2'>
            <Link>
              <RiBankFill className='icons'/>
              <h3 className='icontext'>To Bank A/C</h3>
            </Link>
          </div>
          <div className='my-2 mx-3 card2'>
            <Link>
              <BsQrCode className='icons'/>
              <h3 className='icontext'>Scan QR</h3>
            </Link>
          </div>
          <div>
            <Link>
              <FaChevronCircleRight className='right'/>
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <h1><b>Pay Bills</b></h1>
        <div className='d-flex'>
          <div className='my-2 mx-3 card2'>
            <Link>
              <FaSatelliteDish className='icons'/>
              <h3 className='icontext'>DTH Bill</h3>
            </Link>
          </div>
          <div className='my-2 mx-3 card2'>
            <Link>
              <GiKitchenTap className='icons'/>
              <h3 className='icontext'>Water Bill</h3>
            </Link>
          </div>
          <div className='my-2 mx-3 card2'>
            <Link>
              <GiLightBulb className='icons'/>
              <h3 className='icontext'>Electricity Bill</h3>
            </Link>
          </div>
          <div>
            <Link>
              <FaChevronCircleRight className='right'/>
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <h1><b>Book your Tickets</b></h1>
        <div className='d-flex'>
          <div className='my-2 mx-3 card2'>
            <Link>
              <BiCameraMovie className='icons'/>
              <h3 className='icontext'>Movie Tickets</h3>
            </Link>
          </div>
          <div className='my-2 mx-3 card2'>
            <Link>
              <MdTrain className='icons'/>
              <h3 className='icontext'>Train Tickets</h3>
            </Link>
          </div>
          <div className='my-2 mx-3 card2'>
            <Link>
              <MdFlightTakeoff className='icons'/>
              <h3 className='icontext'>Flight Tickets</h3>
            </Link>
          </div>
          <div>
            <Link>
              <FaChevronCircleRight className='right'/>
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <h1><b>Loan</b></h1>
        <div className='d-flex'>
          <div className='my-2 mx-3 card2'>
            <Link>
              <IoBookSharp className='icons'/>
              <h3 className='icontext'>Education Loan</h3>
            </Link>
          </div>
          <div className='my-2 mx-3 card2'>
            <Link>
              <RiEBikeFill className='icons'/>
              <h3 className='icontext'>Vehicle Loan</h3>
            </Link>
          </div>
          <div className='my-2 mx-3 card2'>
            <Link>
              <GoGraph className='icons'/>
              <h3 className='icontext'>Mutual Fund Loan</h3>
            </Link>
          </div>
          <div>
            <Link>
              <FaChevronCircleRight className='right'/>
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-3'>
        <h1><b>Insurance</b></h1>
        <div className='d-flex'>
          <div className='my-2 mx-3 card2'>
            <Link>
              <FaCar className='icons'/>
              <h3 className='icontext'>Car Insurance</h3>
            </Link>
          </div>
          <div className='my-2 mx-3 card2'>
            <Link>
              <FaHeartbeat className='icons'/>
              <h3 className='icontext'>Health Insurance</h3>
            </Link>
          </div>
          <div className='my-2 mx-3 card2'>
            <Link>
              <GiArmBandage className='icons'/>
              <h3 className='icontext'>Accident</h3>
            </Link>
          </div>
          <div>
            <Link>
              <FaChevronCircleRight className='right'/>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UPIFirst
