import React from "react";
import { useState, useEffect, useRef } from "react";
import "./WalletInfo.css";
import DefaultButton from "./DefaultButton";
import { initializeMetaMask, accountChangeHandler } from "../../logic/metaMask";

function RenderMetaMask() {
  const ethereum = window.ethereum;

  const walletAddressRef = useRef(null);

  const [metaMaskInfo, setMetaMaskInfo] = useState({
    account: null,
    status: "notConnected",
    balance: null,
    chainId: null,
  });

  //initialize metamask info when component is mounted
  useEffect(() => {
    initializeMetaMask(setMetaMaskInfo);

    //setting hook for account changed
    window.ethereum.on("accountsChanged", (res) =>
      accountChangeHandler(res[0], setMetaMaskInfo)
    );
  }, []);

  //visual que to let the user know they switched accounts
  useEffect(() => {
    if (walletAddressRef.current) {
      walletAddressRef.current.style.color = "red";
      walletAddressRef.current.style.fontWeight = "700";
      const timer = setTimeout(() => {
        walletAddressRef.current.style.color = "gray";
        walletAddressRef.current.style.fontWeight = "400";
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [metaMaskInfo.account]);

  switch (metaMaskInfo.status) {
    case "initializing":
      return (
        <div className="connectionInfo">
          Synchronisation with MetaMask ongoing...
        </div>
      );
    case "unavailable":
      return <div className="connectionInfo">MetaMask not available</div>;
    case "notConnected":
      return (
        <DefaultButton
          text="Connect to MetaMask"
          btnClass="metaMaskButton"
          onclickFunction={metaMaskInfo.connect}
        ></DefaultButton>
      );
    case "connecting":
      return <div className="connectionInfo">Connecting...</div>;
    case "connected":
      return (
        <div className="connectionInfo accountAddress" ref={walletAddressRef}>
          {metaMaskInfo.account}
        </div>
      );
    default:
      return <div className="connectionInfo">Somethings not right.</div>;
  }
}

function WalletInfo(props) {
  const inputId = props.title + "Input";

  return (
    <div className="inputAndTitleContainer">
      <label htmlFor={inputId} className="inputTitle">
        <h3>
          {props.title}{" "}
          {props.toolTipData ? (
            <div
              data-tooltip={props.toolTipData}
              style={{ display: "inline-block" }}
            >
              <i className="fa-solid fa-circle-info text-light"></i>
            </div>
          ) : null}
        </h3>
      </label>
      <RenderMetaMask />
    </div>
  );
}

export default WalletInfo;
