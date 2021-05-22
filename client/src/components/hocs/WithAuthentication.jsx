import { useContext } from 'react';
import Loader from 'react-loader-spinner';

import { UserContext } from '../../context/User';
import LoginForm from '../../pages/LoginPage';

function WithAuthentication({ children }) {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={2000}
      />
    );
  }

  return <>{user ? <>{children}</> : <LoginForm />}</>;
}

export default WithAuthentication;