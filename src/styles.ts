import styled, { keyframes } from 'styled-components';
import { lighten } from './helpers/index';

enum colors {
  error = '#f75d52',
  success = '#51f083',
  warning = '#f5b840',
}

const lightenColor = (color: keyof typeof colors) => {
  return lighten(150, colors[color]);
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr 7fr;
  grid-column-gap: 8px;

  animation: ${fadeIn} 0.2s;

  &.removing {
    animation: ${fadeOut} 150ms ease;
  }

  color: #272727;
  font-size: 14px;

  background-color: ${(props) =>
    lightenColor(props['aria-label'] as keyof typeof colors)};

  border-left: 8px solid
    ${(props) => colors[props['aria-label'] as keyof typeof colors]};
  border-radius: 4px;

  position: relative;

  width: 40%;
  min-height: 35px;
  max-width: 220px;
  @media (max-width: 500px) {
    max-width: 300px;
  }
  min-width: fit-content;

  box-sizing: content-box;

  padding: 8px;

  font-family: Roboto, Arial, sans-serif;

  & > svg {
    height: inherit;
    width: 28px;

    color: ${(props) => colors[props['aria-label'] as keyof typeof colors]};

    align-self: center;
  }
`;

export const Header = styled.header`
  font-weight: 500;
  font-size: 15px;
`;

export const Body = styled.div`
  display: flex;
  width: auto;
  flex-flow: column;
`;

export const Message = styled.span`
  width: auto;

  font-size: 12px;
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  top: 7px;
  right: 10px;

  cursor: pointer;
`;
