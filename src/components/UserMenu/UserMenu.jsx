import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../../redux/user/userOperations';
import { getStateEmail, getStateToken } from '../../redux/user/userSelector';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const email = useSelector(getStateEmail);
  const token = useSelector(getStateToken);
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <p className={s.email}>{email ? email : 'Hello Guest!'}</p>
      {token && (
        <button
          type="button"
          className={s.btn}
          onClick={() => dispatch(logoutUserThunk())}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default UserMenu;