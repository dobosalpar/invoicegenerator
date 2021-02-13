import React, { FC, useCallback, useState } from 'react';
import { TextField } from '@material-ui/core';

import { IInvoiceData } from 'Redux/Reducers/EmployeeReducer';
import useLocalized from 'CustomHooks/useLocalized';


const EditEmployeeDataFields: FC = () => {
  const [invoiceData, setInvoiceData] = useState<IInvoiceData>({
    address: '',
    tin: '',
    registration_number: '',
    ron_iban: '',
    swift_code: '',
    bank: '',
  });

  const handleChange = useCallback((e) => {
    setInvoiceData({
      ...invoiceData,
      [e.target.name]: e.target.value,
    })
  }, [invoiceData]);

  return (
    <div className="edit-employee-datafields">
      <TextField
        value={invoiceData.address}
        label={useLocalized('address')}
        onChange={handleChange}
        margin="normal"
        name="address"
      />
      <TextField
        value={invoiceData.tin}
        label={useLocalized('tin')}
        onChange={handleChange}
        margin="normal"
        name="tin"
      />
      <TextField
        value={invoiceData.registration_number}
        label={useLocalized('registration_number')}
        onChange={handleChange}
        margin="normal"
        name="registration_number"
      />
      <TextField
        value={invoiceData.ron_iban}
        label={useLocalized('ron_iban')}
        onChange={handleChange}
        margin="normal"
        name="ron_iban"
      />
      <TextField
        value={invoiceData.swift_code}
        label={useLocalized('swift_code')}
        onChange={handleChange}
        margin="normal"
        name="swift_code"
      />
      <TextField
        value={invoiceData.bank}
        label={useLocalized('bank')}
        onChange={handleChange}
        margin="normal"
        name="bank"
      />
    </div>
  )

};

export default EditEmployeeDataFields;
