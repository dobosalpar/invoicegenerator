import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  Paper,
  Container,
} from '@material-ui/core';

import theme from 'Styles/theme.json';
import useLocalized from 'CustomHooks/useLocalized';
import './main.scss';

const muiTheme = createMuiTheme(theme);

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <AppBar position="fixed">
        <Toolbar>
          <Container className="invoice-toolbar">
            <Button color="inherit">
              {useLocalized('generate_invoice')}
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container >
        <Paper variant="outlined" className="invoice-paper">
          alma
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
