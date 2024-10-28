import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loan from './Loan';
import Home from './Home';
import UPI from './UPI'
import MF from './MF'

const RootComponent = () => {
  return(
    <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/loan" exact Component={Loan} />
      <Route path="/upi" exact Component={UPI} />
      <Route path="/mutualfunds" exact Component={MF} />
    </Routes>
  )
};

export default RootComponent;
