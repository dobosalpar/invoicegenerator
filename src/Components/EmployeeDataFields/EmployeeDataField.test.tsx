import { fireEvent, screen } from '@testing-library/react';

import { renderApp } from 'App.test';

describe('EmployeeDataFields tests', () => {
  test('Opens employee data fields edit modal', () => {
    renderApp();
    fireEvent.click(screen.getByTestId('employee-data-fields-edit-button'));
    const modal = screen.getByTestId('edit-employee-info-dialogue');
    expect(modal).toBeInTheDocument();
  });
});
