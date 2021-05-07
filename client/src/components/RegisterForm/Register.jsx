import { useForm } from "react-hook-form";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="name"
        {...register("name", {
          required: true,
          max: 30,
          min: 1,
          maxLength: 80,
        })}
      />
      <input
        type="text"
        placeholder="surname"
        {...register("surname", {
          required: false,
          max: 30,
          min: 1,
          maxLength: 100,
        })}
      />
      <input
        type="email"
        placeholder="email"
        {...register("email", {
          required: true,
          max: 60,
          min: 5,
          pattern: /^\S+@\S+$/i,
        })}
      />
      <input
        type="text"
        placeholder="password"
        {...register("password", {
          required: true,
          max: 60,
          min: 5,
          maxLength: 30,
        })}
      />

      <input type="submit" />
    </form>
  );
}
