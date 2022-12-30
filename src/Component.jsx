import React, { useState } from "react";
import "./Component.css";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/actions/index";
import { useNavigate } from "react-router-dom";

const Component = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useSelector((state) => state);
  const showResult = () => {
    alert("success");
  };

  return (
    <div className="login">
      <div>
        <img
          className="logo"
          src="http://52.139.224.15:9090/assets/logos/colour_ogo/Colour%20Logo%20(transparent%20bg)%20-02.png"
          alt="logo"
        ></img>
      </div>
      <div className="box">
        <div className="cntr1">
          <h1>Grow your business</h1>
          <p>
            An integrated platform that enables you to follow <br />
            <span className="blue">effective commercial method,</span>
            <span className="green">
              collaborate with
              <br /> your partners,
            </span>
            <span className="red">
              and provide excellent service to your customers.
            </span>
          </p>
        </div>
        <div className="cntnr">
          <span className="btngrp">
            <Button>Login</Button>
          </span>
          <form>
            <label>EMAIL:</label>
            <br />
            <input
              className="ip-gr"
              type="text"
              value={username}
              placeholder="Enter Email:"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <br />
            <label>Password</label>
            <br />
            <input
              className="ip-gr"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <br />
            <br />
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch(getData(username, password, navigate, showResult));
              }}
              variant="primary"
            >
              SignIn
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Component;
