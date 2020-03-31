import styled, { DefaultTheme } from 'styled-components';
import React from 'react';
import { StyledSystemBoxProps, StyledComponentPropsWithAs } from './types';

import {
  color,
  backgroundColor,
  padding,
  margin,
  borderRadius,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  width,
  minHeight,
} from 'styled-system';

type BoxProps = StyledSystemBoxProps &
  StyledComponentPropsWithAs<'span' | 'aside' | 'main' | 'section' | 'nav' | 'footer', DefaultTheme, {}, any>;

export const StyledBox = styled.div`
    ${color}
    ${backgroundColor}
    ${padding}
    ${margin}
    ${borderRadius}
    ${display}
    ${alignItems}
    ${justifyContent}
    ${flexDirection}
    ${minHeight}
    ${width}
`;

export const Box: React.FC<BoxProps> = (props) => {
  return <StyledBox {...props} />;
};
