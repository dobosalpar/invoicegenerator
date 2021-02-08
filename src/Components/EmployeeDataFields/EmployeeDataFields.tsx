import React from 'react';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useLocalized from 'CustomHooks/useLocalized';
import { RootStateType } from 'Redux/Reducers';
import { IInvoiceData } from 'Redux/Reducers/EmployeeReducer';

const EmployeeDataFields = () => {
  const {
    address,
    tin,
    registration_number,
    ron_iban,
    swift_code,
    bank,
  } = useSelector<RootStateType, IInvoiceData>(state => state.employeeData.invoiceData);

  return (
    <div className="employee-data-fields">
      <Typography variant="h6">
        {useLocalized('provider')}
      </Typography>
      <div className="employee-data-fields__fields">
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2">
            <b>{useLocalized('address')}:</b>
          </Typography>
          <Typography variant="body1">
            {address}
          </Typography>
        </div>
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2">
            <b>{useLocalized('tin')}:</b>
          </Typography>
          <Typography variant="body1">
            {tin}
          </Typography>
        </div>
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2">
            <b>{useLocalized('registration_number')}:</b>
          </Typography>
          <Typography variant="body1">
            {registration_number}
          </Typography>
        </div>
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2">
            <b>{useLocalized('ron_iban')}:</b>
          </Typography>
          <Typography variant="body1">
            {ron_iban}
          </Typography>
        </div>
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2">
            <b>{useLocalized('swift_code')}:</b>
          </Typography>
          <Typography variant="body1">
            {swift_code}
          </Typography>
        </div>
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2">
            <b>{useLocalized('bank')}:</b>
          </Typography>
          <Typography variant="body1">
            {bank}
          </Typography>
        </div>
      </div>
    </div>
  )
};

export default EmployeeDataFields;
