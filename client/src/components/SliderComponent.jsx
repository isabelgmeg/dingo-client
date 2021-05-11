import React from "react";
import { useState } from "react";
import Slider from "react-input-slider";


export default function SliderComponent(props) {

  const [value, setSlider] = useState({});

  const { axis, xmax, xmin, xstep, onChange } = props;;

  return (
    <div>
      <Slider
        axis={axis}
        x={value.x}
        xmax={xmax}
        xmin={xmin}
        xstep={xstep}
        onChange={onChange}
      />
    </div>
  );
}