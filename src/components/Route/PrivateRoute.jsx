import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getStateToken } from '../../redux/user/userSelector';

const PrivateRoute = ({ component: Component, nav, ...props }) => {
  const isAuth = useSelector(getStateToken);
  return isAuth ? <Component {...props} /> : <Navigate to={nav} />;
};

export default PrivateRoute;

PrivateRoute.prototype = {
  component: PropTypes.object,
  nav: PropTypes.string.isRequired,
  props: PropTypes.object,
};