import PropTypes from 'prop-types';
import s from './FirstBox.module.css';

const FirstBox = ({ children }) => {
  return <div className={s.firstBox}>{children}</div>;
};

export default FirstBox;

FirstBox.prototype = {
  children: PropTypes.object,
};