// ContactUs.jsx
import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const team = [
    { 
      name: 'Ali Zaime', 
      role: 'Founder & CEO', 
      email: 'ali.zaime@example.com', 
      phone: '+212 600 000 001', 
      photo: '/membres_pic/ali_pic.jpg' 
    },
    { 
      name: 'Mohamed Amine Khatouf', 
      role: 'Product Manager', 
      email: 'amine.khatouf@example.com', 
      phone: '+212 600 000 002', 
      photo: '/membres_pic/amine_pic.jpg' 
    },
    { 
      name: 'Mohammed Faris', 
      role: 'Lead Developer', 
      email: 'faris.mohammed@example.com', 
      phone: '+212 600 000 003', 
      photo: '/membres_pic/faris_pic.jpg' 
    },
    { 
      name: 'Hamza Rais', 
      role: 'Marketing Specialist', 
      email: 'hamza.rais@example.com', 
      phone: '+212 600 000 004', 
      photo: '/membres_pic/hamza_pic.jpg' 
    },
    { 
      name: 'Youness Abouhafs', 
      role: 'Customer Support', 
      email: 'youness.abouhafs@example.com', 
      phone: '+212 600 000 005', 
      photo: '/membres_pic/abouhafs_pic.png' 
    },
  ];

  return (
    <>
    <h1 className="contact-title">Contact Our Team</h1>
    <div className="contact-us-container">
      
      <div className="team-list1">
        {team.map((member, index) => (
          <div className="team-member1" key={index}>
            <div className="member-info1">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <p>Email: <a href={`mailto:${member.email}`}>{member.email}</a></p>
              <p>Phone: {member.phone}</p>
            </div>
            <div className="member-photo1">
              <img src={member.photo} alt={member.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ContactUs;
