import React, { FC, useCallback, useState } from 'react';
import { Typography  } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';

import useLocalized from 'CustomHooks/useLocalized';
import { IDialogueOpener } from 'Components/types';
import { DATE_FORMAT, CURRENCY } from 'Constants/Options';
import InvoiceTable from 'Components/InvoiceDataFields/Blocks/InvoiceTable';

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
      <InvoiceTable />
      <div className="invoice-data-fields__summary">
        <div className="invoice-data-fields__summary--line">
          <div className="left">
            <Typography variant="body1">
              <b>
                {useLocalized('vat')}
              </b>
            </Typography>
          </div>
          <div className="rigth">
            <b>
              -<sup>1</sup>
            </b>
          </div>
        </div>
        <div className="invoice-data-fields__summary--line">
          <div className="left">
            <Typography variant="h6">
              <b>
                {useLocalized('total')}
              </b>
            </Typography>
          </div>
          <div className="rigth">
            <Typography variant="h6">
              <b>
                {CURRENCY}
              </b>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
};

export default InvoiceDataFields;
