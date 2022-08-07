import React, { useEffect } from "react";
import PaperContainer from "../PaperContainer";
import "./Swap.css";

import InputWithLeadingIcon from "../FormComponents/InputWithLeadingIcon";
import WalletInfo from "../FormComponents/WalletInfo";
import DefaultButton from "../FormComponents/DefaultButton";
import { useState } from "react";
import { WalletContext } from "../../walletContext";
import { useContext } from "react";
import { TokenContext } from "../../tokenContext";
import { postCall } from "../../logic/apiCalls";
import { BUILD_SWAP } from "../../urls";
import { errorHandling } from "../../logic/swapErrorHandling";

function Swap() {
  const { token } = useContext(TokenContext);

  const [alerts, setAlerts] = useState([])

  const [mode, setMode] = useState("exactoutput");

  const [walletInfo, setWalletInfo] = useState({
    account: null,
    status: "notConnected",
    balance: null,
    chainId: null,
  });

  const [configuration, setConfiguration] = useState({
    differentRecipient: null,
    deadline: null,
    slipage: null,
    gasPrice: null,
  });

  const [inputFormData, setInputFormData] = useState({
    inputToken: "ETH",
    Intermediatry: null,
    amount_in: "",
  });

  const [outputFormData, setOutputFormData] = useState({
    outputToken: "0xdAC17F958D2ee523a2206206994597C13D831ec7", //usdt
    amount_out: "",
  });

  const [loading, setLoading] = useState(false);

  //form errors
  const [amountOutError, setAmountOutError] = useState({ error: false, message: "" })


  // implement self closing alerts
  // useEffect(() => {
  // let alertKey;
  // if (alerts.length > 0) {
  //   alertKey = alerts.length - 1;
  //   console.log(alerts);
  //   console.log("alert key - " + alertKey);


  //   // setTimeout(() => {
  //   //   console.log("timed out - " + alertKey)
  //   //   setAlerts((prevState) => prevState.filter(item => item.key !== alertKey))
  //   // }, 1000);
  // }


  // }, [alerts])

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    let data = { mode };

    data.sender = walletInfo.account;

    //TODO: error check to make sure required fields are not empty
    if (mode === "exactoutput") {
      data.amount_out = outputFormData.amount_out;
    } else {
      data.amount_in = inputFormData.amount_in;
    }

    //implement intermediatary swaps
    data.path = [inputFormData.inputToken, outputFormData.outputToken];

    //coppying configuration state
    const configs = { ...configuration };

    for (const [key, value] of Object.entries(configs)) {
      if (value == null || value === "") {
        //remove optional data that the user did not change
        delete configs[key];
      }
    }

    data = { ...data, ...configs };

    const res = await postCall({ token: token, data: data, url: BUILD_SWAP });

    errorHandling(res, alerts, setAlerts, { setAmountOutError: setAmountOutError });

    setLoading(false);
  };

  return (
    <div className="swapContainer">
      <PaperContainer>
        <span className="pageTitle">Swap</span>

        {/* Container for the three forms (configuration, input, output) */}
        <WalletContext.Provider value={{ walletInfo, setWalletInfo }}>
          <div className="formContainer">
            {/* configuration form */}
            <div className="form configurationForm">
              <span className="formTitle">Configuration</span>

              <form>
                <div className="inputGroup">
                  <WalletInfo title="Wallet" />
                  <WalletContext.Consumer>
                    {(value) => (
                      <InputWithLeadingIcon
                        title="Balance"
                        icon="fa-wallet"
                        value={value.walletInfo.balance}
                        disabled={true}
                      />
                    )}
                  </WalletContext.Consumer>

                  <InputWithLeadingIcon
                    title="Different Recipient?"
                    icon="fa-user"
                    value={configuration.differentRecipient}
                    handleChange={(e) =>
                      setConfiguration((prevState) => ({
                        ...prevState,
                        differentRecipient: e.target.value,
                      }))
                    }
                    toggle={true}
                    toggleState={configuration.differentRecipient != null}
                    toggleCallBack={(state) =>
                      state
                        ? setConfiguration((prevState) => ({
                          ...prevState,
                          differentRecipient: "",
                        }))
                        : setConfiguration((prevState) => ({
                          ...prevState,
                          differentRecipient: null,
                        }))
                    }
                    placeholder="Please enter the recieving wallet adress"
                    toolTipData="Address for recipient account of output tokens. If recipient is not provided, the output tokens will be transferred to the sender's account."
                  />
                  <InputWithLeadingIcon
                    title="Deadline?"
                    icon="fa-stopwatch"
                    value={configuration.deadline}
                    handleChange={(e) =>
                      setConfiguration((prevState) => ({
                        ...prevState,
                        deadline: e.target.value,
                      }))
                    }
                    toggle={true}
                    toggleState={configuration.deadline != null}
                    toggleCallBack={(state) =>
                      state
                        ? setConfiguration((prevState) => ({
                          ...prevState,
                          deadline: "",
                        }))
                        : setConfiguration((prevState) => ({
                          ...prevState,
                          deadline: null,
                        }))
                    }
                    placeholder="Enter time in seconds for the transaction to complete"
                    toolTipData="Amount of time in seconds for the transaction to complete, after which time it will revert. The default value is 300 seconds (5 minutes)."
                  />
                  <InputWithLeadingIcon
                    title="Slipage?"
                    icon="fa-chart-line"
                    value={configuration.slipage}
                    handleChange={(e) =>
                      setConfiguration((prevState) => ({
                        ...prevState,
                        slipage: e.target.value,
                      }))
                    }
                    toggle={true}
                    //if you dont add null, the state will go to false when the value is empty
                    toggleState={configuration.slipage != null}
                    toggleCallBack={(state) =>
                      state
                        ? setConfiguration((prevState) => ({
                          ...prevState,
                          slipage: "",
                        }))
                        : setConfiguration((prevState) => ({
                          ...prevState,
                          slipage: null,
                        }))
                    }
                    placeholder="Enter maximum allowable percent deviation"
                    toolTipData="	Maximum allowable percent deviation from desired output amount for exactinput swaps or desired input amount for exactoutput swaps. Valid range of values for slippage is 0 - 100. The default value is 2%."
                  />
                  <InputWithLeadingIcon
                    title="Gas Price?"
                    icon="fa-gas-pump"
                    placeholder="Desired gas price in wei"
                    value={configuration.gasPrice}
                    handleChange={(e) =>
                      setConfiguration((prevState) => ({
                        ...prevState,
                        gasPrice: e.target.value,
                      }))
                    }
                    toggle={true}
                    toggleState={configuration.gasPrice != null}
                    toggleCallBack={(state) =>
                      state
                        ? setConfiguration((prevState) => ({
                          ...prevState,
                          gasPrice: "",
                        }))
                        : setConfiguration((prevState) => ({
                          ...prevState,
                          gasPrice: null,
                        }))
                    }
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
                    value={inputFormData.inputToken}
                    handleChange={(e) =>
                      setInputFormData((prevState) => ({
                        ...prevState,
                        inputToken: e.target.value,
                      }))
                    }
                  ></InputWithLeadingIcon>
                  <InputWithLeadingIcon
                    title="Intermediatry Token Swaps?"
                    icon="fa-lock"
                    type="text"
                    value={inputFormData.Intermediatry}
                    handleChange={(e) =>
                      setInputFormData((prevState) => ({
                        ...prevState,
                        Intermediatry: e.target.value,
                      }))
                    }
                    toggle={true}
                    toggleState={inputFormData.Intermediatry != null}
                    toggleCallBack={(state) =>
                      state
                        ? setInputFormData((prevState) => ({
                          ...prevState,
                          Intermediatry: "",
                        }))
                        : setInputFormData((prevState) => ({
                          ...prevState,
                          Intermediatry: null,
                        }))
                    }
                  ></InputWithLeadingIcon>
                  <InputWithLeadingIcon
                    title="Exact Amount?"
                    icon="fa-brands fa-ethereum"
                    type="text"
                    noIconPreset={true}
                    value={inputFormData.amount_in}
                    handleChange={(e) =>
                      setInputFormData((prevState) => ({
                        ...prevState,
                        amount_in: e.target.value,
                      }))
                    }
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
                    value={outputFormData.outputToken}
                    handleChange={(e) =>
                      setOutputFormData((prevState) => ({
                        ...prevState,
                        outputToken: e.target.value,
                      }))
                    }
                  ></InputWithLeadingIcon>
                  <InputWithLeadingIcon
                    title="Exact Amount?"
                    icon="fa-dollar-sign"
                    type="number"
                    value={outputFormData.amount_out}
                    handleChange={(e) =>
                      setOutputFormData((prevState) => ({
                        ...prevState,
                        amount_out: e.target.value,
                      }))
                    }
                    toggle={true}
                    toggleCallBack={(state) =>
                      state ? setMode("exactoutput") : setMode("exactinput")
                    }
                    toggleState={mode === "exactoutput" ? true : false}
                    inputError={amountOutError.error}
                  ></InputWithLeadingIcon>
                </div>
              </form>
            </div>
          </div>
        </WalletContext.Provider>

        <center>
          <DefaultButton loading={loading} onclickFunction={handleSubmit} />
        </center>


        <div className="floatingAlert">
          {alerts}
        </div>

      </PaperContainer>
    </div>
  );
}

export default Swap;
