class ValidationService {
  static isNumber(number: any): Boolean {
    if (number === '') {
      return true;
    }
    return /^\d+$/.test(number);
  }
}

export default ValidationService;
