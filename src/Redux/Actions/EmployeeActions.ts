import { IEmployeeAction, CHANGE_EMPLOYEE_DATA } from 'Redux/types';
import { IEmployeeState } from 'Redux/Reducers/EmployeeReducer';

export const changeEmployeeData = (employeeData: IEmployeeState): IEmployeeAction => ({
  type: CHANGE_EMPLOYEE_DATA,
  payload: employeeData,
});
