import { useState } from 'react';

const useForm = (initialState: {
  email: string;
  password: string;
  lastName?: string;
  firstName?: string;
}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<{
    email: string;
    password: string;
    lastName?: string;
    firstName?: string;
  }>({
    email: '',
    password: '',
    lastName: '',
    firstName: '',
  });
  const [touched, setTouched] = useState<{
    email: boolean;
    password: boolean;
    lastName?: boolean;
    firstName?: boolean;
  }>({
    email: false,
    password: false,
    lastName: false,
    firstName: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    touched,
    setTouched,
    handleChange,
    handleBlur,
  };
};

export default useForm;
