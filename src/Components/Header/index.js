import React from "react";
import Navbar from "../Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic from "../../Assets/Images/baner.png";
import pic3 from "../../Assets/Images/baner3.jpg";
import Nav from "../Nav";
import Body from "../Body";
import "./header.css";

function Header() {
  return (
    <>
      <div>
        <Nav />
        <Navbar />
        <div className="custom-carousal">
          <Carousel showArrows={true} showThumbs={false} dynamicHeight={50}>
            <div className="picture">
              <img src={pic} alt="pic" />
            </div>

            <div className="picture">
              <img src={pic3} alt="pic3" />
            </div>
          </Carousel>
        </div>
      </div>
      <div>
        <Body />
      </div>
    </>
  );
}

export default Header;
