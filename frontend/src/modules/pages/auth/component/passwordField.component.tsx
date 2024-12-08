import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import { useState } from 'react';
import { Label } from '../auth.styled';

const PasswordField: React.FC<{
  value: string;
  touched: boolean;
  errors: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}> = ({ value, touched, errors, handleChange, handleBlur }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <div>
      <Label>Password</Label>
      <FormControl style={{ width: '100%' }}>
        <OutlinedInput
          id="password"
          name="password"
          placeholder="Enter password"
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? 'hide the password' : 'display the password'
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        {touched || (errors && <FormHelperText>{errors}</FormHelperText>)}
      </FormControl>
    </div>
  );
};

export default PasswordField;
