import "./BiometricData.scss";

export default function BiometricData({
  gender,
  objectives,
  weight,
  height,
  bmr,
}) {
  return (
    <div className="biometricData">
      <p className="biometricData_text">Taking account your </p>
      <p className="biometricData_data">{gender} </p>
      <p className="biometricData_text">gender , your height </p>
      <p className="biometricData_data">{height}cms </p>
      <p className="biometricData_text">your weight</p>
      <p className="biometricData_data">{weight}kgs </p>
      <p className="biometricData_text">and your objective to</p>
      <p className="biometricData_data">{objectives} </p>
      <p className="biometricData_text"> Your basal Metabolic Rate is</p>
      <p className="biometricData_brm">{bmr} daily calories </p>
    </div>
  );
}
