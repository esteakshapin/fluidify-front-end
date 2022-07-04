import React from "react";
import { useState, useEffect, useRef } from "react";
import "./WalletInfo.css";
import DefaultButton from "./DefaultButton";
import { initializeMetaMask, accountChangeHandler } from "../../logic/metaMask";
import { useContext } from "react";
import { WalletContext } from "../../walletContext";

function RenderMetaMask() {
  const { walletInfo, setWalletInfo } = useContext(WalletContext);

  const ethereum = window.ethereum;

  const walletAddressRef = useRef(null);

  //initialize metamask info when component is mounted
  useEffect(() => {
    console.log("wallet context");
    console.log(walletInfo);
    initializeMetaMask(setWalletInfo);

    //setting hook for account changed
    window.ethereum.on("accountsChanged", (res) =>
      accountChangeHandler(res[0], setWalletInfo)
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
  }, [walletInfo.account]);

  switch (walletInfo.status) {
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
          onclickFunction={walletInfo.connect}
        ></DefaultButton>
      );
    case "connecting":
      return <div className="connectionInfo">Connecting...</div>;
    case "connected":
      return (
        <div className="connectionInfo accountAddress" ref={walletAddressRef}>
          {walletInfo.account}
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
