import React, { FC, useCallback, useState, useEffect, Dispatch } from 'react';
import { useSelector } from 'react-redux';
import { TextField } from '@material-ui/core';

import { IInvoiceData } from 'Redux/Reducers/EmployeeReducer';
import { RootStateType } from 'Redux/Reducers';
import useLocalized from 'CustomHooks/useLocalized';

interface IEditEmployeeDataFields {
  localInvoiceData: IInvoiceData,
  setLocalInvoiceData: Dispatch<IInvoiceData>,
}

const EditEmployeeDataFields: FC<IEditEmployeeDataFields> = ({
  localInvoiceData,
  setLocalInvoiceData,
}) => {
  const invoiceDataFromReduxState = useSelector<RootStateType, IInvoiceData>(state => state.employeeData.invoiceData);
  useEffect(() => {
    setLocalInvoiceData(invoiceDataFromReduxState);
  }, [invoiceDataFromReduxState, setLocalInvoiceData]);  

  const handleChange = useCallback((e) => {
    setLocalInvoiceData({
      ...localInvoiceData,
      [e.target.name]: e.target.value,
    })
  }, [localInvoiceData, setLocalInvoiceData]);

  return (
    <div className="edit-employee-datafields">
      <TextField
        value={localInvoiceData.address}
        label={useLocalized('address')}
        onChange={handleChange}
        margin="normal"
        name="address"
      />
      <TextField
        value={localInvoiceData.tin}
        label={useLocalized('tin')}
        onChange={handleChange}
        margin="normal"
        name="tin"
      />
      <TextField
        value={localInvoiceData.registration_number}
        label={useLocalized('registration_number')}
        onChange={handleChange}
        margin="normal"
        name="registration_number"
      />
      <TextField
        value={localInvoiceData.ron_iban}
        label={useLocalized('ron_iban')}
        onChange={handleChange}
        margin="normal"
        name="ron_iban"
      />
      <TextField
        value={localInvoiceData.swift_code}
        label={useLocalized('swift_code')}
        onChange={handleChange}
        margin="normal"
        name="swift_code"
      />
      <TextField
        value={localInvoiceData.bank}
        label={useLocalized('bank')}
        onChange={handleChange}
        margin="normal"
        name="bank"
      />
    </div>
  );
};

export default EditEmployeeDataFields;
