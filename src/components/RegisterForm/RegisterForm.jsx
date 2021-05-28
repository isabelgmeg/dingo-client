import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { UserContext } from "../../context/User";

import { useForm } from "react-hook-form";
import { errorMessage } from "../../constants/formErrors";

import "./RegisterForm.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function RegisterForm() {
  const { registerUser } = useContext(UserContext);
  const [errorMessageRegister, setErrorMessage] = useState("");
  const [ logedUser, setLogeduser ] = useState(null)

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const HandleFormNewUserSubmit = (formValues, event) => {
    registerUser(formValues)
    .then(() => {
      event.target.reset();
      setLogeduser(true)

    })
    .catch((err) => {
      console.log(err);
      setErrorMessage("hola")
      console.log(errorMessageRegister)
    });
  };
  
  return (
    <div className="registerForm_Container">
          { logedUser ? (<Redirect push to="/biometric"/>) : null }
      <form
        className="registerForm_form"
        onSubmit={handleSubmit(HandleFormNewUserSubmit)}
      >
        <FontAwesomeIcon
          icon={faUser}
          className="registerForm_Container_icon"
        />
        <input
          className="registerForm_Container_input"
          type="text"
          placeholder="Name"
          {...register("name", {
            required: true,
            maxLength: 80,
            minLength: 2,
          })}
        />
        {errors.name && errors.name.type === "required" ? (
          <p className="registercForm_error" >{errorMessage.required}</p>
        ) : null}
        {errors.name && errors.name.type === "minLength" ? (
          <p className="registercForm_error" >{errorMessage.nameFieldLenght}</p>
        ) : null}
        <FontAwesomeIcon
          icon={faUser}
          className="registerForm_Container_icon"
        />
        <input
          className="registerForm_Container_input"
          type="text"
          placeholder="Surname"
          {...register("surname", {
            minLength: 1,
            maxLength: 100,
          })}
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          className="registerForm_Container_icon"
        />
        <input
          className="registerForm_Container_input"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && errors.email.type === "required" ? (
          <p className="registercForm_error" >{errorMessage.required}</p>
        ) : null}
        {errors.email && errors.email.type === "pattern" ? (
          <p className="registercForm_error" >{errorMessage.emailPattern}</p>
        ) : null}
        <FontAwesomeIcon
          icon={faLock}
          className="registerForm_Container_icon"
        />
        <input
          className="registerForm_Container_input"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            maxLength: 30,
            minLength: 4,
          })}
        />
        {errors.password && errors.password.type === "required" ? (
          <p className="registercForm_error" >{errorMessage.required}</p>
        ) : null}
        {errors.password && errors.password.type === "minLength" ? (
          <p className="registercForm_error" >{errorMessage.minPassword}</p>
        ) : null}
        {errors.password && errors.password.type === "maxLength" ? (
          <p className="registercForm_error" >{errorMessage.maxPassword}</p>
        ) : null}

        <button className="registerForm_Container_button" type="submit">
          Register
        </button>
      {errorMessageRegister && <h1 > {errorMessageRegister} </h1>}
      </form>
    </div>
  );
}
