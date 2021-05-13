import React from "react";
import Slider from "react-input-slider";


export default function SliderComponent({ axis, xmax, xmin, xstep, onChange, value }) {
    return (
      <div>
        <Slider
          axis={axis}
          x={value}
          xmax={xmax}
          xmin={xmin}
          xstep={xstep}
          onChange={({ x }) => onChange(x)}
        />
      </div>
    );
  }

  // const {
  //   handleSubmit,
  //   control,
  //   register,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => console.log(data);

  // console.log(errors);
  // const [age] = watch(["age"]);
  // console.log(age);

//   <div>
//   <p>{age}</p>
//   <Controller
//     control={control}
//     className="biometricForm_Container_input"
//     id="age2"
//     type="range"
//     name="age2"
//     defaultValue={50}
//     render={({ field: { value, onChange } }) => (
//       <Slider
//         axis={"x"}
//         xmax={110}
//         xmin={16}
//         xstep={1}
//         onChange={({ x }) => {
//           onChange(x);
//         }}
//         x={value}
//       />
//     )}
//   />
// </div>