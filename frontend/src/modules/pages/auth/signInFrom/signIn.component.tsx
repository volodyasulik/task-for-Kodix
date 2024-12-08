import { TextField, FormControl, FormHelperText } from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router';
import CodexIcon from '../../../../assets/image/kodex.svg';
import ProIcon from '../../../../assets/icons/pro.icon.svg';
import authService from '../../../services/auth.service';
import {
  FormContainer,
  Label,
  Logo,
  ModalContainer,
  SideBar,
  SideBarContainer,
  SignContainer,
  LogoContainer,
} from '../auth.styled';
import PasswordField from '../component/passwordField.component';
import SubmitButton from '../component/submitButton.component';
import { WEIGHTS } from '../../../theme/fonts.const';
import useForm from '../../../hooks/authForm.hook';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(/^\S*$/, 'Password cannot contain spaces')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+={}[\]:;"'<>,.?/\\|-]*$/,
      'Password contains invalid characters',
    )
    .min(8, 'Password must be at least 8 characters long'),
});

const SignInComponent = () => {
  const navigate = useNavigate();
  const { values, errors, setErrors, touched, handleChange, handleBlur } =
    useForm({
      email: '',
      password: '',
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { email: '', password: '' };

    try {
      await validationSchema.validate(values, { abortEarly: false });
    } catch (err: any) {
      err.inner?.forEach(
        (validationError: { path: string; message: string }) => {
          if (validationError.path in newErrors) {
            newErrors[validationError.path as keyof typeof newErrors] =
              validationError.message;
          }
        },
      );
    }

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== '')) {
      try {
        await authService.SignIn(values.email, values.password);
        navigate('/home');
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <SignContainer>
      <Logo src={CodexIcon} alt="Kodex Icon" />
      <ModalContainer>
        <FormContainer>
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth error={touched.email && !!errors.email}>
              <Label>Email address</Label>
              <TextField
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email address"
                fullWidth
              />
              <FormHelperText>{touched.email && errors.email}</FormHelperText>
            </FormControl>

            <PasswordField
              value={values.password}
              errors={errors.password}
              touched={touched.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
            <a href="/home">Forgot password?</a>
            <SubmitButton message="Sign In" />
          </form>
          <p>
            Don’t have an account?{' '}
            <a href="/auth/sign-up" style={{ fontWeight: WEIGHTS.bold }}>
              Sign Up
            </a>
          </p>
        </FormContainer>

        <SideBar>
          <SideBarContainer>
            <LogoContainer>
              <h2>Kodix</h2>
              <img src={ProIcon} alt="Pro Icon" />
            </LogoContainer>
            <p>
              Unlimited traffic, strategic <br /> support, and AI-driven upsells
            </p>
            <a href="/home">Learn More</a>
          </SideBarContainer>
        </SideBar>
      </ModalContainer>
    </SignContainer>
  );
};

export default SignInComponent;
