import React, { useState } from "react";
import "./Signup.scss";
const Signup = (props) => {
  
  const [isSignup, setSignup] = useState(true);
  return (
    <>
      <h1 className="title pt-4">
        Sign<span style={{ color: "#06c05e" }}>{isSignup ? "Up" : "In"}</span>.
      </h1>
      <div className="input-form pt-3">
        <form>
          {isSignup && (
            <input
              type="text"
              name="name"
              className="name py-2"
              placeHolder="Enter your name"
              required
            />
          )}
          <input
            type="text"
            name="email"
            className="email py-2"
            placeHolder="Enter your mail id"
            required
          />
          {isSignup && props.user === "Manager" && (
            <input
              type="password"
              className="companyName py-2"
              name="companyName"
              placeHolder="Enter your company name"
              required
            />
          )}
          <input
            type="password"
            name="password"
            className="password py-2"
            placeHolder="Enter your password"
            required
          />
          {isSignup && (
            <input
              type="password"
              className="confirmPassword py-2"
              name="confirmPassword"
              placeHolder="Reconfirm your password"
              required
            />
          )}
          <button>{isSignup ? "Create account" : "Login"}</button>
        </form>

        {isSignup ? (
          <h4 className="input-form_text text-center pt-2">
            Aldready have an account{" "}
            <span onClick={() => setSignup(false)}>Signin</span>
          </h4>
        ) : (
          <h4 className="input-form_text text-center pt-2">
            Don't have an account{" "}
            <span onClick={() => setSignup(true)}>Signup</span>
          </h4>
        )}
      </div>
    </>
  );
};

export default Signup;
