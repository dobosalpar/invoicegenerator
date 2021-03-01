import React, { FC, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Container,
  IconButton,
  Tooltip,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';

import useLocalized from 'CustomHooks/useLocalized';
import EditInvoiceCalculationInfoFields from 'Components/TopBar/Blocks/EditInvoiceCalculationInfoDialogue';
import { IDialogueOpener } from 'Components/types';

interface ITopBar extends IDialogueOpener {

}

const TopBar: FC<ITopBar> = ({
  setDialogue,
}) => {
  const dialogueTitle = useLocalized('edit_invoice_calc_info');
  const handleOpenDialogue = useCallback(() => {
    setDialogue({
      id: 'edit-invoice-calculation-info-dialogue',
      dialogueBody: <EditInvoiceCalculationInfoFields setDialogue={setDialogue} />,
      handleClose: () => setDialogue(undefined),
      title: dialogueTitle,
      hasCancelButton: false,
    });
  }, [dialogueTitle, setDialogue]);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container className="invoice-toolbar">
            <Tooltip title={dialogueTitle}>
              <IconButton color="inherit" onClick={handleOpenDialogue} data-testid="invoice-calculation-info-edit-button">
                <SettingsIcon />
              </IconButton>
            </Tooltip>
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
