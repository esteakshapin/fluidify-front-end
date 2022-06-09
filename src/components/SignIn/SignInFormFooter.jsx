import React from "react";
import "./SignInFormFooter.css";

function SignInFormFooter() {
  return (
    <div className="formFooter">
      <p>
        No account yet?
        <a
          href="https://analytics.fluidefi.com/register/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Signup{" "}
        </a>
        or
        <a
          href="https://fluidefi.com/contact-us/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Contact us{" "}
        </a>
        to schedule a demonstration or get early access.
      </p>
      <p>
        By logging in, you agree to the FLUIDEFI&reg;
        <a
          href="https://fluidefi.com/privacy-policy/"
          id="formFooterPrivacy"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Privacy Policy{" "}
        </a>
        &{" "}
        <a
          href="https://fluidefi.com/terms-of-service/"
          id="formFooterTOS"
          target="_blank"
          rel="noreferrer"
        >
          Terms of Service
        </a>
      </p>
    </div>
  );
}

export default SignInFormFooter;
