import { Button } from '@mui/material';
import React from 'react';
import ArrowIcon from '../../../../assets/icons/arrow.icon.svg';
import { COLORS } from '../../../theme/colors.const';
import { SIZES, WEIGHTS } from '../../../theme/fonts.const';

const SubmitButton: React.FC<{ message: string }> = ({ message }) => {
  return (
    <>
      <Button
        type="submit"
        color="primary"
        variant="contained"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          textTransform: 'none',
          padding: '0 0.75rem 0 1.5rem',
          minHeight: '3rem',
          backgroundColor: COLORS.green,
        }}
      >
        <div style={{ fontWeight: WEIGHTS.bold, fontSize: SIZES.s }}>
          {message}
        </div>
        <img src={ArrowIcon} alt="Arrow Icon" />
      </Button>
    </>
  );
};

export default SubmitButton;
