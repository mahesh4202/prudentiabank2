import React from 'react'
import './MFFirst.css'
import { Link } from 'react-router-dom';
import { TbArrowBigUpLinesFilled , TbArrowBigDownLinesFilled } from "react-icons/tb";

const MFFirst = () => {
   return (
    <div className='container mt-3'>
      <h1>Mutual Funds</h1>
      <div className='fixed_headers'>
        <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Fund Name</th>
                <th scope="col">1D</th>
                <th scope="col">1W</th>
                <th scope="col">1M</th>
                <th scope="col">6M</th>
                <th scope="col">1Y</th>
                <th scope="col">3Y</th>
                <th scope="col">5Y</th>
                <th scope="col">Max</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>SENSEX Fund</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />0.5%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />2.4%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />3.5%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />7%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />10%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />14.5%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />20.3%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />27.67%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart1">Invest</Link>
                  </a>
                </div>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>NIFTY Fund</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />0.99%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />1.47%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />3.5%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />5.69%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />8.65%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />10.49%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />14.89%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />20.67%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart2">Invest</Link>
                  </a>
                </div>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Large Cap Fund</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />1.37%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />2.94%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />4.69%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />7.46%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />10.63%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />14.87%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />19.32%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />23.86%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart3">Invest</Link>
                  </a>
                </div>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Small Cap Fund</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />4.56%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />3.85%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />3.89%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />7.84%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />8.78%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />14.56%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />20.56%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />25.41%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart4">Invest</Link>
                  </a>
                </div>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Mid Cap Fund</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />1.56%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />4.89%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />7.92%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />5.67%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />10.86%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />16.52%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />25.42%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />35.78%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart5">Invest</Link>
                  </a>
                </div>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>PSU Fund</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />3.87%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />7.93%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />7.1%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />4.89%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />6.8%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />10.78%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />19.6%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />30.67%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart6">Invest</Link>
                  </a>
                </div>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Gold Fund</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />3.86%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />6.97%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />10.76%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />5.89%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />6.98%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />10.78%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />28.91%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />36.87%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart7">Invest</Link>
                  </a>
                </div>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Debt Fund</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />2.65%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />3.98%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />4.72%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />6.98%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />8.28%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />10.27%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />12.67%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />14.87%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart8">Invest</Link>
                  </a>
                </div>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Growth Fund</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />3.87%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />4.97%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />6.99%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />8.34%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />10.75%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />15.87%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />20.45%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />24.97%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart9">Invest</Link>
                  </a>
                </div>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Tax Saving Fund</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />5.89%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />8.72%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />4.54%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />3.86%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />2.03%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />0.62%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />15.41%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />20.38%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart10">Invest</Link>
                  </a>
                </div>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>Flexi Cap Fund</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />3.76%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />2.64%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />5.87%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />4.56%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />6.45%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />8.64%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />2.94%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />10.52%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart11">Invest</Link>
                  </a>
                </div>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>Blue Chip Fund</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />2.35%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />5.8%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />4.65%</td>
                  <td style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />9.05%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />10.68%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />15.74%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />23.67%</td>
                  <td style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />30.21%</td>
                <div class="buttons-container">
                  <a href="!#">
                    <Link class="bn3637 bn38" to="/mfchart12">Invest</Link>
                  </a>
                </div>
                </tr>
            </tbody>
      </table>
    </div>
   </div>
  )
}

export default MFFirst