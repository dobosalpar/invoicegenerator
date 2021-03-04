import {
  IEmployeeAction,
  CHANGE_INVOICE_DATA,
  CHANGE_INVOICE_CALCULATION_INFO,
} from 'Redux/types';
import { IInvoiceData, IInvoiceCalculationInfo } from 'Redux/Reducers/EmployeeReducer';

export const setInvoiceData = (invoiceData: Partial<IInvoiceData>): IEmployeeAction => ({
  type: CHANGE_INVOICE_DATA,
  payload: invoiceData,
});

export const setInvoiceCalculationInfo = (invoiceCalculationInfo: IInvoiceCalculationInfo): IEmployeeAction => ({
  type: CHANGE_INVOICE_CALCULATION_INFO,
  payload: invoiceCalculationInfo,
});
