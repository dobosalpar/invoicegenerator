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

  test('Validates numbers correctly: returns false for mixed strings and numbers', () => {
    const isNumber = ValidationService.isNumber('asd1');
    expect(isNumber).toBe(false);
  });

  test('Validates numbers correctly: Allows empty values', () => {
    const isNumber = ValidationService.isNumber('');
    expect(isNumber).toBe(true);
  });

  test('Validates serial numbers correctly: Allows positive values', () => {
    const isValidSerialNumber = ValidationService.isValidSerialNumber(1);
    expect(isValidSerialNumber).toBe(true);
  });

  test('Validates serial numbers correctly: Does not Allow negative values', () => {
    const isValidSerialNumber = ValidationService.isValidSerialNumber(-1);
    expect(isValidSerialNumber).toBe(false);
  });
});
