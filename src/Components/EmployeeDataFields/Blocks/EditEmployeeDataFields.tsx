import React, { FC, useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { IInvoiceData } from 'Redux/Reducers/EmployeeReducer';
import { RootStateType } from 'Redux/Reducers';
import useLocalized from 'CustomHooks/useLocalized';
import { IDialogueOpener } from 'Components/types';
import { setEmployeeData } from 'Redux/Actions/EmployeeActions';
import ValidationService from 'Services/ValidationService/ValidationService';

interface IEditEmployeeDataFields extends IDialogueOpener {
  
}

const EditEmployeeDataFields: FC<IEditEmployeeDataFields> = ({
  setDialogue,
}) => {
  const invoiceDataFromReduxState = useSelector<RootStateType, IInvoiceData>(state => state.employeeData.invoiceData);

  const [localInvoiceData, setLocalInvoiceData] = useState<IInvoiceData>({
    address: '',
    tin: '',
    registration_number: '',
    ron_iban: '',
    swift_code: '',
    bank: '',
  });

  useEffect(() => {
    setLocalInvoiceData(invoiceDataFromReduxState);
  }, [invoiceDataFromReduxState, setLocalInvoiceData]);

  const handleChange = useCallback((e) => {
    setLocalInvoiceData({
      ...localInvoiceData,
      [e.target.name]: e.target.value,
    })
  }, [localInvoiceData, setLocalInvoiceData]);

  const dispatch = useDispatch();
  const saveEmployeeData = useCallback(() => {
    dispatch(setEmployeeData(localInvoiceData));
    setDialogue(undefined);
  }, [dispatch, localInvoiceData, setDialogue]);

  return (
    <>
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
          onChange={(e) => {
            if (!ValidationService.isNumber(e.target.value)) {
              return;
            }
            handleChange(e)
          }}
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
      <div className="edit-employee-actions">
        <Button onClick={saveEmployeeData} color="primary" variant="contained">
          {useLocalized('save')}
        </Button>
        <Button onClick={() => setDialogue(undefined)} color="secondary" variant="contained">
          {useLocalized('cancel')}
        </Button>
      </div>
    </>
  );
};

export default EditEmployeeDataFields;
