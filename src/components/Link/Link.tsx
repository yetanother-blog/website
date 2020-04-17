import React from 'react';
import styled from 'styled-components';
import { PolymorphicLink, PolymorphicLinkProps } from './PolymorphicLink';
import {
  sharedStyles,
  defaultFontLinkStyles,
  smallFontLinkStyles,
  StyledUnderline,
  tinyFontLinkStyles,
} from './LinkStyles';
import { display, DisplayProps, margin, MarginProps } from 'styled-system';

export type LinkVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

export type LinkProps<C extends React.ElementType> = PolymorphicLinkProps<C> &
  DisplayProps &
  MarginProps & {
    variant?: LinkVariant;
    children: React.ReactNode;
  };

const StyledPrimaryLink = styled(PolymorphicLink)`
  ${display}  
  ${sharedStyles}
  ${defaultFontLinkStyles}
  ${margin}

  &:before {
    content: '>> @';
    color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledSecondaryLink = styled(PolymorphicLink)`
  ${display}
  ${sharedStyles}
  ${defaultFontLinkStyles}
  ${margin}

  &:before {
    content: '>> @';
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const StyledTertiaryLink = styled(PolymorphicLink)`
  ${display}
  ${sharedStyles}
  ${smallFontLinkStyles}
  ${margin}
  color: ${(props) => props.theme.colors.grey500};

  @keyframes pulse {
    0% {
      transform: scaleY(4);
    }
    100% {
      transform: scale(1.3, 8);
    }

  }

  &[aria-current="page"] {
    span {
      &:after {
        animation: pulse 1000ms forwards;
        animation-delay: 300ms;
        transform: scaleY(4);

      }
    }
  }
`;

const StyledQuaternaryLink = styled(PolymorphicLink)`
  ${display}
  ${sharedStyles}
  ${tinyFontLinkStyles}
  ${margin}
  color: ${(props) => props.theme.colors.grey400};
`;

export function Link<C extends React.ElementType>(props: LinkProps<C>) {
  const { variant = 'primary', children, ...restProps } = props;

  switch (variant) {
    case 'primary':
      return (
        <StyledPrimaryLink {...restProps}>
          <StyledUnderline>{children}</StyledUnderline>
        </StyledPrimaryLink>
      );

    case 'secondary':
      return (
        <StyledSecondaryLink {...restProps}>
          <StyledUnderline>{children}</StyledUnderline>
        </StyledSecondaryLink>
      );

    case 'tertiary':
      return (
        <StyledTertiaryLink {...restProps}>
          <StyledUnderline>{children}</StyledUnderline>
        </StyledTertiaryLink>
      );

    default:
      return (
        <StyledQuaternaryLink {...restProps}>
          <StyledUnderline>{children}</StyledUnderline>
        </StyledQuaternaryLink>
      );
  }
}
