import React from "react";

export const WalletContext = React.createContext({
  walletInfo: {
    account: null,
    status: "notConnected",
    balance: null,
    chainId: null,
  },
  setWalletInfo: () => {},
});
