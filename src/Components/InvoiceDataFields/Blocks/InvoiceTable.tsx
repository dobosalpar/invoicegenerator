import { FC, useCallback } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { DatePicker } from '@material-ui/pickers';

import useLocalized from 'CustomHooks/useLocalized';
import { CURRENCY, DATE_FORMAT } from 'Constants/Options';
import { IInvoiceCalculationInfo, IInvoiceData } from 'Redux/Reducers/EmployeeReducer';
import { RootStateType } from 'Redux/Reducers';
import { setInvoiceData } from 'Redux/Actions/EmployeeActions';
import NumberInput from 'Components/NumberInput/NumberInput';
import ValidationService from 'Services/ValidationService/ValidationService';

interface IInvoiceTable {

}

const InvoiceTable: FC<IInvoiceTable> = () => {
  const employeeInfoFromReduxState = useSelector<RootStateType, IInvoiceCalculationInfo>(state => state.employeeData.employeeInfo);
  const invoiceDataFromReduxState = useSelector<RootStateType, IInvoiceData>(state => state.employeeData.invoiceData);
  const dispatch = useDispatch();

  const handleDateChange = useCallback((date) => {
    dispatch(setInvoiceData({
      contract_date: date,
    }))
  }, [dispatch]);

  return (
    <Table className="invoice-table">
      <TableHead>
        <TableRow>
          <TableCell align="center">
            {useLocalized('nr')}
          </TableCell>
          <TableCell align="center">
            {useLocalized('invoice_content_header')}
          </TableCell>
          <TableCell align="center">
            {useLocalized('unit')}
          </TableCell>
          <TableCell align="center">
            {useLocalized('quantity')}
          </TableCell>
          <TableCell align="center">
            {useLocalized('unit_price')}
            <br />
            {`-${CURRENCY}-`}
          </TableCell>
          <TableCell align="center">
            {useLocalized('value')}
            <br />
            {`-${CURRENCY}-`}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell align="center">
            0
          </TableCell>
          <TableCell align="center">
            1
          </TableCell>
          <TableCell align="center">
            2
          </TableCell>
          <TableCell align="center">
            3
          </TableCell>
          <TableCell align="center">
            4
          </TableCell>
          <TableCell align="center">
            5(3*4)
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="center">
            1
          </TableCell>
          <TableCell align="center">
            {useLocalized('invoice_content_description')}
            <br />
            <NumberInput
              value={invoiceDataFromReduxState.contract_number}
              dataTestId="invoice-table-contract-number-field"
              onChange={(contract_number) => {
                if (!ValidationService.isValidSerialNumber(contract_number)) {
                  return;
                }
                dispatch(setInvoiceData({
                  contract_number,
                }));
              }}
              short
            />
            {" / "}
            <DatePicker
              value={invoiceDataFromReduxState.contract_date}
              onChange={handleDateChange}
              format={DATE_FORMAT}
              style={{
                width: '6rem'
              }}
            />
          </TableCell>
          <TableCell align="center">
            {useLocalized('hours')}
          </TableCell>
          <TableCell align="center">
            nr of hours
          </TableCell>
          <TableCell align="center">
            {employeeInfoFromReduxState.hourly_rate}
          </TableCell>
          <TableCell align="center">
            value
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell align="center">
            <b>
              {useLocalized('total')}
            </b>
          </TableCell>
          <TableCell align="center">
            <b>
              total value
            </b>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default InvoiceTable;
