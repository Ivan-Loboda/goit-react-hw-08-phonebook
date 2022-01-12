import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

const PrivateRoute = ({ children, redirectTo = '/', ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
