import React, { useState, useEffect } from 'react';
import './Counter.css';

const CounterEx = ({ start, end, duration, label }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;
    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(start + (end - start) * percentage);
      setCount(currentCount);
      if (progress < duration) {
        requestAnimationFrame(animateCount);
      }
    };
    requestAnimationFrame(animateCount);
  }, [start, end, duration]);

  return (
    <div className="counter-container">
      <div className="counter">
        <span>{count}</span>
      </div>
      {label && <p className="counter-label">{label}</p>}
    </div>
  );
};

export default CounterEx;