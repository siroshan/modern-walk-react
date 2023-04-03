import { Controller, FieldValues, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { setSessionCookie } from '../../../../utils/cookie';
import { MODEREN_WALK_USER_ID } from '../../../../config/constants';
import { UserService } from '../../../../services/user';
import { IUser } from '../../../../types/models/User';

const SignInPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  const userService = UserService.getInstance();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onsubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const user: IUser = await userService.getUser(data.email);

      if (user.password === data.password) {
        if (user.id !== undefined) {
          setSessionCookie(MODEREN_WALK_USER_ID, user.id);
        }
        navigate('/');
      } else {
        console.log('not matched');
      }
    } catch (err) {
      console.log('sign in error', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box maxWidth={400} mx='auto' width={1}>
      <form onSubmit={handleSubmit(onsubmit)}>
        <Typography
          variant='h4'
          marginBottom={6}
          textAlign='center'
          mt={8}
          mb={4}
        >
          Welcome Back
        </Typography>
        <Box mb={2}>
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'Please enter E-mail.',
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                size='small'
                label='E-mail'
                variant='outlined'
                error={!!errors.email}
                helperText={errors.email && String(errors.email.message)}
              />
            )}
          />
        </Box>
        <Box mb={2} width={1}>
          <Controller
            name='password'
            control={control}
            defaultValue=''
            rules={{
              required: 'Please password.',
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Password'
                type={showPwd ? undefined : 'password'}
                size='small'
                variant='outlined'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={() => setShowPwd((s) => !s)}
                      >
                        {showPwd ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(errors.password)}
                helperText={errors.password && String(errors.password.message)}
              />
            )}
          />
          <Link to='/forgot-password' className='link'>
            Forgot password?
          </Link>
        </Box>
        <Box width={1} textAlign='center' mb={8} mt={4}>
          <Button type='submit' variant='contained'>
            Sign In
          </Button>
          <Box mt={4}>
            <Link to='/signup'>New here? Create Account.</Link>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default SignInPage;
