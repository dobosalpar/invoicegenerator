import { IEmployeeState, IInvoiceData, IInvoiceCalculationInfo } from 'Redux/Reducers/EmployeeReducer';

export const CHANGE_EMPLOYEE_DATA = 'CHANGE_EMPLOYEE_DATA';
interface IEmployeeChangeAction {
  type: typeof CHANGE_EMPLOYEE_DATA,
  payload: IEmployeeState,
}

export const CHANGE_INVOICE_DATA = 'CHANGE_INVOICE_DATA';
interface IInvoiceDataChangeAction {
  type: typeof CHANGE_INVOICE_DATA,
  payload: Partial<IInvoiceData>,
}

export const CHANGE_INVOICE_CALCULATION_INFO = 'CHANGE_INVOICE_CALCULATION_INFO';
interface IInvoiceCalculationInfoChangeAction {
  type: typeof CHANGE_INVOICE_CALCULATION_INFO,
  payload: IInvoiceCalculationInfo,
}

export type IEmployeeAction = IEmployeeChangeAction | IInvoiceDataChangeAction | IInvoiceCalculationInfoChangeAction;
