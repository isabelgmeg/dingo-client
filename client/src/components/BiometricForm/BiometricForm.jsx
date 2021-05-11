import React from "react";

import { useForm, Controller } from "react-hook-form";
import Slider from "react-input-slider";

import { errorMessage } from "../../constants/formErrors";

import "./BiometricForm.scss";

export default function BiometricForm() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  //   {
  //     "gender": "male",
  //     "age": 30,
  //     "weight": 56,
  //     "height": 172,
  //     "objectives": "add-muscle",
  //     "intolerances": "none",
  //     "elabTimePerDay": 130,
  //     "mealsPerDay": 2
  // }

  return (
    <div className="biometricForm_Container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Controller
          control={control}
          className="biometricForm_Container_input"
          id="age"
          type="range"
          name="age"
          defaultValue={50}
          render={({ field: { value, onChange } }) => (
            <Slider
              axis={"x"}
              xmax={110}
              xmin={16}
              xstep={1}
              onChange={({ x }) => {
                onChange(x);
              }}
              x={value}
            />
          )}
        /> */}
        {/* {errors.age && errors.age.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.age && errors.age.type === "minAge" ? (
          <p>{errorMessage.minAge}</p>
        ) : null} */}
        {/* GENDER */}
        <label htmlFor="gender">Select your gender</label> <br></br>
        <select
          className="biometricForm_Container_input"
          defaultValue="notSpecified"
          {...register("gender", { required: true })}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="notSpecified" defaultValue>
            Just me
          </option>
        </select>
        <br></br>
        {/* AGE */}
        <label htmlFor="age">Select your age</label> <br></br>
        <input
          className="biometricForm_Container_input"
          type="number"
          placeholder="Select your age"
          {...register("age", { required: true, max: 110, min: 1 })}
        />
        <br></br>
        {/* HEIGHT */}
        <label htmlFor="height">Add your height in cm</label> <br></br>
        <input
          className="biometricForm_Container_input"
          id="height"
          type="number"
          placeholder="Select your height in cm"
          {...register("height", { required: true, max: 250, min: 50 })}
        />
        <br></br>
        {/* WEIGHT */}
        <label htmlFor="weight">Add your weight in kg</label> <br></br>
        <input
          className="biometricForm_Container_input"
          id="weight"
          type="number"
          placeholder="Select your weight in kg"
          {...register("weight", { required: true, max: 300, min: 20 })}
        />
        <br></br>
        {/* OBJECTIVES */}
        <label htmlFor="objectives">Select your objective</label> <br></br>
        <select
          className="biometricForm_Container_input"
          id="objectives"
          type="select"
          placeholder="Select your objective"
          {...register}
        >
          <option value="add-muscle">add-muscle</option>
          <option value="lose-weight"> lose-weight</option>
          <option value="eat-healthier"> eat-healthier</option>
        </select>
        <br></br>
        {/* INTOLERANCES */}
        {/* ELABTIMEPERDAY */}
        <label htmlFor="objectives">
          Add your available daily time to cook
        </label>{" "}
        <br></br>
        <input
          className="biometricForm_Container_input"
          id="elabTimePerDay"
          type="number"
          placeholder="Minutes per day available to cook"
          {...register("elabTimePerDay", { max: 400, min: 7 })}
        />
        <br></br>
        {/* MEALSPERDAY */}
        <label htmlFor="mealsPerDay">Add meals per day</label> <br></br>
        <input
          className="biometricForm_Container_input"
          id="mealsPerDay"
          type="number"
          placeholder="Number of meals to cook er day"
          {...register("mealsPerDay", { required: true, max: 6, min: 1 })}
        />
        <br></br>
        <input type="submit" />
      </form>
    </div>
  );
}
