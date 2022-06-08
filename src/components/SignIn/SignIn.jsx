import React from 'react'
import PaperContainer from '../PaperContainer';
import './SignIn.css';

function SignIn() {
    return (
        <PaperContainer>
            <div class="signInContainer">
                <div class="titleContainer">
                    <h1>Welcome Back</h1>
                </div>

                <div class="inputGroup">
                    <div class="inputAndTitleContainer">
                        <h3>username</h3>

                        <div class="inputWithLeadingIcon">
                            <input name="txtName" id="userNameInput" />
                            <i class="fa-solid fa-user fa-fw"></i>
                        </div>
                    </div>
                    <div class="inputAndTitleContainer">
                        <h3>password</h3>

                        <div class="inputWithLeadingIcon">
                            <input name="txtName" id="userNameInput" />
                            <i class="fa-solid fa-lock fa-fw"></i>
                        </div>
                    </div>
                    <a
                        href="https://analytics.fluidefi.com/password_reset/"
                        target="_blank"
                        id="forgotText" rel="noreferrer"
                    >forgot password?</a
                    >
                </div>

                {/* <!-- form footer --> */}
                <div class="formFooter">
                    <p>
                        No account yet?
                        <a href="https://analytics.fluidefi.com/register/" target="_blank" rel="noreferrer"
                        >Signup</a
                        >
                        or
                        <a href="https://fluidefi.com/contact-us/" target="_blank" rel="noreferrer"
                        >Contact us</a
                        >
                        to schedule a demonstration or get early access.
                    </p>
                    <p>
                        By logging in, you agree to the FLUIDEFI&reg;
                        <a
                            href="https://fluidefi.com/privacy-policy/"
                            id="formFooterPrivacy"
                            target="_blank" rel="noreferrer"
                        >Privacy Policy</a
                        >
                        &
                        <a
                            href="https://fluidefi.com/terms-of-service/"
                            id="formFooterTOS"
                            target="_blank" rel="noreferrer"
                        >Terms of Service</a
                        >
                    </p>
                </div>
            </div>
        </PaperContainer>

    )
}

export default SignIn;