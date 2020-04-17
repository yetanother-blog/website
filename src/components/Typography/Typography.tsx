import React from 'react';
import styled from 'styled-components';
import {
  variant,
  TypographyProps,
  typography,
  margin,
  MarginBottomProps,
  DisplayProps,
  display,
  color,
} from 'styled-system';
import { StyledComponentPropsWithAs } from '../../types';
import { DefaultTheme } from 'styled-components';

export interface TypographyTypeProps {
  variant: 'title' | 'headline' | 'subheadline' | 'text' | 'smallText' | 'tinyText';
}

type FormattingTags = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'em' | 'blockquote' | 'pre';
export type TypoProps = TypographyProps &
  MarginBottomProps &
  TypographyTypeProps &
  DisplayProps &
  StyledComponentPropsWithAs<FormattingTags, DefaultTheme, {}, any>;

const variants = variant({
  variants: {
    title: {
      fontSize: [30, 48],
      fontWeight: 600,
      letterSpacing: 0.5,
      lineHeight: 1.25,
      marginBottom: 0,
    },
    headline: {
      fontSize: [26, 30],
      lineHeight: 1.25,
      fontWeight: 600,
      marginBottom: 0,
    },
    subheadline: {
      fontSize: 25,
      fontWeight: 400,
      lineHeight: 1.3,
      marginBottom: 0,
    },
    text: {
      fontSize: 20,
      marginBottom: 0,
    },
    smallText: {
      fontSize: 16,
      lineHeight: 1.4,
      marginBottom: 0,
    },
    tinyText: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: 1.4,
      marginBottom: 0,
    },
  },
});

const StyledTitle = styled.h1`
  -webkit-font-smoothing: antialiased;
  ${display}
  ${color}
  ${typography}
  ${variants}
  ${margin}
`;

const StyledHeadline = styled.h2`
  -webkit-font-smoothing: antialiased;
  ${display}
  ${color}
  ${typography}
  ${variants}
  ${margin}
`;

const StyledSubheadline = styled.h3`
  -webkit-font-smoothing: antialiased;
  ${display}
  ${color}
  ${typography}
  ${variants}
  ${margin}
`;

const StyledText = styled.p`
  -webkit-font-smoothing: antialiased;
  ${display}
  ${color}
  ${typography}
  ${variants}
  ${margin}
`;

const StyledSmallText = styled.p`
  -webkit-font-smoothing: antialiased;
  ${display}
  ${color}
  ${typography}
  ${variants}
  ${margin}
`;

const StyledTinyText = styled.p`
  -webkit-font-smoothing: antialiased;
  ${display}
  ${color}
  ${typography}
  ${variants}
  ${margin}
  color: ${(props) => props.theme.colors.grey400};
`;

export const Typography: React.FC<TypoProps> = (props) => {
  switch (props.variant) {
    case 'title': {
      return <StyledTitle {...props} />;
    }
    case 'headline': {
      return <StyledHeadline {...props} />;
    }
    case 'subheadline': {
      return <StyledSubheadline {...props} />;
    }
    case 'text': {
      return <StyledText {...props} />;
    }
    case 'smallText': {
      return <StyledSmallText {...props} />;
    }
    default: {
      return <StyledTinyText {...props} />;
    }
  }
};
