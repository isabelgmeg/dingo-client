import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

import SliderComponent from "../SliderComponent";
import { postBiometrics } from "../../services/biometrics";
import { errorMessage } from "../../constants/formErrors";
//import Slider from "@material-ui/core/Slider";

import "./BiometricForm.scss";

export default function BiometricForm() {
  const { handleSubmit, control } = useForm();

  return (
    <div className="registerForm_Container">
      <form onSubmit={handleSubmit(onsubmit)}>
        <Controller
          control={control}
          name="test"
          render={({ axis, xmax, xmin, xstep, onChange }) => (
            <SliderComponent
              axis={"x"}
              xmax={100}
              xmin={1}
              xstep={1}
              onChange={(x) => onChange(parseInt(x.target.value))}
            />
          )}
        />
        <button className="registerForm_Container_button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
