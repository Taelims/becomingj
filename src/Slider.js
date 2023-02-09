import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div class="image-box">
            
            <img class="image-thumbnail" src='/img/img1.jpg'></img>
          </div>
          <div class="image-box">
            <h3>2</h3>
            <img class="image-thumbnail" src='/img/img2.jpg'></img>
          </div>
          <div class="image-box">
	          <img class="image-thumbnail"  src='/img/img3.jpg' ></img>
          </div>
          <div class="image-box">
	          
          </div>
          <div class="image-box">
	          
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}