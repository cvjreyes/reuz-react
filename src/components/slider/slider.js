import React, { useState } from "react";
import "./slider.css";

const Slider = () => {
  const [sliderData, setSliderData] = useState({
    userPrice: 30,
    priceStart: 0,
    priceEnd: 10000
  });

  const getStyle = (current, max, reverse) => {
    const active = reverse ? "#e89f71" : "#D6D8E7";
    const inactive = reverse ? "#D6D8E7" : "#e89f71";
    const progress = Math.floor((current / max) * 100);
    const degress = reverse ? progress - 100 : progress;

    return {
      background: `linear-gradient(90deg, ${active} 0% ${degress}%, ${inactive} ${degress}% 100%)`
    };
  };

  return (
    <>
      <div className="slider__container">
        <div className="slider__prices">
          <div className="value">
            <div className="buble_min_price">{sliderData.priceStart + " €"} </div>
          </div>
          <input
            type="range"
            min="0"
            max="4999"
            value={sliderData.priceStart}
            style={getStyle(sliderData.priceStart, 4999)}
            onChange={(e) =>
              setSliderData({
                ...sliderData,
                priceStart: parseInt(e.target.value)
              })
            }
          />
        </div>

        <div className="slider__prices">
          <div className="value">
            <div className="buble_max_price">{sliderData.priceEnd + " €"} </div>
          </div>
          <input
            type="range"
            min="5000"
            max="10000"
            value={sliderData.priceEnd}
            style={getStyle(sliderData.priceEnd, 5000, true)}
            onChange={(e) =>
              setSliderData({
                ...sliderData,
                priceEnd: parseInt(e.target.value)
              })
            }
          />
        </div>
      </div>
    </>
  );
};

export default Slider;