import React from 'react';
import './CustomerTestimonials.scss';

import rohit from '../assets/rohit.png';
import alan from '../assets/alan.png';
import mark from '../assets/mark.png';

const testimonials = [
  {
    name: 'Rohit Mehra',
    title: 'CFO, XYZ',
    text: 'ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.',
    image: rohit, 
    cardClass: 'card-1'
  },
  {
    name: 'Alan Turing',
    title: 'CFO, XYZ',
    text: 'ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.',
    image: alan,
    cardClass: 'card-2'
  },
  {
    name: 'Mark Jacob',
    title: 'CEO, XYZ',
    text: 'ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.',
    image: mark, 
    cardClass: 'card-3'
  }
];

const CustomerTestimonials = () => {
  return (
    <section className="testimonials">
      <h2>Our customers love us</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial, index) => (
          <div className={`card ${testimonial.cardClass}`} key={index}>
            <p>{testimonial.text}</p>
            <div className="author">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
