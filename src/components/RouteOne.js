import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Loan from './Loan';
import Home from './Home';
import UPI from './UPI'
import MF from './MF'
import MFChart1 from './MFChart1';
import MFChart2 from './MFChart2';
import MFChart3 from './MFChart3';
import MFChart4 from './MFChart4';
import MFChart5 from './MFChart5';
import MFChart6 from './MFChart6';
import MFChart7 from './MFChart7';
import MFChart8 from './MFChart8';
import MFChart9 from './MFChart9';
import MFChart10 from './MFChart10';
import MFChart11 from './MFChart11';
import MFChart12 from './MFChart12';

const RootComponent = () => {
  return(
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/loan" exact Component={Loan} />
      <Route path="/upi" exact Component={UPI} />
      <Route path="/mutualfunds" exact Component={MF} />
      <Route path="/mfchart1" exact Component={MFChart1} />
      <Route path="/mfchart2" exact Component={MFChart2} />
      <Route path="/mfchart3" exact Component={MFChart3} />
      <Route path="/mfchart4" exact Component={MFChart4} />
      <Route path="/mfchart5" exact Component={MFChart5} />
      <Route path="/mfchart6" exact Component={MFChart6} />
      <Route path="/mfchart7" exact Component={MFChart7} />
      <Route path="/mfchart8" exact Component={MFChart8} />
      <Route path="/mfchart9" exact Component={MFChart9} />
      <Route path="/mfchart10" exact Component={MFChart10} />
      <Route path="/mfchart11" exact Component={MFChart11} />
      <Route path="/mfchart12" exact Component={MFChart12} />
    </Routes>
  )
};

export default RootComponent;
