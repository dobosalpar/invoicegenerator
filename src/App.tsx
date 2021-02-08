import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Button,
  Paper,
  Container,
  Grid,
} from '@material-ui/core';

import CompanyDataFields from 'Components/CompanyDataFields/CompanyDataFields';
import EmployeeDataFields from 'Components/EmployeeDataFields/EmployeeDataFields';
import InvoiceDataFields from 'Components/InvoiceDataFields/InvoiceDataFields';
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
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <EmployeeDataFields />
            </Grid>
            <Grid item xs={6}>
              <CompanyDataFields />
            </Grid>
            <Grid item xs={12}>
              <InvoiceDataFields />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
