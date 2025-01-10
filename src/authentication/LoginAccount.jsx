import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/FirebaseConfig";

const LoginAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  //Login user function
  const userLogin = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      setErrorValue("confirm password doesn't match");
      return;
    }

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.table(user);
      console.log("login successful");
      navigate("/");
    } catch (error) {
      // Access the `code` property from the Firebase error object
      const errorCode = error.code;

      if (errorCode === "auth/wrong-password") {
        setErrorValue("Incorrect password! try again.");
      } else if (errorCode === "auth/user-not-found") {
        setErrorValue("No user found with current email");
      } else if (errorCode === "auth/invalid-email") {
        setErrorValue("Invalid email !");
      } else {
        setErrorValue("Something went wrong! try creating an account");
      }

      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-slate-900">
        <marquee
          behavior="scroll"
          direction="left"
          speed="normal"
          className="font-extrabold text-9xl text-slate-700 font-Manrope"
        >
          <br />
          <br />
          <br />
          E-Commerce-by-Kaleem
        </marquee>
        <marquee
          behavior="scroll"
          direction="right"
          speed="normal"
          className="font-extrabold text-9xl text-slate-700 font-Manrope"
        >
          welcome to E-Commerce
        </marquee>
        <div className="absolute z-50 m-auto mt-18 w-96 rounded-2xl bg-slate-900 shadow-cardShadow">
          <div className="flex flex-col gap-2 p-8">
            <p className="mb-4 text-3xl font-extrabold text-center text-gray-300 font-Manrope">
              Login Account
            </p>
            <input
              className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 font-Manrope"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 font-manrope"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="w-full px-4 py-3 text-white border border-gray-300 rounded-lg bg-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 font-manrope"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="px-2 text-white bg-red-500 rounded font-Manrope error">
              {error && errorValue}
            </p>
            <p className="text-white font-Manrope">
              dont have an account?{" "}
              <Link to="/createAccount" className="underline text-slate-400">
                Create Account
              </Link>
            </p>

            <button
              className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95 my-2 border text-[16px] font-Manrope tracking-wider font-extrabold"
              onClick={userLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAccount;
