import React, { FC } from 'react';
import { Input  } from '@material-ui/core';

import ValidationService from 'Services/ValidationService/ValidationService';

interface INumberInput {
  value: number,
  onChange: (number: number) => void,
  short?: Boolean,
}

const NumberInput: FC<INumberInput> = ({
  value,
  onChange,
  short,
}) => {
  return (
    <Input
      value={value}
      type="number"
      onChange={(e) => {
        if (!ValidationService.isNumber(e.target.value)) {
          return;
        }
        onChange(parseInt(e.target.value));
      }}
      style={short ? {
        width: '2rem',
      } : undefined}
    />
  )
};

export default NumberInput;
