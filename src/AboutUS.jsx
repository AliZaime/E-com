// AboutUs.jsx
import React from 'react';
import './AboutUs_style.css';

function AboutUs() {
  return (
    <>
      <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-description">
        <h2>Welcome to TechSpot</h2>
        <p>
          TechSpot is your ultimate destination for cutting-edge electronic products. Whether you are looking for the latest smartphones, high-performance laptops, or innovative gadgets, we are here to provide you with top-quality options at competitive prices. Our mission is to simplify your tech shopping experience, offering a reliable and enjoyable platform for technology enthusiasts. We are driven by a passion for innovation and a commitment to delivering the best service to our customers. With a team of experts and a curated selection of products, TechSpot is your trusted partner in embracing the future of technology.
        </p>
      </section>
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/membres_pic/ali_pic.jpg" alt="Ali" />
            <h3>Ali Zaime</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="/membres_pic/amine_pic.jpg" alt="Amine" />
            <h3>Mohamed Amine Khatouf</h3>
            <p>Product Manager</p>
          </div>
          <div className="team-member">
            <img src="/membres_pic/faris_pic.jpg" alt="Mohammed" />
            <h3>Mohammed Faris</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="/membres_pic/hamza_pic.jpg" alt="Hamza" />
            <h3>Hamza Rais</h3>
            <p>Marketing Specialist</p>
          </div>
          <div className="team-member">
            <img src="/membres_pic/abouhafs_pic.png" alt="Youness" />
            <h3>Youness Abouhafs</h3>
            <p>Customer Support</p>
          </div>
        </div>
      </section>
    </div>
    </>

    /*{/* <div className="about-us">
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
    </div> }*/

  );
}

export default AboutUs;
