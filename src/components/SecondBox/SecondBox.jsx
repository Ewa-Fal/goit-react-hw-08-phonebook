import PropTypes from 'prop-types';
import UserMenu from '../UserMenu/UserMenu';
import s from './SecondBox.module.css';

const SecondBox = ({ children }) => {
  return (
    <div className={`${s.box} box`}>
      <UserMenu />
      {children}
    </div>
  );
};

export default SecondBox;

SecondBox.prototype = {
  children: PropTypes.object,
};