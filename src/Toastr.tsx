import React, { useCallback, useEffect, useState } from 'react';

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
  const [hovering, setHovering] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleClose = useCallback(() => onClose(id), [onClose, id]);

  const handleMouseOver = () => setHovering(true);
  const handleMouseOut = () => setHovering(false);

  useEffect(() => {
    if (closing) {
      if (!hovering) {
        setTimeout(() => handleClose(), 150);
      }
    }
  }, [closing, hovering, handleClose]);

  useEffect(() => {
    setTimeout(() => {
      setClosing(true);
    }, delay || 5 * 1000);
  }, [id, delay, setClosing]);

  return (
    <Container
      aria-label={type}
      id={id}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      className={closing && !hovering ? 'removing' : ''}
    >
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
