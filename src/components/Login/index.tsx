'use client'
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Card, CardHeader, CardContent, CardActions, FormControl, FormLabel, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative'
}));

interface FormState {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
}

const Login: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()
  const handleErrors = (): boolean => {
    let isValid = true;
    const errors = {
      emailError: '',
      passwordError: '',
    };

    if (!formState.email) {
      errors.emailError = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.emailError = 'Email is invalid';
      isValid = false;
    }

    if (!formState.password) {
      errors.passwordError = 'Password is required';
      isValid = false;
    } else if (formState.password.length < 8) {
      errors.passwordError = 'Password must be at least 8 characters long';
      isValid = false;
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])/.test(formState.password)) {
      errors.passwordError = 'Password must contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character';
      isValid = false;
    }

    setFormState((prevState) => ({ ...prevState, ...errors }));
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('here outside')
    if (handleErrors()) {
      // Handle login logic here
      console.log('here inside')
      router.push('/dashboard')
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'email') {
      if (!value) {
        error = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Email is invalid';
      }
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
        emailError: error,
      }));
    } else if (name === 'password') {
      if (!value) {
        error = 'Password is required';
      } else if (value.length < 8) {
        error = 'Password must be at least 8 characters long';
      } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_])/.test(value)) {
        error = 'Password must contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character';
      }
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
        passwordError: error,
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Wrapper>
      <Container maxWidth="xs">
        <Card>
          <CardHeader
            title="Admin Login"
            titleTypographyProps={{ variant: 'h5', align: 'center', sx: { color: 'white' } }}
            sx={{ backgroundColor: '#2947A3' }}
          />
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }} noValidate>
            <CardContent>
              <FormControl fullWidth margin="normal" error={!!formState.emailError}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formState.email}
                  onChange={handleChange}
                  sx={{
                    mt: 1,
                    ...(formState.emailError && { '& .MuiOutlinedInput-root': { borderColor: 'error.main' } }),
                  }}
                />
                {formState.emailError && <FormHelperText>{formState.emailError}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth margin="normal" error={!!formState.passwordError}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  value={formState.password}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    mt: 1,
                    ...(formState.passwordError && { '& .MuiOutlinedInput-root': { borderColor: 'error.main' } }),
                  }}
                />
                {formState.passwordError && <FormHelperText>{formState.passwordError}</FormHelperText>}
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default Login;