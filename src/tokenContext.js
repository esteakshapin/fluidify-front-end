import React from "react";

export const TokenContext = React.createContext({
  token: null,
  setToken: (token) => {},
});
