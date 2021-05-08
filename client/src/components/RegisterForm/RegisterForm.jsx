import React from "react";

import { useForm } from "react-hook-form";
import { postRegister } from "../../services/auth";

export default function RegisterForm() {

    const { handleSubmit, register, formState: {errors} } = useForm();
  console.log(errors)
    const handleFormNewUserSubmit = formValues => {
      console.log("has pulsado el botón!")
      postRegister(formValues);
        console.log(formValues)
    };


  return (
    <div>
    <form onSubmit={handleSubmit(handleFormNewUserSubmit)}>
      <input
        id="name"
        type="text"
        placeholder="name"
        {...register("name", {
          required: true,
          maxLength: 80,
        })}
      />
      <input
      id= "surname"
        type="text"
        placeholder="surname"
        {...register("surname", {
          required: false,
          maxLength: 100,
        })}
      />
      <input
      id="email"
        type="email"
        placeholder="email"
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
      />
      <input
      id="password"
        type="password"
        placeholder="password"
        {...register("password", {
          required: true,
          maxLength: 30,
        })}
      />

      <button type="submit">Register</button>
    </form>
    </div>
  );
}
