import { combineReducers } from 'redux';
import EmployeeReducer from 'Redux/Reducers/EmployeeReducer';

const reducer = combineReducers({
  employeeData: EmployeeReducer,
});

export default reducer;
