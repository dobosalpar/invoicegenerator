import React from 'react';
import { Typography } from '@material-ui/core';

import useLocalized from 'CustomHooks/useLocalized';

const EmployeeDataFields = () => {
  return (
    <div className="employee-data-fields">
      <Typography variant="h6">
        { useLocalized('provider') }
      </Typography>
    </div>
  )
};

export default EmployeeDataFields;
