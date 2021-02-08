import React, { useState } from 'react';
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
import Dialogue, { IDialogue } from 'Components/Dialogue/Dialogue';
import theme from 'Styles/theme.json';
import useLocalized from 'CustomHooks/useLocalized';
import './main.scss';

const muiTheme = createMuiTheme(theme);

function App() {
  const [dialogue, setDialogue] = useState<IDialogue>();

  return (
    <ThemeProvider theme={muiTheme}>
      {dialogue && <Dialogue {...dialogue} />}
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
              <EmployeeDataFields setDialogue={setDialogue} />
            </Grid>
            <Grid item xs={6}>
              <CompanyDataFields setDialogue={setDialogue} />
            </Grid>
            <Grid item xs={12}>
              <InvoiceDataFields setDialogue={setDialogue} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
