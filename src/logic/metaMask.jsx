import { ethers } from "ethers";

export async function initializeMetaMask(setMetaMaskInfo) {
  // Asking if metamask is already present or not
  if (window.ethereum) {
    setMetaMaskInfo({ status: "connecting" });
    // res[0] for fetching a first wallet
    let res = await window.ethereum.request({ method: "eth_requestAccounts" });
    accountChangeHandler(res[0], setMetaMaskInfo);

    //successfully connected to metamask
    setMetaMaskInfo((prevState) => ({
      ...prevState,
      status: "connected",
    }));
  } else {
    alert("install metamask");
    return { status: "notAvailable" };
  }
}

export function accountChangeHandler(newAccount, setMetaMaskInfo) {
  setMetaMaskInfo((prevState) => ({
    ...prevState,
    account: newAccount,
  }));

  getBalance(newAccount, setMetaMaskInfo);
}

async function getBalance(account, setMetaMaskInfo) {
  // Requesting balance method
  let balance = await window.ethereum.request({
    method: "eth_getBalance",
    params: [account, "latest"],
  });

  //format balance
  balance = ethers.utils.formatEther(balance);

  setMetaMaskInfo((prevState) => ({
    ...prevState,
    balance: balance,
  }));
}
