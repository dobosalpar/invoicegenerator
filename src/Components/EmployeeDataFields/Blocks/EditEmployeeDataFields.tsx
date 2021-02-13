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

  const handleChange = useCallback(() => {

  }, []);

  return (
    <div className="edit-employee-datafields">
      <TextField
        value={invoiceData.address}
        label={useLocalized('address')}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        value={invoiceData.tin}
        label={useLocalized('tin')}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        value={invoiceData.registration_number}
        label={useLocalized('registration_number')}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        value={invoiceData.ron_iban}
        label={useLocalized('ron_iban')}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        value={invoiceData.swift_code}
        label={useLocalized('swift_code')}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        value={invoiceData.bank}
        label={useLocalized('bank')}
        onChange={handleChange}
        margin="normal"
      />
    </div>
  )

};

export default EditEmployeeDataFields;
