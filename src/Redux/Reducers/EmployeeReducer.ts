import { 
  IEmployeeAction,
  CHANGE_INVOICE_DATA,
  CHANGE_INVOICE_CALCULATION_INFO,
} from 'Redux/types';
import { LocaleType } from 'Services/LocalizationService/LocalizationService';

export interface IInvoiceData {
  address: string,
  tin: string,
  registration_number: string,
  ron_iban: string,
  swift_code: string,
  bank: string,
  contract_date: Date | undefined,
  contract_number: number,
  serial_number: number,
  date: Date,
};

export interface IInvoiceCalculationInfo {
  base_salary: number,
  total_salary: number,
  hourly_rate: number,
  tax: number,
};

export interface IEmployeeState {
  locale: LocaleType,
  invoiceData: IInvoiceData,
  employeeInfo: IInvoiceCalculationInfo,
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
    contract_date: undefined,
    contract_number: 0,
    serial_number: 0,
    date: new Date(),
  },
  employeeInfo: {
    base_salary: 0,
    total_salary: 0,
    hourly_rate: 0,
    tax: 0,
  },
};

const employeeReducer = (state = initialState, action: IEmployeeAction): IEmployeeState => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_INVOICE_DATA:
      return {
        ...state,
        invoiceData: {
          ...state.invoiceData,
          ...payload as IInvoiceData
        },
      };
    case CHANGE_INVOICE_CALCULATION_INFO:
      return {
        ...state,
        employeeInfo: payload as IInvoiceCalculationInfo,
      };
    default:
      return state;
  }
};

export default employeeReducer;
