import { IEmployeeAction, CHANGE_INVOICE_DATA } from 'Redux/types';
import { IInvoiceData } from 'Redux/Reducers/EmployeeReducer';

export const setEmployeeData = (invoiceData: IInvoiceData): IEmployeeAction => ({
  type: CHANGE_INVOICE_DATA,
  payload: invoiceData,
});
