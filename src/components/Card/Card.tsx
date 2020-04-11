import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import {
  width,
  margin,
  padding,
  borderRadius,
  MarginProps,
  WidthProps,
  BorderRadiusProps,
  BackgroundColorProps,
  PaddingProps,
} from 'styled-system';

interface Props {
  to: string;
}

export type CardProps = Props & MarginProps & WidthProps;

export type StyledSystemProps = Props & BorderRadiusProps & BackgroundColorProps & PaddingProps & Omit<CardProps, 'to'>;

export const StyledCard = styled(GatsbyLink)<StyledSystemProps>`
    background-color: ${(props) => props.theme.colors.grey200};
    text-decoration: none;
    border-radius: ${(props) => props.theme.radii.s};
    color: inherit;
    font-family: inherit;
    transition: background-color 200ms ease-in;
    box-sizing: border-box;

    ${padding}
    ${width}
    ${margin}
    ${borderRadius}

    &:hover,
    &:focus {
      background-color: ${(props) => props.theme.colors.grey300};
    }
`;

export const Card: React.FC<CardProps> = ({ children, to, width, marginBottom }) => {
  const theme = useTheme();

  return (
    <StyledCard padding={[theme.space.l, theme.space.xl]} to={to} width={width} mb={marginBottom}>
      {children}
    </StyledCard>
  );
};
