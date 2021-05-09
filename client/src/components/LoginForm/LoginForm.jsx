

import React from "react";

import { useForm } from "react-hook-form";
import { postLogin } from "../../services/auth";
import { errorMessage } from "../../constants/formErrors";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  console.log(errors);


  const handleFormLoginSumbit = (formValues) => {
    const apiRes = postLogin(formValues);
    console.log(apiRes)
  };

  return (
    <div className="loginForm_Container">
      <form onSubmit={handleSubmit(handleFormLoginSumbit)}>
        <input
          id="email"
          type="email"
          placeholder="rickAstley@nevergonnagiveup.com"
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
