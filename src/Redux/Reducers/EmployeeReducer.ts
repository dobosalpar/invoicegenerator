import { 
  IEmployeeAction,
  CHANGE_EMPLOYEE_DATA
} from 'Redux/types';
import { LocaleType } from 'Services/LocalizationService/LocalizationService';

export interface IEmployeeState {
  locale: LocaleType,
}

const initialState: IEmployeeState = {
  locale: 'ro_RO',
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
