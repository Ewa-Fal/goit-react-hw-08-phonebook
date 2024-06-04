import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getStateToken } from '../../redux/user/userSelector';

const PublicRoute = ({
  component: Component,
  nav,
  restricted = false,
  ...props
}) => {
  const isAuth = useSelector(getStateToken);

  return isAuth && restricted ? (
    <Navigate to={nav} />
  ) : (
    <Component {...props} />
  );
};

export default PublicRoute;

PublicRoute.prototype = {
  component: PropTypes.object,
  nav: PropTypes.string.isRequired,
  props: PropTypes.object,
  restricted: PropTypes.bool,
};