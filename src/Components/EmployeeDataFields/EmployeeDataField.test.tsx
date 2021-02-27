import { fireEvent, screen } from '@testing-library/react';

import { renderApp } from 'App.test';

describe('EmployeeDataFields tests', () => {
  test('Opens employee data fields edit modal', () => {
    renderApp();
    fireEvent.click(screen.getByTestId('employee-data-fields-edit-button'));
    const modal = screen.getByTestId('edit-employee-info-dialogue');
    expect(modal).toBeInTheDocument();
  });

  test('Employee data fields are edited from the modal', async () => {
    renderApp();

    // Modal opened
    fireEvent.click(screen.getByTestId('employee-data-fields-edit-button'));
    const addressField = screen.getByTestId('edit-employee-datafields-address');
    const saveButton = screen.getByTestId('edit-employee-actions-save-button');
    expect(addressField).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();

    // Address entered and save button pressed
    fireEvent.change(addressField, { target: { value: 'Test address' } });
    fireEvent.click(saveButton);

    // Saved data presented on screen
    const addressElement = await screen.findByText('Test address');
    expect(addressElement).toBeInTheDocument();
  });
});
