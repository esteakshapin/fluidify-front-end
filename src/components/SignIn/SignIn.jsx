import React, { useContext, useState } from "react";
import InputWithLeadingIcon from "../FormComponents/InputWithLeadingIcon";
import PaperContainer from "../PaperContainer";
import "./SignIn.css";
import SignInFormFooter from "./SignInFormFooter";
import DefaultButton from "../FormComponents/DefaultButton";
import { TokenContext } from "../../tokenContext";
import { logInAPICall } from "../../logic/logInAPICall.jsx";
import ErrorAlert from "../FormComponents/ErrorAlert";
import CompanyLogo from "./../../assets/Fluidefi_logo_wide_white-R.png";

function SignIn() {
  const { setToken } = useContext(TokenContext);

  const [inputError, setInputError] = useState(false);

  //store the state when the error occured. Will be used to remove the error outline when state is changed
  //so user doesn't submit the same sate again. i.e. if username is entered *john* which causes an error
  // the error outline in the username input will remian until the user inputs something other than *john*
  const [errorState, setErrorState] = useState({
    username: null,
    password: null,
  });

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

    if (!res) {
      setInputError(true);
      setErrorState({
        username: formData.username,
        password: formData.password,
      });
    } else {
      console.log(res);
      setToken(res.data);
    }
  };

  return (
    // used to take place of the body. this container will be able to center the child (signIn form)
    <div className="signInBodyContainer">
      <PaperContainer>
        <img className="companyLogo" src={CompanyLogo} alt="Fluidefi Logo" />
        <hr />
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
                inputError={
                  inputError && formData.username === errorState.username
                }
              ></InputWithLeadingIcon>
              <InputWithLeadingIcon
                title="password"
                icon="fa-lock"
                value={formData.password}
                type="password"
                handleChange={handleChange}
                inputError={
                  inputError && formData.password === errorState.password
                }
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

              {inputError ? (
                <ErrorAlert
                  message="Unable to login using the given
                credentials. Please try again."
                />
              ) : null}

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
