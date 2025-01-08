import React, { useContext, useState } from "react";
import { auth } from "../Firebase/FirebaseConfig";
import { Store } from "../store/Context";
import { AiOutlineLogout } from "react-icons/ai";

const UserProfile = () => {
  const { profileView, setProfileView, Logout } = useContext(Store);
  return (
    <>
      {profileView && ( // Proper conditional rendering
        <div
          className="absolute right-0 z-50 flex flex-col h-auto p-2 text-white w-80 bg-slate-800 top-20"
          onMouseLeave={() => setProfileView(false)}
        >
          <div className="flex items-center justify-between gap-4 p-2 m-1 text-black bg-white rounded profile-img-name">
            <img
              src={auth.currentUser?.photoURL} // Use optional chaining
              alt=""
              className="w-10 h-10 rounded-full "
            />
            <h4 className="w-full font-bold font-Manrope">
              {auth.currentUser?.displayName || "Anonymous User"}
            </h4>
          </div>
          <div className="w-full setting">
            <ul className="flex flex-col w-full">
              <li className="p-2 m-1 text-black transition-all duration-200 bg-white font-Manrope hover:bg-slate-200">
                Settings
              </li>
              <li
                className="flex items-center justify-start gap-4 p-2 m-1 text-black transition-all duration-200 bg-white font-Manrope hover:bg-slate-200"
                onClick={Logout}
              >
                Log Out
                <AiOutlineLogout size={20} />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
