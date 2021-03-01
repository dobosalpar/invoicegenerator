import React, { useState, FC } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Paper,
  Container,
  Grid,
} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import CompanyDataFields from 'Components/CompanyDataFields/CompanyDataFields';
import EmployeeDataFields from 'Components/EmployeeDataFields/EmployeeDataFields';
import InvoiceDataFields from 'Components/InvoiceDataFields/InvoiceDataFields';
import Dialogue, { IDialogue } from 'Components/Dialogue/Dialogue';
import TopBar from 'Components/TopBar/TopBar';
import theme from 'Styles/theme.json';
import './main.scss';

const muiTheme = createMuiTheme(theme);

interface IApp {

};

const App: FC<IApp> = () => {
  const [dialogue, setDialogue] = useState<IDialogue>();

  return (
    <ThemeProvider theme={muiTheme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <>
        {dialogue && <Dialogue {...dialogue} />}
        <TopBar setDialogue={setDialogue} />
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
      </>
    </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
