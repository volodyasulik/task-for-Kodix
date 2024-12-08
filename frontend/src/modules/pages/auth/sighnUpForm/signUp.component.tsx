import { TextField, FormControl, FormHelperText } from '@mui/material';
import * as Yup from 'yup';
import CodexIcon from '../../../../assets/image/kodex.svg';
import {
  CallUs,
  FormContainer,
  Label,
  Logo,
  LogoContainer,
  ModalContainer,
  NameContainer,
  SideBar,
  SignUpSideBar,
} from '../auth.styled';
import { WEIGHTS } from '../../../theme/fonts.const';
import PasswordField from '../component/passwordField.component';
import SubmitButton from '../component/submitButton.component';
import { SignContainer } from '../auth.styled';
import SideBarPresentation from '../component/sideBarPresentation.component';
import useForm from '../../../hooks/authForm.hook';
import { useNavigate } from 'react-router';
import authService from '../../../services/auth.service';

interface FormErrors {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

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
  lastName: Yup.string().required('lastName is required'),
  firstName: Yup.string().required('firstName is required'),
});

const SignUpComponent = () => {
  const navigate = useNavigate();
  const { values, errors, setErrors, touched, handleChange, handleBlur } =
    useForm({
      email: '',
      password: '',
      lastName: '',
      firstName: '',
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      email: '',
      password: '',
      lastName: '',
      firstName: '',
    };
    try {
      await validationSchema.validate(values, { abortEarly: false });
    } catch (err: any) {
      if (err.inner) {
        err.inner.forEach(
          (validationError: { path: keyof FormErrors; message: string }) => {
            if (
              validationError.path &&
              newErrors.hasOwnProperty(validationError.path)
            ) {
              newErrors[validationError.path] = validationError.message;
            }
          },
        );
      }
    }

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== '')) {
      try {
        await authService.SignUp(values);
        navigate('/home');
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <SignContainer>
      <div>
        <Logo src={CodexIcon} alt="Kodex Icon" />
      </div>

      <ModalContainer>
        <FormContainer>
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <Label>Email address</Label>
              <FormControl fullWidth error={touched.email && !!errors.email}>
                <TextField
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your email address"
                  fullWidth
                />
                {touched.email || errors.email ? (
                  <FormHelperText>{errors.email}</FormHelperText>
                ) : (
                  <></>
                )}
              </FormControl>
            </div>

            <NameContainer>
              <div>
                <Label>First Name</Label>
                <FormControl
                  fullWidth
                  error={touched.firstName && !!errors.firstName}
                >
                  <TextField
                    id="firstName"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your first name"
                    fullWidth
                  />
                  {touched.firstName || errors.firstName ? (
                    <FormHelperText>{errors.firstName}</FormHelperText>
                  ) : (
                    <></>
                  )}
                </FormControl>
              </div>
              <div>
                <Label>Last Name</Label>
                <FormControl
                  fullWidth
                  error={touched.lastName && !!errors.lastName}
                >
                  <TextField
                    id="lastName"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your last name"
                    fullWidth
                  />
                  {touched.lastName || errors.lastName ? (
                    <FormHelperText>{errors.lastName}</FormHelperText>
                  ) : (
                    <></>
                  )}
                </FormControl>
              </div>
            </NameContainer>
            <div>
              <PasswordField
                value={values.password}
                errors={errors.password}
                touched={touched.password}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
            </div>
            <a href="/home">Forgot password?</a>

            <SubmitButton message="Sign In" />
          </form>
          <p>
            Already have an account?
            <a href="/auth/sign-in" style={{ fontWeight: WEIGHTS.bold }}>
              Sign In
            </a>
          </p>
        </FormContainer>
        <SideBar>
          <SignUpSideBar>
            <LogoContainer>
              <h2 style={{ marginBottom: '0.875em' }}>
                Get Your FREE
                <br /> 30-Days Trial Now!
              </h2>
            </LogoContainer>
            <SideBarPresentation />
            <CallUs>
              Call us at <a href="tel:+38001301448">800 1301 448</a>
            </CallUs>
          </SignUpSideBar>
        </SideBar>
      </ModalContainer>
    </SignContainer>
  );
};

export default SignUpComponent;
