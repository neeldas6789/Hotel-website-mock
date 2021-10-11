import React from "react"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import "../styles/About.css"
import hotel from "../utils/images/photo-2.jpg"
import reviewer1 from "../utils/images/person-1.jpg"
import reviewer2 from "../utils/images/person-2.jpg"

function About(props) {
  return (
    <div>
      <NavBar current="current-about" />
      <div className="container">
        <div className="hotel-desc">
          <div className="hotel-logo">
            <img src={hotel} alt="hotel" />
          </div>
          <div className="desc-container">
            <h1 className="desc-title">
              <span className="desc-span">About</span> Hotel BT
            </h1>
            <p className="desc-p1">
              About Hotel BT Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Exercitationem veritatis illo, similique labore voluptate
              nulla animi dolorum eius laborum illum, nesciunt quod
              reprehenderit dicta autem vel nobis minima sit deleniti!
            </p>
            <p className="desc-p2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A velit
              voluptatem impedit voluptate. Doloribus, voluptas dolore!
              Cupiditate aliquid sequi deserunt.
            </p>
          </div>
        </div>
        <div className="hotel-review">
          <div className="review-title">
            <h1>What Our Guests Say</h1>
          </div>
          <div className="review-1">
            <div className="review-1-logo">
              <img src={reviewer1} alt="reviewer1" />
            </div>
            <div className="review-1-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                eligendi quibusdam, dolorum maxime cum numquam quisquam,
                deleniti eum incidunt, velit non consectetur. Facere, ipsa
                maxime, ullam id amet odio laboriosam sit iusto tempore fugit
                exercitationem, a dolore quo maiores nisi!
              </p>
            </div>
          </div>
          <div className="review-2">
            <div className="review-2-logo">
              <img src={reviewer2} alt="reviewer1" />
            </div>
            <div className="review-2-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                eligendi quibusdam, dolorum maxime cum numquam quisquam,
                deleniti eum incidunt, velit non consectetur. Facere, ipsa
                maxime, ullam id amet odio laboriosam sit iusto tempore fugit
                exercitationem, a dolore quo maiores nisi!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
