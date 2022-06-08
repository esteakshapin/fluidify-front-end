import React from "react"
import { TokenContext } from "../../tokenContext";

import './NavBar.css';

const SignIn = () => {
    return (
        <a href="./signIn" className="navigationLink" id="signIn">Sign In</a>
    );
}

const UserInfo = () => {
    return (
        <a href="./signIn" className="navigationLink" id="signIn">Welcome <span id="profileName">User</span></a>
    );
}

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

                <a href="./home" className="navigationLink" id="home">Home</a>

                <a href="./swap" className="active navigationLink" id="swap">Swap</a>

                <a href="./contactUs" className="navigationLink" id="pool">Pool</a>

                <a href="./contactUs" className="navigationLink" id="contactUs">Contact Us</a>

                <div className="spacer"></div>

                <TokenContext.Consumer>
                    {value => value == null ? <SignIn></SignIn> : <UserInfo></UserInfo>}
                </TokenContext.Consumer>

            </div>
        );
    }
}
export default NavBar;