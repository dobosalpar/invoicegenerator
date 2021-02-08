import React from 'react';
import { Typography } from '@material-ui/core';

import useLocalized from 'CustomHooks/useLocalized';

const InvoiceDataFields = () => {
  return (
    <div className="invoice-data-fields">
      <Typography variant="h4">
        { useLocalized('invoice') }
      </Typography>
    </div>
  )
};

export default InvoiceDataFields;
