import React, { FC } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

import useLocalized from 'CustomHooks/useLocalized';
import { CURRENCY } from 'Constants/Options';
import { IInvoiceCalculationInfo } from 'Redux/Reducers/EmployeeReducer';
import { RootStateType } from 'Redux/Reducers';

interface IInvoiceTable {

}

const InvoiceTable: FC<IInvoiceTable> = () => {
  const invoiceDataFromReduxState = useSelector<RootStateType, IInvoiceCalculationInfo>(state => state.employeeData.employeeInfo);

  return (
    <Table className="invoice-table">
      <TableHead>
        <TableRow>
          <TableCell>
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
          <TableCell>
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
          <TableCell>
            1
          </TableCell>
          <TableCell align="center">
            {useLocalized('invoice_content_description')}
          </TableCell>
          <TableCell align="center">
            {useLocalized('hours')}
          </TableCell>
          <TableCell align="center">
            nr of hours
          </TableCell>
          <TableCell align="center">
            {invoiceDataFromReduxState.hourly_rate}
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
