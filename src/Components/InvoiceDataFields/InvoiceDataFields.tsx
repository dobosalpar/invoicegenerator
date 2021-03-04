import React, { FC, useCallback } from 'react';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { DatePicker } from '@material-ui/pickers';

import useLocalized from 'CustomHooks/useLocalized';
import { IDialogueOpener } from 'Components/types';
import { DATE_FORMAT, CURRENCY } from 'Constants/Options';
import InvoiceTable from 'Components/InvoiceDataFields/Blocks/InvoiceTable';
import { IInvoiceData } from 'Redux/Reducers/EmployeeReducer';
import { RootStateType } from 'Redux/Reducers';
import { setInvoiceData } from 'Redux/Actions/EmployeeActions';
import NumberInput from 'Components/NumberInput/NumberInput';

interface IInvoiceDataFields extends IDialogueOpener {

}

const InvoiceDataFields: FC<IInvoiceDataFields> = ({
  setDialogue,
}) => {
  const invoiceDataFromReduxState = useSelector<RootStateType, IInvoiceData>(state => state.employeeData.invoiceData);
  const dispatch = useDispatch();

  const handleDateChange = useCallback((date) => {
    dispatch(setInvoiceData({
      date,
    }))
  }, [dispatch]);

  return (
    <div className="invoice-data-fields">
      <Typography variant="h4">
        { useLocalized('invoice') }
      </Typography>
      <div className="invoice-data-fields__title-row">
        <Typography variant="body2" className="invoice-data-fields__title-row--label">
          { useLocalized('serie_nr') }:
        </Typography>
        <NumberInput
          value={invoiceDataFromReduxState.serial_number}
          onChange={(serial_number) => {
            dispatch(setInvoiceData({
              serial_number,
            }));
          }}
        />
      </div>
      <div className="invoice-data-fields__title-row">
        <Typography variant="body2" className="invoice-data-fields__title-row--label">
          { useLocalized('date') }:
        </Typography>
        <DatePicker
          value={invoiceDataFromReduxState.date}
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
