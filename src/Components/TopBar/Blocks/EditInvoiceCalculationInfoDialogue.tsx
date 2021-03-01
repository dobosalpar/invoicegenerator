import React, { FC, useState, useCallback, useEffect} from 'react';
import {
  Input,
  InputAdornment,
  FormControl,
  FormHelperText,
  Button,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

import { IDialogueOpener } from 'Components/types';
import { IInvoiceCalculationInfo } from 'Redux/Reducers/EmployeeReducer';
import { RootStateType } from 'Redux/Reducers';
import { setInvoiceCalculationInfo } from 'Redux/Actions/EmployeeActions';
import useLocalized from 'CustomHooks/useLocalized';
import { CURRENCY } from 'Constants/Options';
import ValidationService from 'Services/ValidationService/ValidationService';

interface IEditInvoiceCalculationInfoFields extends IDialogueOpener {

}

const EditInvoiceCalculationInfoFields: FC<IEditInvoiceCalculationInfoFields> = ({
  setDialogue,
}) => {
  const invoiceDataFromReduxState = useSelector<RootStateType, IInvoiceCalculationInfo>(state => state.employeeData.employeeInfo);

  const [invoiceCalcInfo, setInvoiceCalcInfo] = useState<IInvoiceCalculationInfo>({
    base_salary: 0,
    total_salary: 0,
    hourly_rate: 0,
    tax: 0,
  });

  useEffect(() => {
    setInvoiceCalcInfo(invoiceDataFromReduxState);
  }, [invoiceDataFromReduxState]);

  const removeLeadingZero = useCallback((e) => {
    if (e.target.value === '0') {
      setInvoiceCalcInfo({
        ...invoiceCalcInfo,
        [e.target.name]: '',
      });
    }
  }, [invoiceCalcInfo]);

  const addZero = useCallback((e) => {
    if (e.target.value === '') {
      setInvoiceCalcInfo({
        ...invoiceCalcInfo,
        [e.target.name]: 0,
      });
    }
  }, [invoiceCalcInfo]);

  const handleChange = useCallback((e) => {
    setInvoiceCalcInfo({
      ...invoiceCalcInfo,
      [e.target.name]: parseInt(e.target.value, 10), 
    });
  }, [invoiceCalcInfo]);

  const dispatch = useDispatch();
  const saveInvoiceCalculationData = useCallback(() => {
    dispatch(setInvoiceCalculationInfo(invoiceCalcInfo))
    setDialogue(undefined);
  }, [dispatch, invoiceCalcInfo, setDialogue]);

  return (
    <> 
      <div className="edit-invoice-calculation-info-dialogue-fields">
        <FormControl className="edit-invoice-calculation-info-dialogue-fields__field">
          <Input
            id="standard-adornment-weight"
            value={invoiceCalcInfo.base_salary}
            name="base_salary"
            onChange={(e) => {
              if (!ValidationService.isNumber(e.target.value)) {
                return;
              }
              handleChange(e)
            }}
            type="number"
            onFocus={removeLeadingZero}
            onBlur={addZero}
            endAdornment={<InputAdornment position="end">{CURRENCY}</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
          />
          <FormHelperText>{useLocalized('base_salary')}</FormHelperText>
        </FormControl>
        <FormControl className="edit-invoice-calculation-info-dialogue-fields__field">
          <Input
            id="standard-adornment-weight"
            value={invoiceCalcInfo.total_salary}
            name="total_salary"
            onChange={(e) => {
              if (!ValidationService.isNumber(e.target.value)) {
                return;
              }
              handleChange(e)
            }}
            type="number"
            onFocus={removeLeadingZero}
            onBlur={addZero}
            endAdornment={<InputAdornment position="end">{CURRENCY}</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
          />
          <FormHelperText>{useLocalized('total_salary')}</FormHelperText>
        </FormControl>
        <FormControl className="edit-invoice-calculation-info-dialogue-fields__field">
          <Input
            id="standard-adornment-weight"
            value={invoiceCalcInfo.hourly_rate}
            name="hourly_rate"
            onChange={(e) => {
              if (!ValidationService.isNumber(e.target.value)) {
                return;
              }
              handleChange(e)
            }}
            type="number"
            onFocus={removeLeadingZero}
            onBlur={addZero}
            endAdornment={<InputAdornment position="end">{`${CURRENCY}/h`}</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
          />
          <FormHelperText>{useLocalized('hourly_rate')}</FormHelperText>
        </FormControl>
        <FormControl className="edit-invoice-calculation-info-dialogue-fields__field">
          <Input
            id="standard-adornment-weight"
            value={invoiceCalcInfo.tax}
            name="tax"
            onChange={(e) => {
              if (!ValidationService.isNumber(e.target.value)) {
                return;
              }
              handleChange(e)
            }}
            type="number"
            onFocus={removeLeadingZero}
            onBlur={addZero}
            endAdornment={<InputAdornment position="end">{CURRENCY}</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
          />
          <FormHelperText>{useLocalized('monthly_tax')}</FormHelperText>
        </FormControl>
      </div>
      <div className="edit-invoice-calculation-info-dialogue">
        <Button
          onClick={saveInvoiceCalculationData}
          color="primary"
          variant="contained"
          className="edit-invoice-calculation-info-dialogue__button"
          data-testid="edit-invoice-calculation-info-dialogue-save-button"
        >
          {useLocalized('save')}
        </Button>
        <Button
          onClick={() => setDialogue(undefined)}
          color="secondary"
          variant="contained"
          className="edit-invoice-calculation-info-dialogue__button"
        >
          {useLocalized('cancel')}
        </Button>
      </div>
    </>
  );
};

export default EditInvoiceCalculationInfoFields;
