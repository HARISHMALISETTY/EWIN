/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/actions";
import { useNavigate } from "react-router-dom";

const Installations = (username, password) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pdata = useSelector((state) => state.reducers.processlines);
  const edata = useSelector((state) => state.reducers.equipments.results);
  console.log(edata);
  const [process, setProcess] = useState(true);
  const [equipment, setEquipment] = useState(false);
  const [searchp, setSearchp] = useState("");
  const [searche, setSearche] = useState("");
  const handleEquipment = (e) => {
    e.preventDefault();
    setProcess(false);
    setEquipment(true);
  };
  const handleProcess = (e) => {
    e.preventDefault();
    setProcess(true);
    setEquipment(false);
  };

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
        <strong>MY INSTALLATIONS</strong>
        <div>
          <button className="ibtns" onClick={handleProcess}>
            EQUIPMENTS
          </button>
          <button className="ibtns" onClick={handleEquipment}>
            PROCESSLINES
          </button>
        </div>
        {!process || equipment ? (
          <div>
            <h1>PROCESSLINES</h1>
            <form>
              <input
                type="text"
                value={searchp}
                onChange={(e) => setSearchp(e.target.value)}
              ></input>
              <button>search</button>
            </form>
            <table>
              <thead>
                <tr className="rc">
                  <th className="rm">Primary Product</th>
                  <th className="rm">Line</th>
                  <th className="rm">Capacity</th>
                </tr>
              </thead>
              <tbody>
                {pdata
                  .filter((data) =>
                    data.primary_product_details.name
                      .toLowerCase()
                      .includes(searchp.toLowerCase())
                  )
                  .map((data) => (
                    <tr>
                      <td>{data.primary_product_details.name}</td>
                      <td>{data.name}</td>
                      <td>{data.capacity_uom_name}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2>EQUIPMENTS</h2>
            <form>
              <input
                type="text"
                value={searche}
                onChange={(e) => setSearche(e.target.value)}
              ></input>
              <button>search</button>
            </form>
            <table>
              <thead>
                <tr className="rc">
                  <th className="rm">Equipment</th>
                  <th className="rm">Equipment_serial</th>
                  <th className="rm">status</th>
                </tr>
              </thead>
              <tbody>
                {edata
                  .filter((data) =>
                    data.equipment_name
                      .toLowerCase()
                      .includes(searche.toLowerCase())
                  )
                  .map((data) => (
                    <tr className="pne">
                      <td>{data.equipment_name}</td>
                      <td>{data.equipment_serial}</td>
                      <td>{data.status}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
export default Installations;
