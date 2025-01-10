import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../Firebase/FirebaseConfig";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const LoginAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState("");
  const navigate = useNavigate();
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
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider(); // Initialize GoogleAuthProvider
    try {
      // Use signInWithPopup to login with existing Google account
      const result = await signInWithPopup(auth, provider);
      const user = result.user; // Get user details if needed
      console.log("Logged in with Google:", user);
      navigate("/"); // Redirect to home page or dashboard after successful login
    } catch (error) {
      console.error("Error signing in with Google:", error);
      setError(error.message); // Handle error and show message
    }
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
            <p className="mb-4 text-sm font-Manrope text-slate-100 text-end">
              <Link to={"/forgot-password"}>forgot Passowrd ?</Link>
            </p>
            <p className="px-2 text-white bg-red-500 rounded font-Manrope error">
              {error && errorValue}
            </p>
            <p className="text-sm text-slate-100 font-Manrope">
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
            <div className="mt-3 space-y-3 bg-white rounded-lg">
              <button
                className="flex justify-center w-full gap-4 px-10 py-2 font-bold border rounded-lg button font-manrope hover:shadow-buttonShadow"
                onClick={handleGoogleSignIn}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 262"
                  className="w-6 h-6"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
                </svg>
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAccount;
