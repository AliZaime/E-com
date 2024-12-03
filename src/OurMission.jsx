import React from 'react';
import './OurMission.css';

function OurMission() {
  return (
    <div className="mission-container">
      <header className="mission-header">
        <h1>Our Mission</h1>
      </header>
      <section className="mission-description">
        <h2>Empowering the Future with Technology</h2>
        <p>
          At TechSpot, our mission is to make advanced technology accessible to everyone. 
          We believe that innovation should not be limited by geography, financial constraints, 
          or expertise. That’s why we work tirelessly to provide high-quality tech products 
          and educational resources that inspire creativity and improve lives.
        </p>
        <p>
          Our vision is to bridge the gap between people and the tools they need to succeed 
          in a rapidly evolving digital landscape. Whether it’s through our curated 
          selection of devices or our commitment to exceptional customer service, we strive 
          to empower individuals and businesses to achieve their goals.
        </p>
        <p>
          Join us in embracing the possibilities of tomorrow. Together, we can build a 
          world where technology becomes a driving force for positive change and innovation.
        </p>
      </section>
    </div>
  );
};

export default OurMission;