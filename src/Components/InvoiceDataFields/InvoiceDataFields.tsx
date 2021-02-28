import React, { FC, useCallback, useState } from 'react';
import { Typography  } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';

import useLocalized from 'CustomHooks/useLocalized';
import { IDialogueOpener } from 'Components/types';

interface IInvoiceDataFields extends IDialogueOpener {

}

const InvoiceDataFields: FC<IInvoiceDataFields> = ({
  setDialogue,
}) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  return (
    <div className="invoice-data-fields">
      <Typography variant="h4">
        { useLocalized('invoice') }
      </Typography>
      <Typography variant="body2">
        { useLocalized('serie_nr') }:
      </Typography>
      <Typography variant="body2">
        { useLocalized('date')}:
        <DatePicker value={selectedDate} onChange={handleDateChange} />
      </Typography>
    </div>
  )
};

export default InvoiceDataFields;
