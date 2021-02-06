import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import theme from 'Styles/theme.json';

const muiTheme = createMuiTheme(theme);

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <AppBar position="fixed">
        <Toolbar>
          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
