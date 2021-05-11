import React from "react";
import Slider from "react-input-slider";


export default function SliderComponent(props) {

  const { axis, xmax, xmin, xstep, onChange, defaultValue } = props;

  return (
    <div>
      <Slider
        axis={axis}
        xmax={xmax}
        xmin={xmin}
        xstep={xstep}
        onChange={onChange}
        defaultValue={defaultValue}
      />
    </div>
  );
}