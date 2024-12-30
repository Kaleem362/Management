import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

const BlackLabel = () => {
  const [subscriptionEmail, setSubscriptionEmail] = useState("");
  const SubscribeEmail = () => {
    if (!subscriptionEmail) {
      alert("Email must be entered !");
      return;
    } else {
      alert("Subscribed Newsletter Successfully ! ");
      setSubscriptionEmail("");
    }
  };
  return (
    <div className="flex items-center justify-center w-full -mb-10 bg-white">
      <div className="flex items-center justify-around h-48 w-[80%] bg-black rounded-full black-label">
        <h1 className="w-[50%] font-extrabold text-5xl text-white font-Manrope">
          Stay Upto Date About Our Latest Offers{" "}
        </h1>
        <div className="flex flex-col bg-black rounded-full email-box">
          <div className="relative flex subscription-button">
            <AiOutlineMail
              size={20}
              className="absolute text-slate-400 top-[18px] left-3"
            />
            <input
              type="email"
              placeholder="Enter your Email Address"
              className="px-12 py-4 border-none rounded-full outline-none w-72"
              onChange={(e) => setSubscriptionEmail(e.target.value)}
              value={subscriptionEmail}
            />
          </div>

          <button
            className="px-8 py-4 my-2 transition-all duration-1000 bg-white border rounded-full font-Manrope w-72 hover:bg-gradient-to-t hover:from-slate-700 hover:to-black hover:border-white hover:border hover:text-white"
            onClick={SubscribeEmail}
          >
            Subscribe to our newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlackLabel;
