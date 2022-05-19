import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    appendDots: (dots) => (
      <div
        style={{
          width: "100%",
          //backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          marginBottom: "50px",
          position: "absolute",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    // customPaging: function (i) {
    //   return (
    //     <a >
    //       <div
    //         onM
    //         style={{
    //           border: "2px solid black",
    //           borderRadius: "50%",
    //           padding: "10px",
    //           backgroundColor: "gray",
    //         }}
    //       ></div>
    //     </a>
    //   );
    // },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <div style={{ height: "500", width: "100%", backgroundColor: "white" }}>
      <Slider {...settings}>
        <div>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3Ryb25pYyUyMHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width="100%"
            height="400"
          />
          <h2
            style={{
              position: "absolute",
              bottom: "30%",
              fontSize: "20vw",
            }}
          >
            hello there
          </h2>
        </div>
        <div>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1524802020103-aa46eaffcaa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbiUyMGRyaW5rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width="100%"
            height="400"
          />
          <h2
            style={{
              position: "absolute",
              bottom: "30%",
              fontSize: "20vw",
            }}
          >
            hello there
          </h2>
        </div>
        <div>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            width="100%"
            height="400"
          />
          <h2
            style={{
              position: "absolute",
              bottom: "30%",
              fontSize: "20vw",
            }}
          >
            hello there
          </h2>
        </div>
        <div>
          <img
            alt=""
            src="https://media.istockphoto.com/photos/flat-lay-with-womans-clothes-and-accessories-picture-id1339264709?b=1&k=20&m=1339264709&s=170667a&w=0&h=qzBCqQvXpk-eLH8e72ZRaWRPuvWFwcUKZqGr1IsyTlE="
            width="100%"
            height="400"
          />
          <h2
            style={{
              position: "absolute",
              bottom: "30%",
              fontSize: "20vw",
            }}
          >
            yo wassup
          </h2>
        </div>
      </Slider>
    </div>
  );
};
