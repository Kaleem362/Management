import React, { useContext, useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Store } from "../store/Context";
import { AiFillStar, AiOutlineStar, AiOutlineVerified } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
const Testimonial = () => {
  const { customers } = useContext(Store);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  const StarRating = ({ rating }) => {
    const totalStars = 5;
    const stars = [];

    // Convert rating to number and ensure it's between 0 and 5
    const normalizedRating = Math.min(Math.max(Number(rating) || 0, 0), 5);

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span key={i}>
          {i <= normalizedRating ? (
            <AiFillStar className="text-xl text-yellow-400" />
          ) : (
            <AiOutlineStar className="text-xl text-yellow-400" />
          )}
        </span>
      );
    }

    return <div className="flex">{stars}</div>;
  };

  return (
    <section className="px-6 py-10 testimonial-container">
      {/* Header Section */}
      <div className="flex items-center justify-between px-8 mx-auto mb-10 max-w-7xl">
        <h1 className="text-3xl font-bold uppercase md:text-5xl font-Manrope">
          Our Happy Customers
        </h1>
        <div className="flex gap-4">
          <button
            onClick={scrollLeft}
            className="transition-opacity hover:opacity-75"
            aria-label="Scroll left"
          >
            <FaArrowCircleLeft size={28} />
          </button>
          <button
            onClick={scrollRight}
            className="transition-opacity hover:opacity-75"
            aria-label="Scroll right"
          >
            <FaArrowCircleRight size={28} />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 pb-4 overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {customers.map((customer, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] h-[210px] my-2 bg-white rounded-lg shadow-lg p-4 border border-gray-200 transition-transform hover:scale-[1.02]"
          >
            <h3 className="flex items-start justify-start gap-1 mb-3 text-lg font-bold font-Manrope">
              {customer.name}
              <MdVerified className="mt-1 text-green-500" />
            </h3>
            <div className="flex items-center gap-2 mb-4">
              {/* <span className="font-medium"></span> */}
              <StarRating rating={customer.rate} />
            </div>
            <p className="text-gray-600 line-clamp-4">{customer.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
