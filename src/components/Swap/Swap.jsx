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
                  toolTipData="Address for recipient account of output tokens. If recipient is not provided, the output tokens will be transferred to the sender's account."
                />
                <InputWithLeadingIcon
                  title="Deadline?"
                  icon="fa-stopwatch"
                  toggle={true}
                  placeholder="Enter time in seconds for the transaction to complete"
                  toolTipData="Amount of time in seconds for the transaction to complete, after which time it will revert. The default value is 300 seconds (5 minutes)."
                />
                <InputWithLeadingIcon
                  title="Slipage?"
                  icon="fa-chart-line"
                  toggle={true}
                  placeholder="Enter maximum allowable percent deviation"
                  toolTipData="	Maximum allowable percent deviation from desired output amount for exactinput swaps or desired input amount for exactoutput swaps. Valid range of values for slippage is 0 - 100. The default value is 2%."
                />
                <InputWithLeadingIcon
                  title="Gas Price?"
                  icon="fa-gas-pump"
                  placeholder="Desired gas price in wei"
                  toggle={true}
                  toolTipData="	Desired gas price in wei for transaction. If not provided, competitive gas price will be determined prior to sending the transaction to the blockchain."
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
