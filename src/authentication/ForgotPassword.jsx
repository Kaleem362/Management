import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import { Link } from "react-router";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // password reset function for authorized users.
  const handlePasswordReset = async () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    try {
      // Attempt to send password reset email
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage("Password reset email sent! Please check your inbox.");
      setError("");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError(
          "No account found with this email address. Please check the email and try again."
        );
      } else {
        setError(error.message); // General error handling
      }
      setSuccessMessage("");
      setEmail("");
      setError("");
    }
  };
  return (
    <div className="flex flex-col gap-8 p-10 mx-auto mt-20 rounded-lg w-96 h-62 bg-slate-800">
      <div className="backtoLoginPage">
        <Link
          to="/login"
          className="px-2 py-2 text-white rounded-lg bg-slate-400 font-Manrope"
        >
          Back to Login
        </Link>
      </div>
      <h2 className="text-3xl font-extrabold text-center text-slate-200 font-Manrope">
        Forgot Password
      </h2>
      <small className="text-white font-Manrope">
        Enter Valid Email to Get the forgot Password Link in Your Email Inbox
      </small>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        className="p-3 text-white border-none rounded-lg focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800 bg-slate-900"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        onClick={handlePasswordReset}
        className="p-4 font-extrabold text-white transition-all duration-200 border rounded-lg hover:border-slate-900 bg-slate-900 border-slate-400 hover:bg-slate-500 hover:text-slate-900 hover:font-extrabold"
      >
        Reset Password
      </button>

      {error && (
        <p
          style={{
            backgroundColor: "white",
            color: "green",
            fontFamily: "manrope",
          }}
        >
          {error}
        </p>
      )}
      {successMessage && (
        <p
          style={{
            backgroundColor: "white",
            color: "green",
            padding: "6px",
            borderRadius: "5px",
            fontFamily: "manrope",
          }}
        >
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default ForgotPassword;
