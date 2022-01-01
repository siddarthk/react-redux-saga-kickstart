import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { selector } from '../../domain/login';

interface Props {
  children: any
}

const PrivateRoute = ( props: Props) => {
  const { children } = props;
  const isAuthenticated = useSelector(selector.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;