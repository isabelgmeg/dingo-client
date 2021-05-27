import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/User";

import { useForm } from "react-hook-form";
import { errorMessage } from "../../constants/formErrors";

import "./LoginForm.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'


export default function LoginForm() {
  const { loginUser, userBiometrics } = useContext(UserContext);
  const [ logedUser, setLogeduser ] = useState(null)
  const [ error, setError ] = useState(null)


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleFormLoginSumbit = (formValues, event) => {
    loginUser(formValues)
    .then(() => {
      setLogeduser(true)
      event.target.reset();
    })
    .catch((err) => {
      console.log(err);
    });
  };
  
  return (
    <div className="loginForm_Container">
        { logedUser && userBiometrics ? (<Redirect push to="/mealPlan"/>) : (<Redirect push to="/biometric"/>) }
      <form className="loginForm_form"
        onSubmit={handleSubmit(handleFormLoginSumbit)}>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="loginForm_Container_icon"
        />
        <input className ="loginForm_Container_input"
          id="email"
          type="email"
          placeholder="Email Address"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && errors.email.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.email && errors.email.type === "pattern" ? (
          <p>{errorMessage.emailPattern}</p>
        ) : null}
        <br></br>
        <FontAwesomeIcon
          icon={faLock}
          className="loginForm_Container_icon"
        />
        <input className ="loginForm_Container_input"
          id="password"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            maxLength: 30,
            minLength: 4,
          })}
        />
        {errors.password && errors.password.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}

        <button className="loginForm_Container_button" type="submit">Sign In</button>
      </form>
    </div>
  );
}
