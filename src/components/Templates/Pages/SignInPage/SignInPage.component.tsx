import { Controller, FieldValues, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { UserService } from '../../../../services/user';
import { IUser } from '../../../../models/User';
import { useUser } from '../../../../context/user';
import { useState } from 'react';
import { ErrorToast } from '../../../Molucules/ErrorToast';

const SignInPage = () => {
  const [showPwd, setShowPwd] = useState(false);
  const navigate = useNavigate();
  const UserCTX = useUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const {
    mutate: signIn,
    isSuccess,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (user: Pick<IUser, 'email' | 'password'>) =>
      UserService.getUser(user.email),
    onSuccess: (data, variable, context) => {
      if (data.password === variable.password) {
        UserCTX.signIn(data);
        navigate('/');
      }
    },
  });

  const onsubmit = async (data: FieldValues) => {
    signIn({ email: data.email, password: data.password });
  };

  if (error && !isLoading) return <ErrorToast error={error} />;

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
          <Button type='submit' variant='contained' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Sign In'}
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
