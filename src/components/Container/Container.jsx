import PropTypes from 'prop-types';
import s from './Container.module.css';

const Container = ({ children }) => {
  return <div className={s.container}> {children}</div>;
};

Container.prototype = {
  children: PropTypes.object,
};

export default Container;