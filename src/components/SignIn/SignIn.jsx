import React, { useState } from "react";
import InputWithLeadingIcon from "../FormComponents/InputWithLeadingIcon";
import PaperContainer from "../PaperContainer";
import "./SignIn.css";
import SignInFormFooter from "./SignInFormFooter";
import DefaultButton from "../FormComponents/DefaultButton";

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  return (
    // used to take place of the body. this container will be able to center the child (signIn form)
    <div className="signInBodyContainer">
      <PaperContainer>
        <div className="signInContainer">
          <div className="titleContainer">
            <h1>Welcome Back</h1>
          </div>

          <form>
            <div className="inputGroup">
              <InputWithLeadingIcon
                title="username"
                icon="fa-user"
                value={formData.username}
                handleChange={handleChange}
              ></InputWithLeadingIcon>
              <InputWithLeadingIcon
                title="password"
                icon="fa-lock"
                value={formData.password}
                type="password"
                handleChange={handleChange}
              ></InputWithLeadingIcon>
              <div className="forgotTextWrapper">
                <a
                  href="https://analytics.fluidefi.com/password_reset/"
                  target="_blank"
                  id="forgotText"
                  rel="noreferrer"
                >
                  {" "}
                  forgot password?{" "}
                </a>
              </div>

              <div className="buttonWrapper">
                <DefaultButton></DefaultButton>
              </div>
            </div>
          </form>

          {/* <!-- form footer --> */}
          <SignInFormFooter></SignInFormFooter>
        </div>
      </PaperContainer>
    </div>
  );
}

export default SignIn;
