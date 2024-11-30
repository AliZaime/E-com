// AboutUs.jsx
import React from 'react';
import './AboutUs_style.css';

function AboutUs() {
  return (
    <div className="about-us">
      <section className="about-us-introduction">
        <h1>About Us</h1>
        <p>At [Company Name], we are committed to delivering the best in [product/service]. Our dedicated team aims to foster a culture of excellence and continuous improvement. With a focus on innovation, we strive to meet the needs of our clients and contribute positively to our community.</p>
      </section>

      <section className="about-us-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to deliver exceptional value to our customers through a combination of superior products, excellent customer service, and sustainable practices. We aim to exceed expectations and build lasting relationships with our clients.</p>
      </section>

      <section className="about-us-history">
        <h2>Company History</h2>
        <p>Founded in [Year], our company has grown from a small startup into an industry leader. Over the years, we have achieved significant milestones, and our journey continues as we strive for greater success and growth.</p>
      </section>

      <section className="about-us-testimonials">
        <h2>Customer Testimonials</h2>
        <blockquote>
          "The quality of the products and the outstanding customer service made my experience unforgettable. Highly recommend!" — Jane Doe
        </blockquote>
        <blockquote>
          "This company has truly changed the way I view [product/service]. Exceptional in every way!" — John Smith
        </blockquote>
      </section>
    </div>
  );
}

export default AboutUs;
