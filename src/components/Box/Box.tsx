import styled, { DefaultTheme } from 'styled-components';
import React from 'react';
import { StyledComponentPropsWithAs } from '../../types';
import {
  color,
  padding,
  background,
  margin,
  borderRadius,
  display,
  alignItems,
  justifyContent,
  flexDirection,
  width,
  minHeight,
  height,
  position,
  maxWidth,
  flex,
  overflow,
} from 'styled-system';
import { StyledSystemBoxProps } from './types';

type HtmlTags = 'span' | 'aside' | 'main' | 'section' | 'nav' | 'footer' | React.ElementType<any>;
export type BoxProps = StyledSystemBoxProps &
  StyledComponentPropsWithAs<HtmlTags, DefaultTheme, {}, any>;

export const StyledBox = styled.div`
    box-sizing: border-box;
    ${color}
    ${padding}
    ${margin}
    ${borderRadius}
    ${display}
    ${alignItems}
    ${justifyContent}
    ${flexDirection}
    ${minHeight}
    ${height}
    ${maxWidth}
    ${width}
    ${position}
    ${flex}
    ${overflow}
    ${background}
`;

export const Box: React.FC<BoxProps> = (props) => {
  return <StyledBox {...props} />;
};
