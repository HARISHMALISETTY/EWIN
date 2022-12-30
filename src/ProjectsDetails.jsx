/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/actions";
import { useNavigate } from "react-router-dom";

const ProjectDetails = (username, password) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useSelector((state) => console.log(state.reducers.projectDetail));

  const country_of_origin = useSelector(
    (state) => state.reducers.projectDetail.country_of_origin_name
  );
  const customer_org_name = useSelector(
    (state) => state.reducers.projectDetail.customer_org_name
  );
  const po_number = useSelector(
    (state) => state.reducers.projectDetail.po_number
  );
  const project_id = useSelector((state) => state.reducers.projectDetail.id);

  return (
    <div className="projects">
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
      <div>
        <div className="pdts">
          <div className="pdtsdata">
            <h1>country of origin</h1>
            <br />
            <p>{country_of_origin}</p>
          </div>
          <div className="pdtsdata">
            <h1>Customer Organization:</h1>
            <br />
            <p>{customer_org_name}</p>
          </div>
        </div>
        <div className="pdts">
          <div className="pdtsdata">
            <h1>PO_NUMBER</h1>
            <br />
            <p>{po_number}</p>
          </div>
          <div className="pdtsdata">
            <h1>Project_id</h1>
            <br />
            <p>{project_id}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
