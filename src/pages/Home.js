import React from "react"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import "../styles/Home.css"

import { FaHotel, FaUtensils, FaDumbbell } from "react-icons/fa"
function Home(props) {
  return (
    <div id="home">
      <NavBar current="current-home" />
      <div id="main">
        <div id="header">
          <div className="header-container">
            <h1 className="header-title">
              <span id="header-title-color">Enjoy</span> Your Stay
            </h1>
            <p className="header-paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
              eligendi laboriosam. Repellendus officia harum eaque.
            </p>
            <h2 className="btn">About Our Hotel</h2>
          </div>
        </div>
        <div id="info">
          <div className="info-image-container"></div>
          <div className="info-details-container">
            <h1>
              <span className="info-title-color">The History</span> Of Our Hotel
            </h1>
            <p className="info-para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda aliquam dolor alias iste autem, quaerat magni unde
              accusantium qui fuga placeat quidem quo pariatur, voluptatum, ea
              sequi? Corporis, explicabo quisquam dolor placeat praesentium
              nesciunt mollitia quos nobis natus voluptatum asperiores!
            </p>
            <h2 className="dark-btn">Read more</h2>
          </div>
        </div>
        <div id="items">
          <div className="location">
            <div className="item-logo">
              <FaHotel size="50" />
            </div>
            <div className="item-title">Great Location</div>
            <div className="item-description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            </div>
            <div className="item-question">
              <p>elit. Ut, omnis?</p>
            </div>
          </div>
          <div className="meals">
            <div className="item-logo">
              <FaUtensils size="50" />
            </div>
            <div className="item-title">Free Meals</div>
            <div className="item-description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            </div>
            <div className="item-question">
              <p>elit. Ut, omnis?</p>
            </div>
          </div>
          <div className="room">
            <div className="item-logo">
              <FaDumbbell size="50" />
            </div>
            <div className="item-title">Fitness Room</div>
            <div className="item-description">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
            </div>
            <div className="item-question">
              <p>elit. Ut, omnis?</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
