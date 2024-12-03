import React from "react";
import "./CompanyHistory.css";

function CompanyHistory(){
  return (
    <div className="history-container">
        <h2 className="history-title">Our History</h2>
      <div className="history-card">
        <p className="history-text">
          Founded in 2010, TechSpot began as a small startup with a big vision: to make technology accessible to everyone, everywhere. 
          Over the years, we have grown from a local tech company to a global leader, providing cutting-edge solutions and innovative tools that transform lives.
        </p>
        <p className="history-text">
          From the launch of our first flagship product to expanding into new markets, every milestone in our journey has been driven by a passion for innovation and a commitment to our customers.
        </p>
        <p className="history-text">
          Today, TechSpot stands as a testament to what can be achieved through hard work, creativity, and a dedication to making a positive impact in the world of technology.
        </p>
      </div>
    </div>
  );
};

export default CompanyHistory;
