import React from "react";

import { useForm } from "react-hook-form";
import { postRegister } from "../../services/auth";
import { errorMessage } from "../../constants/formErrors";

import "./RegisterForm.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


export default function RegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const handleFormNewUserSubmit = (formValues) => {
    const apiRes = postRegister(formValues);
    console.log(apiRes.data);
  };

  return (
    <div className="registerForm_Container">
      <form onSubmit={handleSubmit(handleFormNewUserSubmit)}>
        <FontAwesomeIcon
          icon={faUser}
          className="loginForm_Container_icon"
        />
        <input
          className="registerForm_Container_input"
          id="name"
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
          className="loginForm_Container_icon"
        />
        <input
          className="registerForm_Container_input"
          id="surname"
          type="text"
          placeholder="Surname"
          {...register("surname", {
            required: false,
            maxLength: 100,
          })}
        />
        {errors.surname && errors.surname.type === "required" ? (
          <p>{errorMessage.required}</p>
        ) : null}
        {errors.name && errors.surname.type === "minLength" ? (
          <p>{errorMessage.surnameFieldLenght}</p>
        ) : null}
        <FontAwesomeIcon
          icon={faEnvelope}
          className="loginForm_Container_icon"
        />
        <input className="registerForm_Container_input"
          id="email"
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
          className="loginForm_Container_icon"
        />
        <input className="registerForm_Container_input"
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
        {errors.password && errors.password.type === "minLength" ? (
          <p>{errorMessage.passwordFieldLenght}</p>
        ) : null}
        {errors.password && errors.password.type === "maxLength" ? (
          <p>{errorMessage.passwordFieldLenght}</p>
        ) : null}

        <button className="registerForm_Container_button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
