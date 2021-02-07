import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
} from '@material-ui/core';

import theme from 'Styles/theme.json';
import useLocalized from 'CustomHooks/useLocalized';

const muiTheme = createMuiTheme(theme);

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <AppBar position="fixed">
        <Toolbar>
          <Button>
            {useLocalized('generate_invoice')}
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
