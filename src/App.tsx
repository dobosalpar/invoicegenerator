import React, { useState, FC } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Paper,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import locale from 'date-fns/locale/en-US'

import CompanyDataFields from 'Components/CompanyDataFields/CompanyDataFields';
import EmployeeDataFields from 'Components/EmployeeDataFields/EmployeeDataFields';
import InvoiceDataFields from 'Components/InvoiceDataFields/InvoiceDataFields';
import Dialogue, { IDialogue } from 'Components/Dialogue/Dialogue';
import TopBar from 'Components/TopBar/TopBar';
import theme from 'Styles/theme.json';
import useLocalized from 'CustomHooks/useLocalized';
import './main.scss';

const muiTheme = createMuiTheme(theme);

// Week starts on Monday
if (locale && locale.options) {
  locale.options.weekStartsOn = 1;
}

interface IApp {

};

const App: FC<IApp> = () => {
  const [dialogue, setDialogue] = useState<IDialogue>();

  return (
    <ThemeProvider theme={muiTheme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
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
            <div className="invoice-footer-description">
              <Typography variant="caption">
                <sup>1</sup>{useLocalized('footer_description')}
              </Typography>
            </div>
          </Paper>
        </Container>
      </>
    </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
