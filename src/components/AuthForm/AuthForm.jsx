import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { loginUserThunk, registerUserThunk } from '../../redux/user/userOperations';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import s from './AuthForm.module.css';
import { getStateError } from '../../redux/user/userSelector';

const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation().pathname;
  const error = useSelector(getStateError);

  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const input = e.target;

    input.name === 'name' && setName(input.value);
    input.name === 'email' && setEmail(input.value);
    input.name === 'password' && setPassword(input.value);
  };

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: 'orange',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (location === '/register') {
      if (name === '' || email === '' || password === '') return;
      dispatch(registerUserThunk({ name, email, password }));
    }

    if (location === '/login') {
      if (email === '' || password === '') return;
      dispatch(loginUserThunk({ email, password }));
    }
  };

  return (
    <>
      <h2 className={s.title}>
        {location === '/login' ? 'Sign in' : 'Sign up'}
      </h2>
      <form onSubmit={handleSubmit} className={s.form}>
        <ThemeProvider theme={theme}>
          {location === '/register' && (
            <TextField
              label="Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              variant="standard"
              margin="normal"
              required
            />
          )}
          <TextField
            name="email"
            value={email}
            onChange={handleChangeInput}
            type="email"
            label="Email"
            variant="standard"
            margin="normal"
            required
          />
          <TextField
            type="password"
            name="password"
            value={password}
            onChange={handleChangeInput}
            minLength={7}
            label="Password"
            variant="standard"
            margin="normal"
            required
          />
        </ThemeProvider>
        <Button variant="outlined" type="submit">
          {location === '/register' ? 'Register' : 'Login'}
        </Button>
        {error && <p className={s.error}>Incorrect password or email</p>}
      </form>
      <div className={s.info}>
        {location === '/login' ? (
          <>
            <p className={s.text}>Don't have an account?</p>
            <Link to="/register" className={s.link}>
              Sign up
            </Link>
          </>
        ) : (
          <>
            <p className={s.text}>Do you have an account?</p>
            <Link to="/login" className={s.link}>
              Sign in
            </Link>
          </>
        )}
      </div>
    </>
  );
};
export default AuthForm;