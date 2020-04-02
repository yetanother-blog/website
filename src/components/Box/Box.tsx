import styled, { DefaultTheme } from 'styled-components';
import React from 'react';
import { StyledComponentPropsWithAs } from '../../types';
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
import { StyledSystemBoxProps } from './types';

type HtmlTags = 'span' | 'aside' | 'main' | 'section' | 'nav' | 'footer';
type BoxProps = StyledSystemBoxProps & StyledComponentPropsWithAs<HtmlTags, DefaultTheme, {}, any>;

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
