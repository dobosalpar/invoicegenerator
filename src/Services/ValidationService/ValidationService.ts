class ValidationService {
  static isNumber(number: any): Boolean {
    return /^\d+$/.test(number);
  }
}

export default ValidationService;
