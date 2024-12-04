import React from 'react'
import '../App.css';
import CounterEx from './Counter';

const Stats = () => {
  const counters = [
    { start: 0, end: 700, duration: 200000, label: 'Branches' },
    { start: 0, end: 50, duration: 200000, label: 'Products' },
    { start: 0, end: 10000, duration: 200000, label: 'Customers' },
    { start: 0, end: 2500, duration: 200000, label: 'Employees' },
    { start: 0, end: 1000, duration: 200000, label: 'ATMs' },
    { start: 0, end: 1000000, duration: 200000, label: 'Downloads' },
    { start: 0, end: 25000, duration: 200000, label: 'Reviews' }
  ];
  return (
    <div className='mt-5'>
      <h1 className='mb-5'>Our Stats</h1>
      <div className="counters-container">
        {counters.map((counter, index) => (
          <CounterEx
            key={index}
            start={counter.start}
            end={counter.end}
            duration={counter.duration}
            label={counter.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Stats
