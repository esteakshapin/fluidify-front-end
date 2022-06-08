import React from 'react'
import PaperContainer from '../PaperContainer';
import './SignIn.css';

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
                        <div className="inputAndTitleContainer">
                            <h3>username</h3>

                            <div className="inputWithLeadingIcon">
                                <input name="txtName" id="userNameInput" />
                                <i className="fa-solid fa-user fa-fw"></i>
                            </div>
                        </div>
                        <div className="inputAndTitleContainer">
                            <h3>password</h3>

                            <div className="inputWithLeadingIcon">
                                <input name="txtName" id="userNameInput" />
                                <i className="fa-solid fa-lock fa-fw"></i>
                            </div>
                        </div>
                        <a
                            href="https://analytics.fluidefi.com/password_reset/"
                            target="_blank"
                            id="forgotText" rel="noreferrer"
                        >forgot password?</a
                        >
                        <button type="button" onclick="alert('Hello world!')">Click Me!</button>
                    </div>

                    {/* <!-- form footer --> */}
                    <div className="formFooter">
                        <p>
                            No account yet?
                            <a href="https://analytics.fluidefi.com/register/" target="_blank" rel="noreferrer"
                            > Signup </a
                            >
                            or
                            <a href="https://fluidefi.com/contact-us/" target="_blank" rel="noreferrer"
                            > Contact us </a
                            >
                            to schedule a demonstration or get early access.
                        </p>
                        <p>
                            By logging in, you agree to the FLUIDEFI&reg;
                            <a
                                href="https://fluidefi.com/privacy-policy/"
                                id="formFooterPrivacy"
                                target="_blank" rel="noreferrer"
                            > Privacy Policy </a>
                            & <a
                                href="https://fluidefi.com/terms-of-service/"
                                id="formFooterTOS"
                                target="_blank" rel="noreferrer"
                            >Terms of Service</a
                            >
                        </p>
                    </div>
                </div>
            </PaperContainer>

        </div>

    )
}

export default SignIn;