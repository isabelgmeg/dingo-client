import React from "react";

import { useForm } from "react-hook-form";
import { postRegister } from "../../services/auth";
import { errorMessage } from "../../constants/formErrors";

export default function RegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  console.log(errors);


  const handleFormNewUserSubmit = (formValues) => {
    const apiRes = postRegister(formValues);
    console.log(apiRes.data)
  };

  return (
    <div className="registerForm_Container">
      <form onSubmit={handleSubmit(handleFormNewUserSubmit)}>
        <input
          id="name"
          type="text"
          placeholder="name"
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
        <input
          id="surname"
          type="text"
          placeholder="surname"
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
        <input
          id="email"
          type="email"
          placeholder="email"
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
        <input
          id="password"
          type="password"
          placeholder="password"
          {...register("password", {
            required: true,
            maxLength: 30,
            minLength: 4
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
