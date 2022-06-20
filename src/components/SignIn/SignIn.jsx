import React, { useContext, useState } from "react";
import InputWithLeadingIcon from "../FormComponents/InputWithLeadingIcon";
import PaperContainer from "../PaperContainer";
import "./SignIn.css";
import SignInFormFooter from "./SignInFormFooter";
import DefaultButton from "../FormComponents/DefaultButton";
import { TokenContext } from "../../tokenContext";
import { logInAPICall } from "../../logic/logInAPICall.jsx";
import axios from "axios";
import { AUTH } from "../../urls";

function SignIn() {
  const { token, setToken } = useContext(TokenContext);

  const [errorMessage, setErrorMessage] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    let res = await logInAPICall(formData.username, formData.password);

    console.log(res);

    setToken(res.data);
  };

  return (
    // used to take place of the body. this container will be able to center the child (signIn form)
    <div className="signInBodyContainer">
      <PaperContainer>
        <div className="signInContainer">
          <div className="titleContainer">
            <h1>Welcome Back</h1>
          </div>

          <form onSubmit={handleSubmit}>
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
