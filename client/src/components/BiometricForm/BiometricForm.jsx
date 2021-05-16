import React from "react";

import { useForm } from "react-hook-form";

import { errorMessage } from "../../constants/formErrors";
import { postBiometrics } from "../../services/biometrics";

import "./BiometricForm.scss";

export default function BiometricForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const intolerancesFromUser = [];

  const checkIntolerances = (data) => {
    if (data.fructose) {
      intolerancesFromUser.push("fructose");
    }
    if (data.gluten) {
      intolerancesFromUser.push("gluten-intolerant");
    }
    if (data.lactose) {
      intolerancesFromUser.push("lactose-intolerant");
    }
    if (data.nuts) {
      intolerancesFromUser.push("nut-alergy");
    } else {
      intolerancesFromUser.push("none");
    }
    return intolerancesFromUser;
  };

  const onSubmit = (data) => {
     checkIntolerances(data);
    let userBiometrics = {
      gender: data.gender,
      age: data.age,
      height: data.height,
      weight: data.weight,
      objectives: data.objectives,
      intolerances: intolerancesFromUser,
      elabTimePerDay: data.elabTimePerDay,
      mealsPerDay: data.mealsPerDay,
    };
    postBiometrics(userBiometrics);
    console.log( "postBiometrics", postBiometrics(userBiometrics))
  };

  return (
    <div className="biometricForm_Container">
      <form className="biometricForm_form" onSubmit={handleSubmit(onSubmit)}>
        {/* GENDER */}
        <label className="biometricForm_Container_label" htmlFor="gender">
          Select your gender
        </label>
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
          <p className="biometricForm_error">{errorMessage.required}</p>
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
          <p className="biometricForm_error">{errorMessage.required}</p>
        ) : null}
        {errors.age && errors.age.type === "min" ? (
          <p className="biometricForm_error">{errorMessage.minAge}</p>
        ) : null}
        {errors.age && errors.age.type === "max" ? (
          <p className="biometricForm_error">{errorMessage.maxAge}</p>
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
          <p className="biometricForm_error">{errorMessage.required}</p>
        ) : null}
        {errors.height && errors.height.type === "min" ? (
          <p className="biometricForm_error">{errorMessage.minAge}</p>
        ) : null}
        {errors.height && errors.height.type === "max" ? (
          <p className="biometricForm_error">{errorMessage.maxHeight}</p>
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
          <p className="biometricForm_error">{errorMessage.required}</p>
        ) : null}
        {errors.weight && errors.weight.type === "min" ? (
          <p className="biometricForm_error">{errorMessage.minWeight}</p>
        ) : null}
        {errors.weight && errors.weight.type === "max" ? (
          <p className="biometricForm_error">{errorMessage.maxWeight}</p>
        ) : null}
        <br></br>
        {/* OBJECTIVES */}
        <label className="biometricForm_Container_label" htmlFor="objectives">
          Select your objective
        </label>
        <br></br>
        <select
          className="biometricForm_Container_input"
          defaultValue="eat-healthier"
          {...register("objectives", { required: true })}
        >
          <option className="biometricForm_Container_select" value="eat-healthier">
            Eat healthier
          </option>
          <option className="biometricForm_Container_select" value="add-muscle">
            Add muscle
          </option>
          <option
            className="biometricForm_Container_select"
            value="lose-weight"
            defaultValue
          >
            Lose weight
          </option>
        </select>
        {errors.objectives && errors.objectives.type === "required" ? (
          <p className="biometricForm_error">{errorMessage.required}</p>
        ) : null}
        <br></br>
        {/* INTOLERANCES */}
        <label className="biometricForm_Container_label" htmlFor="intolerances">
          Select your intolerances
        </label>{" "}
        <br></br>
        <input
          className="biometricForm_Container_input"
          type="checkbox"
          id="gluten"
          {...register("gluten")}
        />
        <label
          className="biometricForm_Container_input_checkbox"
          htmlFor="gluten"
        >
          Gluten
        </label>
        <br></br>
        <input
          className="biometricForm_Container_input"
          type="checkbox"
          id="lactose"
          {...register("lactose")}
        />
        <label
          className="biometricForm_Container_input_checkbox"
          htmlFor="lactose"
        >
          Lactose
        </label>
        <br></br>
        <input
          className="biometricForm_Container_input"
          type="checkbox"
          id="nuts"
          {...register("nuts")}
        />
        <label
          className="biometricForm_Container_input_checkbox"
          htmlFor="nuts"
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
          <p className="biometricForm_error">{errorMessage.required}</p>
        ) : null}
        {errors.elabTimePerDay && errors.elabTimePerDay.type === "max" ? (
          <p className="biometricForm_error">{errorMessage.maxElabTimePerDay}</p>
        ) : null}
        {errors.elabTimePerDay && errors.elabTimePerDay.type === "min" ? (
          <p className="biometricForm_error">{errorMessage.minElabTimePerDay}</p>
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
          <p className="biometricForm_error">{errorMessage.required}</p>
        ) : null}
        {errors.mealsPerDay && errors.mealsPerDay.type === "max" ? (
          <p className="biometricForm_error">{errorMessage.maxMealsPerDay}</p>
        ) : null}
        {errors.mealsPerDay && errors.mealsPerDay.type === "min" ? (
          <p className="biometricForm_error">{errorMessage.minMealsPerDay}</p>
        ) : null}
        <br></br>
        <button className="biometricForm_Container_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
