import { Navigate } from 'react-router';

interface Props {
  auth : { isAuthenticated: boolean },
  children: any
}

const PrivateRoute = ( props: Props) => {
  const { auth, children } = props;

  return auth.isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;