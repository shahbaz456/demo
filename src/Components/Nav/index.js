import React from "react";
import "./Nav.css";
import logo from "../../Assets/Images/react.png";
import { FaUserFriends } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img className="logo" src={logo} alt="logo" />
            <p>TOOLING YOUR WORLD</p>
          </a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
            <button className="icons">
              <FaUserFriends />
            </button>
            <button className="icons">Login</button>
            <button className="icons">
              <AiFillHeart />
            </button>
            {/* <h5>03430268456</h5>
            <p>shahbazkhanbaazi@gmail.com</p> */}
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
