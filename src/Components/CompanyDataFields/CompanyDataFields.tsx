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
        <div className="company-data-fields__fields-field">
          <Typography variant="body2">
            <b>{useLocalized('address')}:</b>
          </Typography>
          <Typography variant="body1">
            {/* {address} */}
          </Typography>
        </div>
        <div className="company-data-fields__fields-field">
          <Typography variant="body2">
            <b>{useLocalized('company_registration_number')}:</b>
          </Typography>
          <Typography variant="body1">
            {/* {company_registration_number} */}
          </Typography>
        </div>
        <div className="company-data-fields__fields-field">
          <Typography variant="body2">
            <b>{useLocalized('unique_taxtpayer_reference')}:</b>
          </Typography>
          <Typography variant="body1">
            {/* {unique_taxtpayer_reference} */}
          </Typography>
        </div>
      </div>
    </div>
  )
};

export default CompanyDataFields;
