/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  logout,
  projectsData,
  installationData,
  installEquipment,
} from "../Redux/actions/index";

import "./Component.css";
const Welcome = (username, password) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.reducers.data.access_token);
  console.log(token);
  return (
    <div className="welcome">
      <div className="part1">
        <div className="nav">
          <img
            className="wlogo"
            src="http://52.139.224.15:9090/assets/svg-icon/logo.svg"
            alt="logo"
          ></img>
          <img
            className="navlogos"
            src="http://52.139.224.15:9090/assets/svg-icon/ic_projects.svg"
          ></img>
          <small>My Projects</small>
          <img
            className="navlogos"
            src="http://52.139.224.15:9090/assets/svg-icon/ic_installations.svg"
          ></img>
          <small>My Installations</small>
          <img
            className="navlogos"
            src="http://52.139.224.15:9090/assets/svg-icon/ic_learning.svg"
          ></img>
          <small>My Learnings</small>
          <img
            className="navlogos"
            src="http://52.139.224.15:9090/assets/svg-icon/ic_trending_up.svg"
          ></img>
          <small>Reports</small>

          <img
            className="person"
            src="http://52.139.224.15:9090/assets/img/sampleImage.png"
          ></img>
          <h6>ProfilePicture</h6>
          <img
            className="qr"
            src="https://portalenablingwindiag.blob.core.windows.net/enabling-storage/Test-Sreekanth-ORG156.jpg"
          ></img>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(logout(username, password));
              navigate("/");
            }}
          >
            <img
              className="logout"
              src="https://media.istockphoto.com/id/1220540371/vector/power-on-icon-power-off-icon-on-off-icon-vector-illustration.jpg?b=1&s=170667a&w=0&k=20&c=qF1mx3DcjymWuAp-nqdOiF1sd2RDkknt2PxSRxg_7DI="
            ></img>
          </button>
        </div>
      </div>
      <div className="part2">
        <img
          className="wlg"
          src="http://52.139.224.15:9090/assets/logos/Vector.png"
        />
        <span className="line1">
          Welcome to <span className="line1_1">MyWin</span>
        </span>
        <p className="line2">
          Here you can access a variety of features and functionalities, as well
          as a wealth of <br />
          industry information and insights to impact your business outcomes.
        </p>
        <div className="boxes1">
          <button
            onClick={(e) => {
              dispatch(projectsData(token, navigate));
            }}
            className="projectsLists"
          >
            <div>
              <img
                className="myimg"
                src="http://52.139.224.15:9090/assets/logos/icon_projects_2x.png"
              ></img>
            </div>
            <div>
              <h1 className="h1p">myProjects</h1>
              <p className="boxp">
                Keep your Customers engaged and informed on all projects
              </p>
            </div>
          </button>

          <button
            onClick={(e) => {
              dispatch(installationData(token, navigate));
              dispatch(installEquipment(token, navigate));
            }}
            className="installations"
          >
            <div>
              <img
                className="myimg"
                src="http://52.139.224.15:9090/assets/logos/icon_installation_2x.png"
              ></img>
            </div>
            <div>
              <h1 className="h1i">myInstallations</h1>
              <p className="boxp">
                Delight your Customers with an excellent digital experience
              </p>
            </div>
          </button>
        </div>
        <div className="box2">
          <div>
            <img
              className="myimg"
              src="	http://52.139.224.15:9090/assets/logos/icon_learning_2x.png"
            ></img>
          </div>
          <div>
            <h1 className="h1l">myLearning</h1>
            <p className="boxp">
              Gain domain Knowledge and engage with subject matter experts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
