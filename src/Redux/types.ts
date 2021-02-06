import { IEmployeeState } from 'Redux/Reducers/EmployeeReducer';

export const CHANGE_EMPLOYEE_DATA = 'CHANGE_EMPLOYEE_DATA';

interface IEmployeeChangeAction {
  type: typeof CHANGE_EMPLOYEE_DATA,
  payload: IEmployeeState,
}

export type IEmployeeAction = IEmployeeChangeAction;
