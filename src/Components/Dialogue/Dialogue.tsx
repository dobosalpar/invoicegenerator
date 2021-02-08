import React, { FC } from 'react';
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
  body: FC,
  handleClose: () => void,
  actions: IDialogueAction[],
};

const Dialogue: FC<IDialogue> = ({
  id,
  body,
  handleClose,
  actions,
}) => {
  return (
    <Dialog open onClose={handleClose} aria-labelledby="form-dialog-title" id={id}>
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        {body}
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
