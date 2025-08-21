import React, { useState } from "react"
import "../styles/contact.css"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import { FaHotel } from "react-icons/fa"
import { AiOutlinePhone } from "react-icons/ai"
import { MdOutlineEmail } from "react-icons/md"
function Contact(props) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div>
      <Navbar current="current-contact" />
      <div className="container">
        <div className="light-bg">
          <p className="contact-header">
            <span className="text-color">Contact</span> Us
          </p>
          <p className="contact-desc">
            Please fill out the form below to contact us
          </p>
          <div className="contact-form">
            <form className="form-container">
              <label>UserName</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Message</label>
              <textarea
                rows="12"
                type="textarea"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <p className="form-submit" type="submit" onClick={handleSubmit}>
                Submit
              </p>
            </form>
          </div>
        </div>

        <div className="dark-bg address-banner">
          <div className="banner-container">
            <div className="logo-container">
              <FaHotel className="logo" />
            </div>
            <div className="title">Location</div>
            <p className="description">50 Main st, Boston MA</p>
          </div>
          <div className="banner-container">
            <div className="logo-container">
              <AiOutlinePhone className="logo" />
            </div>
            <div className="title">Phone Number</div>
            <p className="description">(617) 555-5555</p>
          </div>
          <div className="banner-container">
            <div className="logo-container">
              <MdOutlineEmail className="logo" />
            </div>
            <div className="title">Email Address</div>
            <p className="description">frontdesk@hotelbt.co</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
