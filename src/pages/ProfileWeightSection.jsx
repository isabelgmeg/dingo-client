import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../context/User";

import { errorMessage } from "../constants/formErrors";
import NavBar from "../components/NavBar/NavBar";

export default function ProfileWeightSection() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { newWeightUser, userBiometrics } = useContext(
    UserContext
  );

  const onSubmitWeight = (data, event) => {
    newWeightUser(data).then((res)=> {
        console.log(res)
        event.target.reset()
    })      
    .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="profileWeightSection">
      <NavBar />
      <div className="profileWeightSection_container">
          <label className="profilePage_modifyWeight_label" htmlFor="weight">
            <p className="profilePage_weightText">
              Add your current weight and see your progress!
            </p>
          </label>
        <form
          className="profileWeightSection_container_form"
          onSubmit={handleSubmit(onSubmitWeight)}
        >
          <input
            className="profilePage_modifyWeight_input"
            id="weight"
            type="number"
            placeholder="Select your weight in kg"
            {...register("weight", { required: true, max: 300, min: 20 })}
          />
          {errors.weight && errors.weight.type === "min" ? (
            <p className="biometricForm_error">{errorMessage.minWeight}</p>
          ) : null}
          {errors.weight && errors.weight.type === "max" ? (
            <p className="biometricForm_error">{errorMessage.maxWeight}</p>
          ) : null}
          <button className="profilePage_modifyWeight_button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
