import React, { FC } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
} from '@material-ui/core';

import useLocalized from 'CustomHooks/useLocalized';
import { IDialogueOpener } from 'Components/types';

interface ITopBar extends IDialogueOpener {

}

const TopBar: FC<ITopBar> = ({
  setDialogue,
}) => {
  return (
    <>
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
    </>
  );
}

export default TopBar;
