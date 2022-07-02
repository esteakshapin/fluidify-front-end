import React from "react";
import PaperContainer from "../PaperContainer";
import "./Swap.css";

import InputWithLeadingIcon from "../FormComponents/InputWithLeadingIcon";
import WalletInfo from "../FormComponents/WalletInfo";
import DefaultButton from "../FormComponents/DefaultButton";
import { useState } from "react";

function Swap() {
  const [mode, setMode] = useState("exactoutput");

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
                <WalletInfo title="Wallet" />
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
          <i className="fa-solid fa-arrow-right fa-2x"></i>
          {/* input form */}
          <div className="form inputForm">
            <span className="formTitle">Input</span>

            <form>
              <div className="inputGroup">
                <InputWithLeadingIcon
                  title="Input Token"
                  icon="fa-arrow-right-to-bracket"
                ></InputWithLeadingIcon>
                <InputWithLeadingIcon
                  title="Intermediatry Token Swaps?"
                  icon="fa-lock"
                  type="text"
                  toggle={true}
                ></InputWithLeadingIcon>
                <InputWithLeadingIcon
                  title="Exact Amount?"
                  icon="fa-brands fa-ethereum"
                  type="text"
                  noIconPreset={true}
                  toggle={true}
                  toggleCallBack={(state) =>
                    state ? setMode("exactinput") : setMode("exactoutput")
                  }
                  toggleState={mode === "exactinput" ? true : false}
                ></InputWithLeadingIcon>
              </div>
            </form>

            <span className="formTitle">Output</span>

            <form>
              <div className="inputGroup">
                <InputWithLeadingIcon
                  title="Output Token"
                  icon="fa-arrow-right-from-bracket"
                ></InputWithLeadingIcon>
                <InputWithLeadingIcon
                  title="Exact Amount?"
                  icon="fa-dollar-sign"
                  type="text"
                  toggle={true}
                  toggleCallBack={(state) =>
                    state ? setMode("exactoutput") : setMode("exactinput")
                  }
                  toggleState={mode === "exactoutput" ? true : false}
                ></InputWithLeadingIcon>
              </div>
            </form>
          </div>
        </div>
        <center>
          <DefaultButton />
        </center>
      </PaperContainer>
    </div>
  );
}

export default Swap;
