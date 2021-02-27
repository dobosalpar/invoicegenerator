import ValidationService from 'Services/ValidationService/ValidationService';

describe('ValidationService', () => {
  test('Validates numbers correctly: returns false for strings', () => {
    const isNumber = ValidationService.isNumber('alma');
    expect(isNumber).toBe(false);
  });

  test('Validates numbers correctly: returns true for numbers', () => {
    const isNumber = ValidationService.isNumber(12);
    expect(isNumber).toBe(true);
  });

  test('Validates numbers correctly: returns false for empty string', () => {
    const isNumber = ValidationService.isNumber('');
    expect(isNumber).toBe(false);
  });

  test('Validates numbers correctly: returns false for mixed strings and numbers', () => {
    const isNumber = ValidationService.isNumber('asd1');
    expect(isNumber).toBe(false);
  });
});
