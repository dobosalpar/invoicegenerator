import React, { FC, ReactNode } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import useLocalized from 'CustomHooks/useLocalized';

interface IDialogueAction {
  id: string,
  title: string,
  handler: () => void,
};

export interface IDialogue {
  id: string,
  dialogueBody?: ReactNode,
  handleClose: () => void,
  actions: IDialogueAction[],
  title: string,
};

const Dialogue: FC<IDialogue> = ({
  id,
  dialogueBody,
  handleClose,
  actions,
  title,
}) => {
  return (
    <Dialog open onClose={handleClose} aria-labelledby="form-dialog-title" id={id} fullWidth data-testid={id}>
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>
        {dialogueBody}
      </DialogContent>
      <DialogActions>
        {actions.map(({
          id,
          title,
          handler,
        }) => (
          <Button key={id} id={id} color="primary" onClick={handler}>
            {title}
          </Button>
        ))}
        <Button onClick={handleClose} color="secondary">
          {useLocalized('cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Dialogue;
