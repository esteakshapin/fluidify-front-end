import React from "react";
import { Button } from "@mui/material";

import "./Swap.css";

export class Swap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      walletAdress: "",
      tokenOne: "ETH",
      tokenTwo: "ETH",
      tokenOneAmount: "",
      tokenTwoAmount: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="form-card">
          <div className="tab-container">
            {/* <div className="tab-group"> */}
            <div className="tab-nav active" id="swap">
              <span>Swap</span>
            </div>
            <div className="tab-nav" id="pool">
              Pool
            </div>
          </div>
          {/* </div> */}
          <div className="label">
            <span class="label-title required">Wallet</span>
            <input
              class="text"
              placeholder="0xb794f5ea0ba39494ce839613fffba74279579268"
              tabindex="1"
              className="wallet"
              name="walletAdress"
              onChange={this.handleChange}
              value={this.state.walletAdress}
              required
            />
            <span className="helpText focus">
              Please add your wallet adress
            </span>
          </div>

          <div className="input-container">
            <div className="inputgroup">
              <input
                className="amount-input"
                placeholder="0.0"
                name="tokenOneAmount"
                onChange={this.handleChange}
                value={this.state.tokenOneAmount}
                type="number"
                min="0"
              />
              <div className="img">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                  alt="dasd"
                  className="token-logo"
                />
              </div>

              <select
                className="token-select"
                name="tokenOne"
                value={this.state.tokenOne}
                onChange={this.handleChange}
              >
                <option value="ETH">ETH</option>
                <option value="2010">ETH</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
              </select>
            </div>
            <span className="helpText">Enter Amount</span>
          </div>

          {/* token two  */}
          <div className="input-container">
            <div className="inputgroup">
              <input
                className="amount-input"
                placeholder="0.0"
                name="tokenTwoAmount"
                type="number"
                min="0"
              />
              <div className="img">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
                  alt="dasd"
                  className="token-logo"
                />
              </div>

              <select
                className="token-select"
                name="tokenTwo"
                onChange={this.handleChange}
                value={this.state.tokenTwo}
              >
                <option value="ETH">ETH</option>
                <option value="2010">ETH</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
              </select>
            </div>
            <span className="helpText">Enter Amount</span>
          </div>

          <Button variant="contained" color="success">
            Confirm
          </Button>
        </div>
      </div>
    );
  }
}
export default Swap;
