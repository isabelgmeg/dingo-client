import { useContext, useState } from "react";
import { UserContext } from "../../context/User";

import { useForm } from "react-hook-form";
import { errorMessage } from "../../constants/formErrors";

import "./RegisterForm.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function RegisterForm() {
  const { registerUser, errorRegister } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const HandleFormNewUserSubmit = (formValues, event) => {
    registerUser(formValues)
      .then(() => {
        event.target.reset();
      })
      .catch((err) => {
        console.log(err);
        console.log(errorRegister)
      });
  };

  return (
    <div className="registerForm_Container">
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
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.name && errors.name.type === "minLength" ? (
          <p>{errorMessage.nameFieldLenght}</p>
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
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.email && errors.email.type === "pattern" ? (
          <p>{errorMessage.emailPattern}</p>
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
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.password && errors.password.type === "minLength" ? (
          <p>{errorMessage.minPassword}</p>
        ) : null}
        {errors.password && errors.password.type === "maxLength" ? (
          <p>{errorMessage.maxPassword}</p>
        ) : null}

        <button className="registerForm_Container_button" type="submit">
          Register
        </button>
        {errorRegister && <h3 className="error"> {errorRegister} </h3>}
      </form>
    </div>
  );
}
