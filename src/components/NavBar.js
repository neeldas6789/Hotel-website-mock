import React from "react"
import "../styles/NavBar.css"
import { Link } from "react-router-dom"
import { Routes } from "../App"
function NavBar({ current }) {
  return (
    <div id="Banner">
      <div id="container">
        <div id="logo-container">
          <h2 className="logo">
            <Link to={`${Routes.homepage}`} className="link-color">
              HBT
            </Link>
          </h2>
        </div>

        <div className="bar-container">
          <ul className="bar-list">
            {/* <Link to={`${Routes.homepage}`}>Home</Link> */}
            <li
              className={
                current === "current-home"
                  ? `${current} bar-items`
                  : "bar-items"
              }
            >
              <Link to={`${Routes.homepage}`} className="link-color">
                {" "}
                Home
              </Link>
            </li>
            <li
              className={
                current === "current-about"
                  ? `${current} bar-items`
                  : "bar-items"
              }
            >
              <Link to={`${Routes.aboutpage}`} className="link-color">
                {" "}
                About
              </Link>
            </li>
            <li
              className={
                current === "current-contact"
                  ? `${current} bar-items`
                  : "bar-items"
              }
            >
              <Link to={`${Routes.contactpage}`} className="link-color">
                {" "}
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
