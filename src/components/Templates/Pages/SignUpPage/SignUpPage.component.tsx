import { Controller, FieldValues, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useRef, useState } from 'react';
import { MaxWidthLayout } from '../../../Layouts/MaxWidthLayout';
import { useNavigate } from 'react-router-dom';
import { UserService } from '../../../../services/user';
import { IUser } from '../../../../types/models/User';
import { useUser } from '../../../../context/user';

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const user = useUser();
  const userService = UserService.getInstance();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const password = useRef({});
  password.current = watch('password', '');

  const onsubmit = async (data: FieldValues) => {
    setIsLoading(true);
    try {
      const userRes: IUser = await userService.createUser({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      });
      if (userRes.id !== undefined) {
        user?.setUser(userRes)
      }
      navigate('/');
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <MaxWidthLayout>
      <Box maxWidth={400} width={1} mx='auto'>
        <form onSubmit={handleSubmit(onsubmit)}>
          <Typography
            variant='h3'
            color='primary'
            marginBottom={6}
            textAlign='center'
            mt={8}
            mb={4}
          >
            Create Account
          </Typography>
          <Box mb={2}>
            <Controller
              name='firstName'
              control={control}
              rules={{
                required: 'Please enter first name',
                maxLength: {
                  value: 100,
                  message: 'First Name is too lengthy',
                },
                pattern: {
                  value: /^[a-zA-z ,.'-]+$/,
                  message: 'Please enter valid first name',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  size='small'
                  label='First Name'
                  variant='outlined'
                  error={!!errors.firstName}
                  helperText={
                    errors.firstName ? String(errors.firstName.message) : null
                  }
                />
              )}
            />
          </Box>
          <Box mb={2}>
            <Controller
              name='lastName'
              control={control}
              rules={{
                required: 'Please enter last name',
                pattern: {
                  value: /^[a-zA-Z ,.'-]+$/,
                  message: 'Please enter valid last name',
                },
              }}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='Last Name'
                  size='small'
                  error={!!errors.lastName}
                  helperText={
                    errors.lastName ? String(errors.lastName.message) : null
                  }
                />
              )}
            />
          </Box>
          <Box mb={2}>
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'Please enter e-mail.',
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter valid e-mail',
                },
              }}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label='E-mail address'
                  size='small'
                  error={!!errors.email}
                  helperText={
                    errors.email ? String(errors.email.message) : null
                  }
                />
              )}
            />
          </Box>
          <Box mb={2}>
            <Controller
              name='password'
              control={control}
              defaultValue=''
              rules={{
                required: 'Please enter password',
                maxLength: {
                  value: 32,
                  message: 'password is too lengthy',
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    'Password should contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  name='password'
                  fullWidth
                  type='password'
                  label='Password'
                  size='small'
                  error={!!errors.password}
                  helperText={
                    errors.password ? String(errors.password.message) : null
                  }
                />
              )}
            />
          </Box>
          <Box mb={2}>
            <Controller
              name='cpassword'
              control={control}
              rules={{
                required: 'Please re-enter passoword',
                validate: (value) =>
                  value === password.current || 'The passwords do not match',
              }}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  type='password'
                  label='Confirm Password'
                  size='small'
                  error={!!errors.cpassword}
                  helperText={
                    errors.cpassword ? String(errors.cpassword.message) : null
                  }
                />
              )}
            />
          </Box>
          <Box width={1} textAlign='center' mb={8} mt={4}>
            <Button type='submit' variant='contained'>
              Sign Up
            </Button>
          </Box>
        </form>
      </Box>
    </MaxWidthLayout>
  );
};

export default SignUpPage;
