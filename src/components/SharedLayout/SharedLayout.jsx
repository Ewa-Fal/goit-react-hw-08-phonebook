import { useSelector } from 'react-redux';
import { Suspense, useEffect, lazy } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Container from '../Container/Container';
import FirstBox from '../FirstBox/FirstBox';
import SecondBox from '../SecondBox/SecondBox';
import { getStateToken } from '../../redux/user/userSelector';
import s from './SharedLayout.module.css';
import Loader from '../../components/Loader/Loader';

const BlockForContacts = lazy(() =>
  import('../BlockForContacts/BlockForContacts')
);

const SharedLayout = () => {
  const isAuth = useSelector(getStateToken);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      isAuth ? navigate('contacts') : navigate('login');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <FirstBox>
        <h1 className={s.title}>PHONEBOOK</h1>
        {isAuth ? (
          <Suspense fallback={<Loader />}>
            <BlockForContacts />
          </Suspense>
        ) : (
          <p className={s.text}>
            Hello dear guest! Register and use our platform to save contacts.
          </p>
        )}
      </FirstBox>
      <SecondBox>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </SecondBox>
    </Container>
  );
};

export default SharedLayout;