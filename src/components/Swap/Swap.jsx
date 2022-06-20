import React from "react";
import PaperContainer from "../PaperContainer";
import "./Swap.css";

import InputWithLeadingIcon from "../FormComponents/InputWithLeadingIcon";

function Swap() {
  return (
    <div className="swapContainer">
      <PaperContainer>
        <span className="pageTitle">Swap</span>

        {/* Container for the three forms (configuration, input, output) */}
        <div className="formContainer">
          {/* configuration form */}
          <div className="form configurationForm">
            <span className="formTitle">Configuration</span>

            <form>
              <div className="inputGroup">
                <InputWithLeadingIcon
                  title="Wallet"
                  icon="fa-wallet"
                  type="text"
                  placeholder="Please enter your wallet adress"
                />
                <InputWithLeadingIcon
                  title="Different Recipient?"
                  icon="fa-user"
                  toggle={true}
                  placeholder="Please enter the recieving wallet adress"
                />
                <InputWithLeadingIcon
                  title="Deadline?"
                  icon="fa-stopwatch"
                  toggle={true}
                  placeholder="Enter time in seconds for the transaction to complete"
                />
                <InputWithLeadingIcon
                  title="Slipage?"
                  icon="fa-chart-line"
                  toggle={true}
                  placeholder="Enter maximum allowable percent deviation"
                />
                <InputWithLeadingIcon
                  title="Gas Price?"
                  icon="fa-gas-pump"
                  placeholder="Desired gas price in wei"
                  toggle={true}
                />
              </div>
            </form>
          </div>
          <i class="fa-solid fa-arrow-right fa-2x"></i>
          {/* input form */}
          <div className="form inputForm">
            <span className="formTitle">Configuration</span>

            <form>
              <div className="inputGroup">
                <InputWithLeadingIcon
                  title="username"
                  icon="fa-user"
                ></InputWithLeadingIcon>
                <InputWithLeadingIcon
                  title="password"
                  icon="fa-lock"
                  type="text"
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
              </div>
            </form>
          </div>
        </div>
      </PaperContainer>
    </div>
  );
}

export default Swap;
