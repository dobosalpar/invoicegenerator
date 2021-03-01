import { fireEvent, screen } from '@testing-library/react';

import { renderApp } from 'App.test';

describe('Topbar tests', () => {
  test('Opens invoice calculation info fields edit modal', () => {
    renderApp();
    fireEvent.click(screen.getByTestId('invoice-calculation-info-edit-button'));
    const modal = screen.getByTestId('edit-invoice-calculation-info-dialogue');
    expect(modal).toBeInTheDocument();
  });
});
