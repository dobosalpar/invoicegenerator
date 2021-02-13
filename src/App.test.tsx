import React, { FC } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';

import createStore from 'Redux/store';

const { store } = createStore();

const renderWithRedux = (Component: FC) => {
  return render (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

test('renders learn react link', () => {
  renderWithRedux(App);
  const linkElement = screen.getByText('Invoice/Factura');
  expect(linkElement).toBeInTheDocument();
});
