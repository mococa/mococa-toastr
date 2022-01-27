import React, { useCallback, useEffect } from 'react';

import { IToastr } from './interfaces';

import { CloseIcon } from './assets/CloseIcon';
import { ErrorIcon } from './assets/ErrorIcon';
import { SuccessIcon } from './assets/SuccessIcon';
import { WarningIcon } from './assets/WarningIcon';

import {
  Body,
  CloseButtonContainer,
  Container,
  Header,
  Message,
} from './styles';

export const Toastr: React.FC<IToastr> = ({
  id,
  delay,
  title,
  message,
  type,
  onClose,
}) => {
  const handleClose = useCallback(() => onClose(id), [onClose, id]);

  useEffect(() => {
    setTimeout(() => handleClose(), delay || 5 * 1000);
  }, [id, delay, handleClose]);

  return (
    <Container aria-label={type} id={id}>
      {type === 'success' && <SuccessIcon />}
      {type === 'error' && <ErrorIcon />}
      {type === 'warning' && <WarningIcon />}

      <Body>
        <Header>{title}</Header>
        <Message>{message}</Message>
      </Body>
      <CloseButtonContainer onClick={handleClose}>
        <CloseIcon />
      </CloseButtonContainer>
    </Container>
  );
};
