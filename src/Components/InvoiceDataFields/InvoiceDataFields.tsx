import React, { FC } from 'react';
import { Typography } from '@material-ui/core';

import useLocalized from 'CustomHooks/useLocalized';
import { IDialogueOpener } from 'Components/types';

interface IInvoiceDataFields extends IDialogueOpener {

}

const InvoiceDataFields: FC<IInvoiceDataFields> = ({
  setDialogue,
}) => {
  return (
    <div className="invoice-data-fields">
      <Typography variant="h4">
        { useLocalized('invoice') }
      </Typography>
    </div>
  )
};

export default InvoiceDataFields;
