import styled, { keyframes } from 'styled-components';
import { lighten } from './helpers/index';

export enum colors {
  error = '#f75d52',
  success = '#51f083',
  warning = '#f5b840',
}

const lightenColor = (color: keyof typeof colors) => {
  return lighten(120, colors[color]);
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 7fr;
  grid-column-gap: 8px;

  animation: ${fadeIn} 0.2s;

  color: #272727;
  font-size: 14px;

  background-color: ${(props) =>
    lightenColor(props['aria-label'] as keyof typeof colors)};

  border-left: 8px solid
    ${(props) => colors[props['aria-label'] as keyof typeof colors]};
  border-radius: 4px;

  position: relative;

  width: 40%;
  height: 35px;
  min-width: fit-content;

  box-sizing: content-box;

  padding: 8px;

  & > svg {
    height: inherit;
    width: 28px;
    color: ${(props) => colors[props['aria-label'] as keyof typeof colors]};
  }
`;

export const Header = styled.header`
  font-weight: 600;
  font-size: 16px;
`;

export const Body = styled.div`
  display: flex;
  width: inherit;
  flex-flow: column;
`;

export const Message = styled.span`
  width: max-content;

  font-size: 14px;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;

  cursor: pointer;
`;
