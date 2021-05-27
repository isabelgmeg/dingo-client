import { useContext } from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar"
import BimetricForm from "../components/BiometricForm/BiometricForm";
import BiometricData from "../components/BiometricData/BiometricData";
import { UserContext } from "../context/User";

import '../styles/biometric.scss'

export default function BiometricPage() {
  const { userBiometrics } = useContext(UserContext);

  return (
    <div className="biometricPage_container">
      <NavBar />
      {userBiometrics !== null ? (
        <div className="biometricPage_container_data">
          <BiometricData
            gender={userBiometrics.gender}
            objectives={userBiometrics.objectives}
            weight={userBiometrics.weight}
            height={userBiometrics.height}
            bmr={userBiometrics.basalMetabolicRate}
          />
          <Link to="/mealPlan" className="biometricPage_container_button">Ready for meal Plan</Link>
        </div>
      ) : (
        <BimetricForm />
      )}
    </div>
  );
}
