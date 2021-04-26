class ValidationService {
  static isNumber(number: any): Boolean {
    if (number === '') {
      return true;
    }
    return /^\d+$/.test(number);
  }

  static isValidSerialNumber(number: any): Boolean {
    if (!this.isNumber(number)) {
      return false;
    }
    if (number === 0) {
      return false;
    }
    return true;
  }
}

export default ValidationService;
