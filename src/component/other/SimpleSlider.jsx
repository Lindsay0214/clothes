import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="simple-slider" style={{ backgroundColor:"rgba(196, 161, 128, 0.219)", paddingTop:"1rem" }}>
        <Slider {...settings}>
          <div className="simple-slider-images">
          <img src="https://picsum.photos/1000/750"></img>
          </div>
          <div className="simple-slider-images">
          <img src="https://picsum.photos/1000/750"></img>
          </div>
          <div className="simple-slider-images">
          <img src="https://picsum.photos/1000/750"></img>
          </div>
          <div className="simple-slider-images">
          <img src="https://picsum.photos/1000/750"></img>
          </div>
          <div className="simple-slider-images">
          <img src="https://picsum.photos/1000/750"></img>
          </div>
          <div className="simple-slider-images">
          <img src="https://picsum.photos/1000/750"></img>
          </div>
        </Slider>
      </div>
    );
  }
}