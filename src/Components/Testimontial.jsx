import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Customers } from "../testimonialData";

const Testimontial = () => {
  const [customers, setCustomers] = useState([]);

  // Populate customers from JSON data
  useEffect(() => {
    setCustomers(Customers);
  }, []);

  return (
    <div className="testimonial-container">
      {/* Header */}
      <div className="flex items-center justify-between p-20 header-bar">
        <h1 className="text-5xl font-bold uppercase font-Manrope">
          Our Happy Customers
        </h1>
        <div className="flex gap-3 left-right-arrow">
          <FaArrowCircleLeft size={24} />
          <FaArrowCircleRight size={24} />
        </div>
      </div>

      {/* Customer Cards */}
      <div className="horizontol-scrollView">
        {customers.map((customer, index) => (
          <div key={index} className="customer-card">
            <span className="rating">{`Rating: ${customer.rating}`}</span>
            <h3 className="name">{customer.name}</h3>
            <p className="desc">{customer.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimontial;
