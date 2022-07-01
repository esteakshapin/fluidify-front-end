import React from "react";
import { useState } from "react";
import "./WalletInfo.css";
import DefaultButton from "./DefaultButton";
import { useMetaMask } from "metamask-react";

function RenderMetaMask() {
  const { status, connect, account, chainId, ethereum } = useMetaMask();
  switch (status) {
    case "initializing":
      return <div>Synchronisation with MetaMask ongoing...</div>;
    case "unavailable":
      return <div>MetaMask not available</div>;
    case "notConnected":
      return (
        <DefaultButton
          text="Connect to MetaMask"
          btnClass="metaMaskButton"
          onclickFunction={connect}
        ></DefaultButton>
      );
    case "connecting":
      return <div>Connecting...</div>;
    case "connected":
      return <div>{account}</div>;
    default:
      return <div>Somethings not right.</div>;
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
