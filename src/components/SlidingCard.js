import React from 'react';
import './SlidingCard.css';

const SlidingCard = () => {
  const cards = [
    { id: 1, title: 'They are so helpful in nature.', text: 'Vikram Abburi' },
    { id: 1, title: 'Quick response in Customer Service', text: 'Gourav Agarwal' },
    { id: 1, title: 'It has changed the way I manage my finances.', text: 'Abhishek Raut' },
    { id: 1, title: 'Services are really cooperative.', text: 'Pavani Dasari' },
    { id: 1, title: 'Best customer service 24/7.', text: 'Kumar Rajavarapu' },
    { id: 1, title: 'Interest rates are satisfactory.', text: 'Rakesh Pamidipati' },
    { id: 1, title: 'Will recommend to everyone.', text: 'Lavanya Challa' },
    { id: 1, title: 'Loan Mechanism is very good', text: 'Parvati' },
    { id: 1, title: 'They are so helpful in nature.', text: 'Vikram Abburi' },
    { id: 1, title: 'Quick response in Customer Service', text: 'Gourav Agarwal' },
    { id: 1, title: 'It has changed the way I manage my finances.', text: 'Abhishek Raut' },
    { id: 1, title: 'Services are really cooperative.', text: 'Pavani Dasari' },
    { id: 1, title: 'Best customer service 24/7.', text: 'Kumar Rajavarapu' },
    { id: 1, title: 'Interest rates are satisfactory.', text: 'Rakesh Pamidipati' },
    { id: 1, title: 'Will recommend to everyone.', text: 'Lavanya Challa' },
    { id: 1, title: 'Loan Mechanism is very good', text: 'Parvati' },
    { id: 1, title: 'They are so helpful in nature.', text: 'Vikram Abburi' },
    { id: 1, title: 'Quick response in Customer Service', text: 'Gourav Agarwal' },
    { id: 1, title: 'It has changed the way I manage my finances.', text: 'Abhishek Raut' },
    { id: 1, title: 'Services are really cooperative.', text: 'Pavani Dasari' },
    { id: 1, title: 'Best customer service 24/7.', text: 'Kumar Rajavarapu' },
    { id: 1, title: 'Interest rates are satisfactory.', text: 'Rakesh Pamidipati' },
    { id: 1, title: 'Will recommend to everyone.', text: 'Lavanya Challa' },
    { id: 1, title: 'Loan Mechanism is very good', text: 'Parvati' },
    { id: 1, title: 'They are so helpful in nature.', text: 'Vikram Abburi' },
    { id: 1, title: 'Quick response in Customer Service', text: 'Gourav Agarwal' },
    { id: 1, title: 'It has changed the way I manage my finances.', text: 'Abhishek Raut' },
    { id: 1, title: 'Services are really cooperative.', text: 'Pavani Dasari' },
    { id: 1, title: 'Best customer service 24/7.', text: 'Kumar Rajavarapu' },
    { id: 1, title: 'Interest rates are satisfactory.', text: 'Rakesh Pamidipati' },
    { id: 1, title: 'Will recommend to everyone.', text: 'Lavanya Challa' },
    { id: 1, title: 'Loan Mechanism is very good', text: 'Parvati' },
    { id: 1, title: 'They are so helpful in nature.', text: 'Vikram Abburi' },
    { id: 1, title: 'Quick response in Customer Service', text: 'Gourav Agarwal' },
    { id: 1, title: 'It has changed the way I manage my finances.', text: 'Abhishek Raut' },
    { id: 1, title: 'Services are really cooperative.', text: 'Pavani Dasari' },
    { id: 1, title: 'Best customer service 24/7.', text: 'Kumar Rajavarapu' },
    { id: 1, title: 'Interest rates are satisfactory.', text: 'Rakesh Pamidipati' },
    { id: 1, title: 'Will recommend to everyone.', text: 'Lavanya Challa' },
    { id: 1, title: 'Loan Mechanism is very good', text: 'Parvati' },
    { id: 1, title: 'They are so helpful in nature.', text: 'Vikram Abburi' },
    { id: 1, title: 'Quick response in Customer Service', text: 'Gourav Agarwal' },
    { id: 1, title: 'It has changed the way I manage my finances.', text: 'Abhishek Raut' },
    { id: 1, title: 'Services are really cooperative.', text: 'Pavani Dasari' },
    { id: 1, title: 'Best customer service 24/7.', text: 'Kumar Rajavarapu' },
    { id: 1, title: 'Interest rates are satisfactory.', text: 'Rakesh Pamidipati' },
    { id: 1, title: 'Will recommend to everyone.', text: 'Lavanya Challa' },
    { id: 1, title: 'Loan Mechanism is very good', text: 'Parvati' },
    { id: 1, title: 'They are so helpful in nature.', text: 'Vikram Abburi' },
    { id: 1, title: 'Quick response in Customer Service', text: 'Gourav Agarwal' },
    { id: 1, title: 'It has changed the way I manage my finances.', text: 'Abhishek Raut' },
    { id: 1, title: 'Services are really cooperative.', text: 'Pavani Dasari' },
    { id: 1, title: 'Best customer service 24/7.', text: 'Kumar Rajavarapu' },
    { id: 1, title: 'Interest rates are satisfactory.', text: 'Rakesh Pamidipati' },
    { id: 1, title: 'Will recommend to everyone.', text: 'Lavanya Challa' },
    { id: 1, title: 'Loan Mechanism is very good', text: 'Parvati' },
    { id: 1, title: 'They are so helpful in nature.', text: 'Vikram Abburi' },
    { id: 1, title: 'Quick response in Customer Service', text: 'Gourav Agarwal' },
    { id: 1, title: 'It has changed the way I manage my finances.', text: 'Abhishek Raut' },
    { id: 1, title: 'Services are really cooperative.', text: 'Pavani Dasari' },
    { id: 1, title: 'Best customer service 24/7.', text: 'Kumar Rajavarapu' },
    { id: 1, title: 'Interest rates are satisfactory.', text: 'Rakesh Pamidipati' },
    { id: 1, title: 'Will recommend to everyone.', text: 'Lavanya Challa' },
    { id: 1, title: 'Loan Mechanism is very good', text: 'Parvati' },
    { id: 1, title: 'They are so helpful in nature.', text: 'Vikram Abburi' },
    { id: 1, title: 'Quick response in Customer Service', text: 'Gourav Agarwal' },
    { id: 1, title: 'It has changed the way I manage my finances.', text: 'Abhishek Raut' },
    { id: 1, title: 'Services are really cooperative.', text: 'Pavani Dasari' },
    { id: 1, title: 'Best customer service 24/7.', text: 'Kumar Rajavarapu' },
    { id: 1, title: 'Interest rates are satisfactory.', text: 'Rakesh Pamidipati' },
    { id: 1, title: 'Will recommend to everyone.', text: 'Lavanya Challa' },
    { id: 1, title: 'Loan Mechanism is very good', text: 'Parvati' },
    { id: 1, title: 'They are so helpful in nature.', text: 'Vikram Abburi' },
    { id: 1, title: 'Quick response in Customer Service', text: 'Gourav Agarwal' },
    { id: 1, title: 'It has changed the way I manage my finances.', text: 'Abhishek Raut' },
    { id: 1, title: 'Services are really cooperative.', text: 'Pavani Dasari' },
    { id: 1, title: 'Best customer service 24/7.', text: 'Kumar Rajavarapu' },
    { id: 1, title: 'Interest rates are satisfactory.', text: 'Rakesh Pamidipati' },
    { id: 1, title: 'Will recommend to everyone.', text: 'Lavanya Challa' },
    { id: 1, title: 'Loan Mechanism is very good', text: 'Parvati' },
  ];

  return (
    <div className="carousel1-container">
        <div className="carousel1">
          {cards.map((card) => (
            <div key={card.id+100} className="card1">
              <h2 className="card-title1">{card.title}</h2>
              <p className="card-text1">{card.text}</p>
            </div>
          ))}
        </div>
  </div>
);
};

export default SlidingCard;
