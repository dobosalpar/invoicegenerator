import React, { FC } from 'react';
import { Input  } from '@material-ui/core';

import ValidationService from 'Services/ValidationService/ValidationService';

interface INumberInput {
  value: number,
  onChange: (number: number) => void,
  short?: Boolean,
  dataTestId?: string,
}

const NumberInput: FC<INumberInput> = ({
  value,
  onChange,
  short,
  dataTestId,
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
      inputProps={{
        "data-testid": dataTestId,
      }}
    />
  )
};

export default NumberInput;
