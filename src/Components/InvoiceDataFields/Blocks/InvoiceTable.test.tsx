import { fireEvent, screen } from '@testing-library/react';

import { renderApp } from 'App.test';

describe('InvoiceTable tests', () => {
  test('User cannot enter negative values to contract number field', async () => {
    renderApp();

    const contractNumberField = screen.getByTestId('invoice-table-contract-number-field') as HTMLInputElement;
    fireEvent.change(contractNumberField, { target: { value: -5 } });
    expect(contractNumberField.value).toBe("0");
  });

  test('User can enter a valide contract number', async () => {
    renderApp();

    const contractNumberField = screen.getByTestId('invoice-table-contract-number-field') as HTMLInputElement;
    fireEvent.change(contractNumberField, { target: { value: 5 } });
    expect(contractNumberField.value).toBe("5");
  });
});
