import React, { useContext } from "react";
import { Store } from "../store/Context";
import { Link } from "react-router";
// import {toast} from React;

const CreateAccount = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    createacc,
    name,
    setName,
    googleSignIn,
  } = useContext(Store);
  return (
    <div className="items-center justify-center w-full h-screen bg-transparent backdrop-filter-blur">
      <section className="flex items-center justify-center w-full h-full">
        <div className="flex items-center justify-center px-4 py-10 bg-white rounded-lg shadow-cardShadow sm:px-6 sm:py-16 lg:px-8 lg:py-8 w-fit">
          <div className="p-4 shadow-md xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="flex justify-center mb-2"></div>
            <h2 className="text-2xl font-bold leading-tight text-center text-black">
              Create your Free Account
            </h2>
            <p className="mt-2 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="font-bold text-[16px] text-black font-manrope hover:underline hover:cursor-pointer"
              >
                Login
              </Link>
            </p>
            <form className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Name"
                      type="text"
                      required
                      className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Email"
                      type="email"
                      required
                      className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium text-gray-900">
                      Password
                    </label>
                    <a
                      className="text-sm font-semibold text-black hover:underline"
                      title=""
                      href="#"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      placeholder="Password"
                      type="password"
                      required
                      className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border border-gray-300 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    type="button"
                    onClick={() => {
                      createacc(email, password);
                    }}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                className="flex justify-between w-full gap-4 px-10 py-2 font-bold border rounded button font-manrope hover:shadow-buttonShadow"
                onClick={() => googleSignIn()}
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
      </section>
    </div>
  );
};

export default CreateAccount;
