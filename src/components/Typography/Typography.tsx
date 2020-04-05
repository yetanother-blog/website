import React from 'react';
import styled from 'styled-components';
import { variant, TypographyProps, typography, margin, MarginBottomProps } from 'styled-system';
import { StyledComponentPropsWithAs } from '../../types';
import { DefaultTheme } from 'styled-components';

export interface TypographyTypeProps {
  variant: 'title' | 'headline' | 'subheadline' | 'text' | 'smallText';
}

type FormattingTags = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'em' | 'blockquote' | 'pre';
type TestProps = TypographyProps &
  MarginBottomProps &
  TypographyTypeProps &
  StyledComponentPropsWithAs<FormattingTags, DefaultTheme, {}, any>;

const variants = variant({
  variants: {
    title: {
      fontSize: [32, 42],
      fontWeight: 600,
      letterSpacing: 0.5,
      lineHeight: 1.25,
      marginBottom: 0,
    },
    headline: {
      fontSize: [26, 30],
      lineHeight: 1.25,
      marginBottom: 0,
    },
    subheadline: {
      fontSize: 25,
      marginBottom: 0,
    },
    text: {
      fontSize: 20,
      marginBottom: 0,
    },
    smallText: {
      fontSize: 16,
      marginBottom: 0,
    },
  },
});

const StyledTitle = styled.h1`
  ${typography}
  ${variants}
  ${margin}
`;

const StyledHeadline = styled.h2`
  ${typography}
  ${variants}
  ${margin}
`;

const StyledSubheadline = styled.h3`
  ${typography}
  ${variants}
  ${margin}
`;

const StyledText = styled.p`
  ${typography}
  ${variants}
  ${margin}
`;

const StyledSmallText = styled.p`
  ${typography}
  ${variants}
  ${margin}
`;

export const Typography: React.FC<TestProps> = (props) => {
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
    default: {
      return <StyledSmallText {...props} />;
    }
  }
};