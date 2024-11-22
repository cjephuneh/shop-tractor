import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ShopSideNav from "../../components/pageProps/shopPage/shopBy/categoryhome.js";

import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Image from "../designLayouts/Image";
import Mainslider from "../../components/mainslider.js";
import Hero from "../../components/hero.js";
import Hero1 from "../../components/hero1.js";


const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // beforeChange: (prev, next) => {
    //   setDocActive(next);
    // },
    // appendDots: (dots) => (
    //   <div
    //     style={{
    //       position: "absolute",
    //       top: "80%",
    //       left: "7%",
    //       transform: "translateY(-50%)",
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <div
    //     style={
    //       i === dotActive
    //         ? {
    //             width: "30px",
    //             color: "#262626",
    //             borderRight: "3px #262626 solid",
    //             padding: "8px 0",
    //             cursor: "pointer",
    //           }
    //         : {
    //             width: "30px",
    //             color: "transparent",
    //             borderRight: "3px white solid",
    //             padding: "8px 0",
    //             cursor: "pointer",
    //           }
    //     }
    //   >
    //     0{i + 1}
    //   </div>
    // ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white flex space-x-2">
      <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex px-12 p-4 h-full">
          <ShopSideNav />
        </div>
    <div className=' w-full max-w-lg mt-4  lg:max-w-[670px] mx-auto'>
      <Slider {...settings}>
        <Link to="/shop">
          <div>
            <Mainslider />
          </div>
        </Link>
        <Link to="/shop">
          <div>
            <Hero />
          </div>
        </Link>
        <Link to="/shop">
          <div>
            <Hero1 />
          </div>
        </Link>
      </Slider>
      </div>      
    </div>
  );
};

export default Banner;
