import React, { FC, useCallback, useState } from 'react';
import { Typography  } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';

import useLocalized from 'CustomHooks/useLocalized';
import { IDialogueOpener } from 'Components/types';
import { DATE_FORMAT } from 'Constants/Options';

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
      <div className="invoice-data-fields__title-row">
        <Typography variant="body2" className="invoice-data-fields__title-row--label">
          { useLocalized('serie_nr') }:
        </Typography>
      </div>
      <div className="invoice-data-fields__title-row">
        <Typography variant="body2" className="invoice-data-fields__title-row--label">
          { useLocalized('date') }:
        </Typography>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          format={DATE_FORMAT}
        />
      </div>
    </div>
  )
};

export default InvoiceDataFields;
