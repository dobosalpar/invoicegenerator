import { 
  IEmployeeAction,
  CHANGE_EMPLOYEE_DATA
} from 'Redux/types';
import { LocaleType } from 'Services/LocalizationService/LocalizationService';

export interface IInvoiceData {
  address: string,
  tin: string,
  registration_number: string,
  ron_iban: string,
  swift_code: string,
  bank: string,
};

export interface IEmployeeState {
  locale: LocaleType,
  invoiceData: IInvoiceData,
};

const initialState: IEmployeeState = {
  locale: 'en_EN',
  invoiceData: {
    address: '',
    tin: '',
    registration_number: '',
    ron_iban: '',
    swift_code: '',
    bank: '',
  },
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
