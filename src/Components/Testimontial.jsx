import React, { useState, useEffect, useContext } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Customers } from "./testimonialData";
import { Store } from "../store/Context";

const Testimontial = () => {
  const { customers } = useContext(Store);

  // Populate customers from JSON data

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
      {/* height: 300px; width: 300px; display: flex ; flex-direction: column;
      gap: 10px; font-family: 'Manrope'; padding: 10px; margin: 0px 10px; */}

      <div className="flex w-full p-4 overflow-x-scroll bg-yellow whitespace-nowrap">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="customer-card max-w-[400px] h-[400px] whitespace-pre-wrap flex flex-col gap-2 font-Manrope p-4 mx-4 bg-slate-100 rounded-lg border border-black"
          >
            <span className="rating text-start font-Manrope">
              {`Rating: ${customer.rating}`}
            </span>
            <h3 className="text-lg font-bold name">{customer.name}</h3>
            <p className="break-words">{customer.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimontial;
