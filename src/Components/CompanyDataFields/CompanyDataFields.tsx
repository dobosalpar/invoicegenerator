import React from 'react';
import { Typography } from '@material-ui/core';

import useLocalized from 'CustomHooks/useLocalized';

const CompanyDataFields = () => {
  return (
    <div className="company-data-fields">
      <Typography variant="h6">
        { useLocalized('client') }
      </Typography>
      <div className="company-data-fields__fields">
        <Typography variant="body1">
          {useLocalized('address')}:
        </Typography>
        <Typography variant="body1">
          {useLocalized('company_registration_number')}:
        </Typography>
        <Typography variant="body1">
          {useLocalized('unique_taxtpayer_reference')}:
        </Typography>
      </div>
    </div>
  )
};

export default CompanyDataFields;
