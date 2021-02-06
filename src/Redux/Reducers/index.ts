import { combineReducers } from 'redux';
import EmployeeReducer from 'Redux/Reducers/EmployeeReducer';

const reducer = combineReducers({
  employeeData: EmployeeReducer,
});

export type RootStateType = ReturnType<typeof reducer>;
export default reducer;
