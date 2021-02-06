interface ISalaryService {
  calculateSalary: () => number;
}

class SalaryService implements ISalaryService {
  static instance: ISalaryService;
  static shared() {
    if (!this.instance) {
      this.instance = new SalaryService();
    }
    return this.instance;
  };

  calculateSalary() {
    return 1;
  }
}

export default SalaryService;
