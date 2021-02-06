import SalaryService from 'Services/SalaryService/SalaryService';

describe('Salary service', () => {
  test('Calculates salary correctly', () => {
    const salary = SalaryService.shared().calculateSalary();
    expect(salary).toBe(1);
  });
});
