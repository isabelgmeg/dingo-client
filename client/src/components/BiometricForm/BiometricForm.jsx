import React from "react";

import { useForm, Controller } from "react-hook-form";
import Slider from "react-input-slider";


import "./BiometricForm.scss";

export default function BiometricForm() {
    const { handleSubmit, control } = useForm();
  
    const onSubmit = (data) => console.log(data);
  
    return (
      <div className="registerForm_Container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="test"
            defaultValue={50}
            render={({ field: { value, onChange } }) => (
              <Slider
                axis={"x"}
                xmax={100}
                xmin={1}
                xstep={1}
                onChange={({ x }) => onChange(x)}
                x={value}
              />
            )}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }