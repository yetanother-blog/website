import React from 'react';
import { MDXProviderComponentsProp } from '@mdx-js/react';
import { Typography } from '../components/Typography/Typography';
import { useTheme } from 'styled-components';
import styled from 'styled-components';
import { List } from '../components/List/List';
import { ListItem } from '../components/List/ListItem';

const StyledBlockquote = styled(Typography)`
  border-left: 4px solid ${(props) => props.theme.colors.grey300};
  margin: 0;
  padding: ${(props) => props.theme.space.l}px;
  margin-bottom: ${(props) => props.theme.space.l}px;
  p {
    color: ${(props) => props.theme.colors.grey500};
    line-height: 1.5;
    font-size: ${(props) => props.theme.fontSizes[4]};
    font-weight: 600;
    &:before {
      content: open-quote;
    }
    &:after {
      content: close-quote;
    }
  }
`;

export const mxdComponents: MDXProviderComponentsProp = {
  h1: (props) => {
    const theme = useTheme();
    return <Typography variant="title" as="h2" mb={theme.space.l} {...props} />;
  },
  h2: (props) => {
    const theme = useTheme();
    return (
      <Typography
        variant="headline"
        mb={theme.space.l}
        mt={theme.space.xl}
        {...props}
      />
    );
  },
  h3: (props) => {
    const theme = useTheme();
    return (
      <Typography
        variant="subheadline"
        mb={theme.space.l}
        mt={theme.space.xl}
        {...props}
      />
    );
  },
  p: (props) => {
    const theme = useTheme();
    return <Typography variant="text" mb={theme.space.l} {...props} />;
  },
  blockquote: StyledBlockquote,
  ul: List,
  li: ListItem,
};
