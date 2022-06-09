import React from "react";
import InputWithLeadingIcon from "../FormComponents/InputWithLeadingIcon";
import PaperContainer from "../PaperContainer";
import "./SignIn.css";
import SignInFormFooter from "./SignInFormFooter";

function SignIn() {
  return (
    // used to take place of the body. this container will be able to center the child (signIn form)
    <div className="signInBodyContainer">
      <PaperContainer>
        <div className="signInContainer">
          <div className="titleContainer">
            <h1>Welcome Back</h1>
          </div>

          <div className="inputGroup">
            <InputWithLeadingIcon
              title="username"
              icon="fa-user"
            ></InputWithLeadingIcon>
            <InputWithLeadingIcon
              title="password"
              icon="fa-lock"
            ></InputWithLeadingIcon>
            <a
              href="https://analytics.fluidefi.com/password_reset/"
              target="_blank"
              id="forgotText"
              rel="noreferrer"
            >
              {" "}
              forgot password?{" "}
            </a>
            <button type="button" onclick="alert('Hello world!')">
              Click Me!
            </button>
          </div>

          {/* <!-- form footer --> */}
          <SignInFormFooter></SignInFormFooter>
        </div>
      </PaperContainer>
    </div>
  );
}

export default SignIn;
