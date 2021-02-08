import React from 'react';
import { Typography } from '@material-ui/core';

import useLocalized from 'CustomHooks/useLocalized';

const CompanyDataFields = () => {
  return (
    <div className="company-data-fields">
      <Typography variant="h6">
        { useLocalized('client') }
      </Typography>
    </div>
  )
};

export default CompanyDataFields;
