import React, { useContext } from "react";
import { TokenContext } from "../../tokenContext";
import { NavLink } from "react-router-dom";

import "./NavBar.css";
import { logOut } from "../../logic/logInAPICall";

const SignIn = () => {
  return (
    <NavLink to="/signIn" className="navigationLink">
      Sign In
    </NavLink>
  );
};

const UserInfo = (props) => {
  return (
    <NavLink
      to="/signIn"
      className="navigationLink"
      onClick={(e) => props.setToken(null)}
    >
      {({ isActive }) => (
        <div>
          Log Out{" "}
          <span className={"profileName " + (isActive ? "active" : "")}>
            User
          </span>
        </div>
      )}
    </NavLink>
  );
};

export class NavBar extends React.Component {
  render() {
    return (
      <div className="navBar">
        <a href="/">
          <img
            src="https://analytics.fluidefi.com/static/img/fluidefi_logo_40.png"
            alt="Fluidefi Logo"
            id="navBarLogo"
          />
        </a>

        <NavLink to="/" className="navigationLink">
          Home
        </NavLink>

        <NavLink to="/swap" className="navigationLink">
          Swap
        </NavLink>

        <NavLink to="/pool" className="navigationLink">
          Pool
        </NavLink>
        <NavLink to="/contactUs" className="navigationLink">
          Contact Us
        </NavLink>

        <div className="spacer"></div>

        <TokenContext.Consumer>
          {(value) =>
            value.token == null ? (
              <SignIn></SignIn>
            ) : (
              <UserInfo setToken={value.setToken}></UserInfo>
            )
          }
        </TokenContext.Consumer>
      </div>
    );
  }
}
export default NavBar;
