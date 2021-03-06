import React, { FC, useCallback } from 'react';
import { Typography, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector } from 'react-redux';

import useLocalized from 'CustomHooks/useLocalized';
import { RootStateType } from 'Redux/Reducers';
import { IInvoiceData } from 'Redux/Reducers/EmployeeReducer';
import { IDialogueOpener } from 'Components/types';
import EditEmployeeDataFields from 'Components/EmployeeDataFields/Blocks/EditEmployeeDataFields';

interface IEmployeeDataFields extends IDialogueOpener {

}

const EmployeeDataFields: FC<IEmployeeDataFields> = ({
  setDialogue,
}) => {
  const {
    address,
    tin,
    registration_number,
    ron_iban,
    swift_code,
    bank,
  } = useSelector<RootStateType, IInvoiceData>(state => state.employeeData.invoiceData);

  const dialogueTitle = useLocalized('edit_employee_info');

  const handleOpenDialogue = useCallback(() => {
    setDialogue({
      id: 'edit-employee-info-dialogue',
      dialogueBody: <EditEmployeeDataFields setDialogue={setDialogue} />,
      handleClose: () => setDialogue(undefined),
      title: dialogueTitle,
      hasCancelButton: false,
    });
  }, [dialogueTitle, setDialogue]);

  return (
    <div className="employee-data-fields">
      <div className="employee-data-fields__header">
        <Typography variant="h6">
          {useLocalized('provider')}
        </Typography>
        <IconButton color="primary" onClick={handleOpenDialogue} data-testid="employee-data-fields-edit-button">
          <EditIcon />
        </IconButton>
      </div>
      <div className="employee-data-fields__fields">
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2" className="employee-data-field-label">
            <b>{useLocalized('address')}:</b>
          </Typography>
          <Typography variant="body1">
            {address}
          </Typography>
        </div>
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2" className="employee-data-field-label">
            <b>{useLocalized('tin')}:</b>
          </Typography>
          <Typography variant="body1">
            {tin}
          </Typography>
        </div>
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2" className="employee-data-field-label">
            <b>{useLocalized('registration_number')}:</b>
          </Typography>
          <Typography variant="body1">
            {registration_number}
          </Typography>
        </div>
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2" className="employee-data-field-label">
            <b>{useLocalized('ron_iban')}:</b>
          </Typography>
          <Typography variant="body1">
            {ron_iban}
          </Typography>
        </div>
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2" className="employee-data-field-label">
            <b>{useLocalized('swift_code')}:</b>
          </Typography>
          <Typography variant="body1">
            {swift_code}
          </Typography>
        </div>
        <div className="employee-data-fields__fields--field">
          <Typography variant="body2" className="employee-data-field-label">
            <b>{useLocalized('bank')}:</b>
          </Typography>
          <Typography variant="body1">
            {bank}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDataFields;
