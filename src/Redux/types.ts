import { IEmployeeState, IInvoiceData } from 'Redux/Reducers/EmployeeReducer';

export const CHANGE_EMPLOYEE_DATA = 'CHANGE_EMPLOYEE_DATA';
interface IEmployeeChangeAction {
  type: typeof CHANGE_EMPLOYEE_DATA,
  payload: IEmployeeState,
}

export const CHANGE_INVOICE_DATA = 'CHANGE_INVOICE_DATA';
interface IInvoiceDataChangeAction {
  type: typeof CHANGE_INVOICE_DATA,
  payload: IInvoiceData,
}

export type IEmployeeAction = IEmployeeChangeAction | IInvoiceDataChangeAction;
