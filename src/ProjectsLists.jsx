/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, projectsDetailsaction } from "../Redux/actions";
import { useNavigate } from "react-router-dom";

const ProjectsLists = (username, password) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.reducers.data.access_token);
  const pdata = useSelector((state) => state.reducers.plists.results);
  const handlePdetail = (id) => {
    console.log(id);
    dispatch(projectsDetailsaction(id, token, navigate));
  };
  const [search, setSearch] = useState("");

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
      <div className="part2">
        <strong>myProjects</strong>
        <form>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button>search</button>
        </form>
        <table>
          <thead>
            <tr className="rc">
              <th className="rm">Name</th>
              <th className="rm">OEM</th>
              <th className="rm">Purchase Order</th>
            </tr>
          </thead>
          <tbody>
            {pdata
              .filter((data) =>
                data.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((data) => (
                <tr className="trp">
                  <td className="tdp" onClick={() => handlePdetail(data.id)}>
                    {data.name}
                  </td>
                  <td className="tdp">{data.project_id}</td>
                  <td className="tdp">{data.po_number}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProjectsLists;
