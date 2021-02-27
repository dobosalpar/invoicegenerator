class ValidationService {
  static isNumber(number: any): Boolean {
    return /[0-9]/.test(number);
  }
}

export default ValidationService;
