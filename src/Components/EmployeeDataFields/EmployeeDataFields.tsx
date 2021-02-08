import React from 'react';
import { Typography } from '@material-ui/core';

import useLocalized from 'CustomHooks/useLocalized';

const EmployeeDataFields = () => {
  return (
    <div className="employee-data-fields">
      <Typography variant="h6">
        {useLocalized('provider')}
      </Typography>
      <div className="employee-data-fields__fields">
        <Typography variant="body1">
          {useLocalized('address')}:
        </Typography>
        <Typography variant="body1">
          {useLocalized('TIN')}:
        </Typography>
        <Typography variant="body1">
          {useLocalized('registration_number')}:
        </Typography>
        <Typography variant="body1">
          {useLocalized('ron_iban')}:
        </Typography>
        <Typography variant="body1">
          {useLocalized('swift_code')}:
        </Typography>
        <Typography variant="body1">
          {useLocalized('bank')}:
        </Typography>
      </div>
    </div>
  )
};

export default EmployeeDataFields;
