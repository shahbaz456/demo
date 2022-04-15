/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { RiFacebookFill, RiInstagramFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn, FaGoogle } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

import { BsFillArrowUpSquareFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="my-footer">
        <div class="coontainer my-5">
          <footer
            class="text-center text-lg-start text-white"
            style={{ backgroundColor: "#929fba" }}
          >
            <div class="coontainer p-4 pb-0">
              <div className="number">
                <h1>03430268456</h1>
                <p>Monday-Friday 8:00AM-6:00PM EST</p>
                <div>
                  <button>
                    <BsFillArrowUpSquareFill />
                  </button>
                </div>
              </div>

              <section class="">
                <div class="row">
                  <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">
                      Company name
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </div>

                  <hr class="w-100 clearfix d-md-none" />

                  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">
                      Products
                    </h6>
                    <p>
                      <a class="text-white">MDBootstrap</a>
                    </p>
                    <p>
                      <a class="text-white">MDWordPress</a>
                    </p>
                    <p>
                      <a class="text-white">BrandFlow</a>
                    </p>
                    <p>
                      <a class="text-white">Bootstrap Angular</a>
                    </p>
                  </div>

                  <hr class="w-100 clearfix d-md-none" />

                  <hr class="w-100 clearfix d-md-none" />

                  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">
                      Navigation
                    </h6>
                    <p class="footer-link"></p>
                  </div>

                  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h6 class="text-uppercase mb-4 font-weight-bold">
                      Follow us
                    </h6>

                    <a
                      class="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: "#3b5998" }}
                      href="#!"
                      role="button"
                    >
                      <i class="fab fa-facebook-f">
                        <RiFacebookFill />
                      </i>
                    </a>
                    <a
                      class="btn btn-primary btn-floating m-1"
                      style={{ backgroundColor: " #55acee" }}
                      role="button"
                      href="#!"
                    >
                      <i class="fab fa-twitter">
                        <AiOutlineTwitter />
                      </i>
                    </a>

                    <a
                      class="btn btn-primary btn-floating m-1"
                      href="#!"
                      style={{ backgroundColor: "#dd4b39" }}
                      role="button"
                    >
                      <i class="fab fa-google">
                        <FaGoogle />
                      </i>
                    </a>

                    <a
                      class="btn btn-primary btn-floating m-1"
                      href="#!"
                      style={{ backgroundColor: "#ac2bac" }}
                      role="button"
                    >
                      <i class="fab fa-instagram">
                        <RiInstagramFill />
                      </i>
                    </a>

                    <a
                      class="btn btn-primary btn-floating m-1"
                      href="#!"
                      style={{ backgroundColor: "#0082ca" }}
                      role="button"
                    >
                      <i class="fab fa-linkedin-in">
                        <FaLinkedinIn />
                      </i>
                    </a>

                    <a
                      class="btn btn-primary btn-floating m-1"
                      href="#!"
                      style={{ backgroundColor: "#333333" }}
                      role="button"
                    >
                      <i class="fab fa-github">
                        {" "}
                        <GoMarkGithub />
                      </i>
                    </a>
                  </div>
                </div>
              </section>
            </div>

            <div
              class="text-center p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2022 Copyright: DemoWebsite
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
