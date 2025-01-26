import React from 'react'
import { VictoryChart, VictoryTheme, VictoryLine } from "victory";
import { Container } from 'react-bootstrap';
import { TbArrowBigUpLinesFilled , TbArrowBigDownLinesFilled} from "react-icons/tb";
import { Link } from 'react-router-dom';

const series = [
    {
      name: "Canada",
      data: [
        0.5100002, 5.2650003, 6.201,
        7.8010006, 9.694, 11.214001,
        11.973001, 12.250001, 12.816001,
        13.413001, 13.626961, 14.30356,
        15.295461,
      ],
    },
  ];
  
  function Chart1() {
    return (
      <Container className='d-flex'>
        <div style={{ width: "50%" }}>
            <VictoryChart theme={VictoryTheme.clean}>
                <VictoryLine
                    data={series[0].data.map(
                    (d, i) => ({
                        x: i + 2012,
                        y: d,
                    }),
                    )}
                />
            </VictoryChart>
        </div>
        <div style={{ width: "50%" }}>
          <div>
            <h4>Mid Cap Fund</h4>
          </div>
          <div style={{ borderBottom: "4px solid" }}></div>
          <div className='d-flex'>
            <div style={{ width: "20%" , textAlign: "center" , borderRight: "1px solid" , fontWeight: "600" , fontSize: "18px" , borderLeft: "1px solid" }}>S.No</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontWeight: "600" , fontSize: "18px" }}>Period</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontWeight: "600" , fontSize: "18px" }}>% Change</div>
          </div>
          <div style={{ borderBottom: "1px solid" }}></div>
          <div className='d-flex'>
            <div style={{ width: "20%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" , borderLeft: "1px solid" }}>1</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" }}>1 Day</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" ,}}><span style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />1.56%</span></div>
          </div>
          <div style={{ borderBottom: "1px solid" }}></div>
          <div className='d-flex'>
            <div style={{ width: "20%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" , borderLeft: "1px solid" }}>2</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" }}>1 Week</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" ,}}><span style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />4.89%</span></div>
          </div>
          <div style={{ borderBottom: "1px solid" }}></div>
          <div className='d-flex'>
            <div style={{ width: "20%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" , borderLeft: "1px solid" }}>3</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" }}>1 Month</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" ,}}><span style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />7.92%</span></div>
          </div>
          <div style={{ borderBottom: "1px solid" }}></div>
          <div className='d-flex'>
            <div style={{ width: "20%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" , borderLeft: "1px solid" }}>4</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" }}>6 Months</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" ,}}><span style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />5.67%</span></div>
          </div>
          <div style={{ borderBottom: "1px solid" }}></div>
          <div className='d-flex'>
            <div style={{ width: "20%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" , borderLeft: "1px solid" }}>5</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" }}>1 Year</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" ,}}><span style={{ color: "#FF0000" }}><TbArrowBigDownLinesFilled />10.86%</span></div>
          </div>
          <div style={{ borderBottom: "1px solid" }}></div>
          <div className='d-flex'>
            <div style={{ width: "20%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" , borderLeft: "1px solid" }}>6</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" }}>3 Years</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" ,}}><span style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />16.52%</span></div>
          </div>
          <div style={{ borderBottom: "1px solid" }}></div>
          <div className='d-flex'>
            <div style={{ width: "20%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" , borderLeft: "1px solid" }}>7</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" }}>5 Years</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" ,}}><span style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />25.42%</span></div>
          </div>
          <div style={{ borderBottom: "1px solid" }}></div>
          <div className='d-flex'>
            <div style={{ width: "20%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" , borderLeft: "1px solid" }}>8</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" }}>Max</div>
            <div style={{ width: "40%" , textAlign: "center" , borderRight: "1px solid" , fontSize: "16px" ,}}><span style={{ color: "#00BE00" }}><TbArrowBigUpLinesFilled />35.78%</span></div>
          </div>
          <div style={{ borderBottom: "1px solid" }}></div>
          <div className='d-flex my-3'>
            <div style={{ width: "50%" , alignItems: "center" }}>
              <a href="!#">
                <Link class="bn3637 bn38" to="/mutualfunds">Proceed</Link>
              </a>
            </div>
            <div style={{ width: "50%" , alignItems: "center" }}>
              <a href="!#">
                <Link class="bn3637 bn38" to="/mutualfunds">Go Back</Link>
              </a>
            </div>
          </div>
          </div>
      </Container>
    );
  }

  export default Chart1;