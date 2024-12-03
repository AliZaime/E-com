import React from "react";
import "./CustomerTestimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    feedback:
      "TechSpot has completely transformed the way we work. Their innovative solutions are both reliable and efficient.",
    company: "CEO, FutureTech Inc.",
  },
  {
    name: "Michael Davis",
    feedback:
      "I've been a customer for years, and the level of service and support from TechSpot is unparalleled. Highly recommend!",
    company: "Founder, GreenTech Solutions",
  },
  {
    name: "Emily Carter",
    feedback:
      "TechSpot's tools are easy to use and incredibly powerful. They truly understand the needs of their customers.",
    company: "Operations Manager, CloudEra",
  },
];

function CustomerTestimonials() {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Customer Testimonials</h2>
      <div className="testimonials-card">  
        <p className="testimonials-intro">
          See what our customers have to say about their experience with TechSpot. We’re proud to be part of their success stories!
        </p>
        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
              <p className="testimonial-company">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
