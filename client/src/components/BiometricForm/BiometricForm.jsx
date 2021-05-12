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
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(errors);
  const [age] = watch(["age"]);
  console.log(age);

  return (
    <div className="biometricForm_Container">
      <form className="biometricForm_form" onSubmit={handleSubmit(onSubmit)}>
        {/* {errors.age && errors.age.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.age && errors.age.type === "minAge" ? (
          <p>{errorMessage.minAge}</p>
        ) : null}

        {/* GENDER */}
        <label className="biometricForm_Container_label" htmlFor="gender">
          Select your gender
        </label>{" "}
        <br></br>
        <select
          className="biometricForm_Container_input"
          defaultValue="notSpecified"
          {...register("gender", { required: true })}
        >
          <option className="biometricForm_Container_select" value="male">
            Male
          </option>
          <option className="biometricForm_Container_select" value="female">
            Female
          </option>
          <option
            className="biometricForm_Container_select"
            value="notSpecified"
            defaultValue
          >
            Just me
          </option>
        </select>
        {errors.gender && errors.gender.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}
        <br></br>
        {/* AGE */}
        <label className="biometricForm_Container_label" htmlFor="age">
          Select your age
        </label>{" "}
        <br></br>
        <input
          className="biometricForm_Container_input"
          type="number"
          placeholder="Select your age"
          {...register("age", { required: true, max: 110, min: 16 })}
        />
        {errors.age && errors.age.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.age && errors.age.type === "min" ? (
          <p>{errorMessage.minAge}</p>
        ) : null}
        {errors.age && errors.age.type === "max" ? (
          <p>{errorMessage.maxAge}</p>
        ) : null}
        <br></br>
        {/* HEIGHT */}
        <label className="biometricForm_Container_label" htmlFor="height">
          Add your height in cm
        </label>{" "}
        <br></br>
        <input
          className="biometricForm_Container_input"
          id="height"
          type="number"
          placeholder="Select your height in cm"
          {...register("height", { required: true, max: 250, min: 50 })}
        />
        {errors.height && errors.height.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.height && errors.height.type === "min" ? (
          <p>{errorMessage.minAge}</p>
        ) : null}
        {errors.height && errors.height.type === "max" ? (
          <p>{errorMessage.maxHeight}</p>
        ) : null}
        <br></br>
        {/* WEIGHT */}
        <label className="biometricForm_Container_label" htmlFor="weight">
          Add your weight in kg
        </label>{" "}
        <br></br>
        <input
          className="biometricForm_Container_input"
          id="weight"
          type="number"
          placeholder="Select your weight in kg"
          {...register("weight", { required: true, max: 300, min: 20 })}
        />
        {errors.weight && errors.weight.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.weight && errors.weight.type === "min" ? (
          <p>{errorMessage.minWeight}</p>
        ) : null}
        {errors.weight && errors.weight.type === "max" ? (
          <p>{errorMessage.maxWeight}</p>
        ) : null}
        <br></br>
        {/* OBJECTIVES */}
        <label className="biometricForm_Container_label" htmlFor="objectives">
          Select your objective
        </label>{" "}
        <br></br>
        <select
          className="biometricForm_Container_input"
          id="objectives"
          type="select"
          placeholder="Select your objective"
          {...register}
        >
          <option className="biometricForm_Container_select" value="add-muscle">
            add-muscle
          </option>
          <option
            className="biometricForm_Container_select"
            value="lose-weight"
            defaultValue
          >
            {" "}
            lose-weight
          </option>
          <option
            className="biometricForm_Container_select"
            value="eat-healthier"
          >
            {" "}
            eat-healthier
          </option>
        </select>
        {errors.objectives && errors.objectives.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}
        <br></br>
        {/* INTOLERANCES */}
        <label className="biometricForm_Container_label" htmlFor="objectives">
          Select your intolerances
        </label>{" "}
        <br></br>
        <input
          className="biometricForm_Container_input"
          type="checkbox"
          id="gluten-intolerant"
          {...register("gluten-intolerant")}
        />
        <label
          className="biometricForm_Container_input_checkbox"
          htmlFor="gluten-intolerant"
        >
          Gluten
        </label>
        <br></br>
        <input
          className="biometricForm_Container_input"
          type="checkbox"
          id="lactose-intolerant"
          {...register("lactose-intolerant")}
        />
        <label
          className="biometricForm_Container_input_checkbox"
          htmlFor="lactose-intolerant"
        >
          Lactose
        </label>
        <br></br>
        <input
          className="biometricForm_Container_input"
          type="checkbox"
          id="nut-alergy"
          {...register("nut-alergy")}
        />
        <label
          className="biometricForm_Container_input_checkbox"
          htmlFor="nut-alergy"
        >
          Nuts
        </label>
        <br></br>
        <input
          className="biometricForm_Container_input"
          type="checkbox"
          id="fructose"
          {...register("fructose")}
        />
        <label
          className="biometricForm_Container_input_checkbox"
          htmlFor="fructose"
        >
          Fructose
        </label>
        <br></br>
        {/* ELABTIMEPERDAY */}
        <label
          className="biometricForm_Container_label"
          htmlFor="elabTimePerDay"
        >
          Add your available daily time to cook in minutes
        </label>{" "}
        <br></br>
        <input
          className="biometricForm_Container_input"
          id="elabTimePerDay"
          type="number"
          placeholder="Minutes per day available to cook"
          {...register("elabTimePerDay", { max: 400, min: 20 })}
        />
        {errors.elabTimePerDay && errors.elabTimePerDay.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.elabTimePerDay && errors.elabTimePerDay.type === "max" ? (
          <p>{errorMessage.maxElabTimePerDay}</p>
        ) : null}
        {errors.elabTimePerDay && errors.elabTimePerDay.type === "min" ? (
          <p>{errorMessage.minElabTimePerDay}</p>
        ) : null}
        <br></br>
        {/* MEALSPERDAY */}
        <label className="biometricForm_Container_label" htmlFor="mealsPerDay">
          Add meals per day
        </label>{" "}
        <br></br>
        <input
          className="biometricForm_Container_input"
          id="mealsPerDay"
          type="number"
          placeholder="Number of meals to cook er day"
          {...register("mealsPerDay", { required: true, max: 6, min: 2 })}
        />
        {errors.mealsPerDay && errors.mealsPerDay.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.mealsPerDay && errors.mealsPerDay.type === "max" ? (
          <p>{errorMessage.maxMealsPerDay}</p>
        ) : null}
        {errors.mealsPerDay && errors.mealsPerDay.type === "min" ? (
          <p>{errorMessage.minMealsPerDay}</p>
        ) : null}
        <br></br>
        <button className="biometricForm_Container_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
