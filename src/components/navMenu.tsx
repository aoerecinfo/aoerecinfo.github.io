import {
  faCoffee,
  faGlobeEurope,
  faLayerGroup,
  faMale,
  faMoneyBill,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  fileLoaded: boolean;
}

function NavMenu(props: Props) {
  const [collapseNavMenu, setCollapseNavMenu] = React.useState<boolean>(false);
  const ToggleNavMenu = () => {
    setCollapseNavMenu(!collapseNavMenu);
  };

  return (
    <>
      <div className="top-row pl-4 navbar navbar-dark">
        <a className="navbar-brand" href="">
          AOE Rec Info
        </a>
        <button className="navbar-toggler" onClick={ToggleNavMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div
        // className={collapseNavMenu === true ? "collapse" : ""}
        onClick={ToggleNavMenu}
      >
        <ul className="nav flex-column">
          {props.fileLoaded === true ? (
            <>
              {/* <li className="nav-item px-3">
            <NavLink className="nav-link" exact to={"/"}>
              <span className="oi oi-home" aria-hidden="true"></span> Home
            </NavLink>
          </li> */}
              <li className="nav-item px-3">
                <NavLink className="nav-link" exact to={"/"}>
                  <FontAwesomeIcon
                    fixedWidth={true}
                    icon={faShieldAlt}
                    style={{ marginRight: 15 }}
                  />
                  Military
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink className="nav-link" exact to={"/economy"}>
                  <FontAwesomeIcon
                    fixedWidth={true}
                    icon={faMoneyBill}
                    style={{ marginRight: 15 }}
                  />
                  Economy
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink className="nav-link" exact to={"/technology"}>
                  <FontAwesomeIcon
                    fixedWidth={true}
                    icon={faLayerGroup}
                    style={{ marginRight: 15 }}
                  />
                  Techonology
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink className="nav-link" exact to={"/society"}>
                  <FontAwesomeIcon
                    fixedWidth={true}
                    icon={faMale}
                    style={{ marginRight: 15 }}
                  />
                  Society
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink className="nav-link" exact to={"/map"}>
                  <FontAwesomeIcon
                    fixedWidth={true}
                    icon={faGlobeEurope}
                    style={{ marginRight: 15 }}
                  />
                  Map
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
        <div
          style={{
            color: "#808080",
            padding: 10,
            position: "absolute",
            bottom: 0,
          }}
        >
          Age of Empires II: Definitive Edition © Microsoft Corporation.
          <br />
          AOE Rec Info was created under Microsoft's{" "}
          <a href="https://www.xbox.com/en-us/developers/rules">
            Game Content Usage Rules
          </a>{" "}
          using assets from Age of Empires II: Definitive Edition, and it is not endorsed by or
          affiliated with Microsoft.
        </div>
      </div>
    </>
  );
}

export default NavMenu;
