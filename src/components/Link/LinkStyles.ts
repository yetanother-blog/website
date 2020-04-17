import styled, { css } from 'styled-components';

export const sharedStyles = css`
  transition: color 200ms ease-in;
  text-decoration: none;
  outline: none;
  -webkit-font-smoothing: antialiased;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Source Code Pro';

  &:hover,
  &:focus {
    span {
      &:after {
        transform: scaleY(4);
      }
    }
  }

  span {
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      background-color: ${(props) => props.theme.colors.grey300};
      height: 4px;
      bottom: -8px;
      left: 0;
      z-index: -1;
      transform-origin: bottom;
      transition: transform 100ms ease-in;
    }
  }
`;

export const defaultFontLinkStyles = css`
  color: ${(props) => props.theme.colors.grey500};
  font-size: ${(props) => props.theme.fontSizes[3]};
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 1.25;
  margin-bottom: 0;
`;

export const smallFontLinkStyles = css`
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 0;
`;

export const tinyFontLinkStyles = css`
  font-size: ${(props) => props.theme.fontSizes[1]};
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 0;
`;

export const StyledUnderline = styled.span`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    background-color: ${(props) => props.theme.colors.grey300};
    height: 4px;
    bottom: -8px;
    left: 0;
    z-index: -1;
    transform-origin: bottom;
    transition: transform 100ms ease-in-out;
  }

  &:hover,
  &:focus {
    &:after {
      transform: scaleY(4);
    }
  }
`;
