import { Dispatch, SetStateAction } from 'react';
import { IDialogue } from 'Components/Dialogue/Dialogue';

export interface IDialogueOpener {
  setDialogue: Dispatch<SetStateAction<IDialogue | undefined>>
}
