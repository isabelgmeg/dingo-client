import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import { useForm } from "react-hook-form";
import { errorMessage } from "../constants/formErrors";

import MiniCard from "../components/MiniCard/MiniCard";
import NavBar from "../components/NavBar/NavBar";
import WeightChart from "../components/WeightChart/WeightChart";
import BiometricData from "../components/BiometricData/BiometricData";

import "../styles/profile.scss";

export default function ProfilePage() {
  const {
    userBiometrics,
    newWeightUser,
    userFavs,
    biometricsUser,
  } = useContext(UserContext);
  const [newWeight, setNewWeight] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (weight, event) => {
    console.log(userBiometrics);
    newWeightUser(weight)
      .then((res) => {
        event.target.reset();
        setNewWeight(weight)

      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    biometricsUser()
      .then((res) => {
        console.log("update bio", res);
        console.log("userBiometrics=>", userBiometrics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newWeight]);

  return (
    <div className="profilePage">
      <NavBar />
      {userBiometrics !== null ? (
        <BiometricData
          gender={userBiometrics.gender}
          objectives={userBiometrics.objectives}
          weight={userBiometrics.weight}
          height={userBiometrics.height}
          bmr={userBiometrics.basalMetabolicRate}
        />
      ) : null}
      <p className="profilePage_weightText">
        Add your current weight and see your progress!
      </p>
      <div className="profilePage_modifyWeight">
        <form
          className="profilePage_modifyWeight_form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="profilePage_modifyWeight_label" htmlFor="weight">
            {""}
          </label>
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
      {userBiometrics !== null ? (
        <WeightChart data={userBiometrics.weightProgress} />
      ) : null}
      <div className="profilePage_container_recipes">
        <ul className="profilePage_container_recipes_item">
          {userFavs &&
            userFavs.map((recipe, index) => (
              <li key={index}>
                <MiniCard
                  recipeId={recipe._id}
                  recipeName={recipe.name}
                  elabTime={recipe.elabTime}
                  calories={recipe.calories}
                  picture={recipe.picture}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
