import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/image3.png"; // adjust path as needed

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light nav-bg p-3">
        <Link className="navbar-brand" to="/">
         <img src={logo} alt="V1Ads Logo" width="120" />

        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Aboutus">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                Services
              </Link>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link" to="/Price">Price</Link>
            </li> */}
            {/* <li className="nav-item">
                <Link className="nav-link" to="/team">Our Team</Link>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/Contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
