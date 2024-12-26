import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { Link } from "react-router";
import payPalIcon from "../assets/FooterIcons/payPalIcon.png";
import googlePayIcon from "../assets/FooterIcons/googlePayIcon.png";
import applePayIcon from "../assets/FooterIcons/applePay.png";
import masterCardIcon from "../assets/FooterIcons/masterCardIcon.png";
import visaIcon from "../assets/FooterIcons/visaIcon.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-around w-full min-h-64 bg-slate-200">
      <div className="flex items-center justify-around w-full p-10 first-section-footer">
        <div className="flex flex-col w-64 h-full gap-8 ">
          <Link to={"/"}>
            <h1 className="h-full text-4xl font-bold text-black font-Lilita">
              SHOP.CO
            </h1>
          </Link>
          <p className="text-lg text-black break-words font-Manrope">
            we have clothes, you wish to choose all the life, just visit and
            explore the best you need{" "}
          </p>
          <div className="flex items-center justify-start gap-4 social-icons">
            <a href="https://www.twitter.com">
              <AiFillTwitterCircle size={32} />
            </a>
            <a href="https://www.instagram.com">
              <AiFillInstagram size={32} />
            </a>
            <a href="https://www.facebook.com">
              <AiFillFacebook size={32} />
            </a>
            <a href="https://www.github.com/kaleem362">
              <AiFillGithub size={32} />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h5 className="mb-4 font-bold text-black font-Manrope">Company</h5>
          <a href="#" className="my-2 font-Manrope">
            About
          </a>
          <a href="#" className="my-2 font-Manrope">
            Features
          </a>
          <a href="#" className="my-2 font-Manrope">
            Works
          </a>
          <a href="#" className="my-2 font-Manrope">
            Career
          </a>
        </div>
        <div className="flex flex-col">
          <h5 className="mb-4 font-bold text-black font-Manrope">Help</h5>
          <a href="#" className="my-2 font-Manrope">
            Customer Support
          </a>
          <a href="#" className="my-2 font-Manrope">
            Delivery Details
          </a>
          <a href="#" className="my-2 font-Manrope">
            Terms & Conditions
          </a>
          <a href="#" className="my-2 font-Manrope">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col">
          <h5 className="mb-4 font-bold text-black font-Manrope">FAQ</h5>
          <a href="#" className="my-2 font-Manrope">
            Account
          </a>
          <a href="#" className="my-2 font-Manrope">
            Manage Deliveries
          </a>
          <a href="#" className="my-2 font-Manrope">
            Orders
          </a>
          <a href="#" className="my-2 font-Manrope">
            Payments
          </a>
        </div>
        <div className="flex flex-col">
          <h5 className="mb-4 font-bold text-black font-Manrope">Resources</h5>
          <a href="#" className="my-2 font-Manrope">
            Free eBooks
          </a>
          <a href="#" className="my-2 font-Manrope">
            Development Tutorials
          </a>
          <a href="#" className="my-2 font-Manrope">
            How to - Blog
          </a>
          <a href="#" className="my-2 font-Manrope">
            Youtube Paylist
          </a>
        </div>
      </div>
      <hr className="w-[90%] h-0.5 bg-slate-400" />
      <div className="flex items-start justify-between w-full px-20 Copyright-content-subfooter">
        <p className="font-Manrope">
          Shop.co &copy; 2002-2025, All Rights Reserved
        </p>
        <div className="flex justify-between w-auto payment-icons">
          <img src={payPalIcon} alt="" className="w-12 h-12 mx-2" />
          <img src={googlePayIcon} alt="" className="w-12 h-12 mx-2" />
          <img src={applePayIcon} alt="" className="w-12 h-12 mx-2" />
          <img src={masterCardIcon} alt="" className="w-12 h-12 mx-2" />
          <img src={visaIcon} alt="" className="w-12 h-12 mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
