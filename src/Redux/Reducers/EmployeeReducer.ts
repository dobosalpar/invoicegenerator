import { 
  IEmployeeAction,
  CHANGE_EMPLOYEE_DATA
} from 'Redux/types';

export interface IEmployeeState {
  name: string,
}

const initialState: IEmployeeState = {
  name: '',
};

const employeeReducer = (state = initialState, action: IEmployeeAction): IEmployeeState => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_EMPLOYEE_DATA:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default employeeReducer;
