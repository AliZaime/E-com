import React from "react";
import "./ReturnPolicy.css";

function ReturnPolicy() {
  return (
    <>
    <h1 className="return-policy-title">Return Policy</h1>
    <div className="return-policy-container">
      
      <p className="return-policy-description">
        We value our customers and aim to provide a hassle-free return process. Please read the following details carefully to understand our return policy.
      </p>

      <div className="policy-section">
        <h2 className="section-title">Eligibility for Returns</h2>
        <ul className="policy-list">
          <li>Items must be returned within 30 days of purchase.</li>
          <li>Items must be unused and in their original packaging.</li>
          <li>Proof of purchase is required for all returns.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2 className="section-title">Non-Returnable Items</h2>
        <ul className="policy-list">
          <li>Gift cards.</li>
          <li>Downloadable software products.</li>
          <li>Perishable goods such as food and flowers.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2 className="section-title">Return Process</h2>
        <ol className="policy-list">
          <li>Contact our support team to initiate a return request.</li>
          <li>Pack the item securely, including all original parts and accessories.</li>
          <li>Ship the item to the address provided by our support team.</li>
        </ol>
      </div>

      <div className="policy-section">
        <h2 className="section-title">Refunds</h2>
        <p className="policy-text">
          Once we receive your return, we will inspect the item and notify you of the status of your refund. If approved, the refund will be processed to your original payment method within 7-10 business days.
        </p>
      </div>

      <div className="policy-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="policy-text">
          For any questions or concerns regarding returns, please contact our support team at <a href="mailto:support.techspot@gmail.com">support.techspot@gmail.com</a>.
        </p>
      </div>
    </div>
    </>
  );
};

export default ReturnPolicy;
