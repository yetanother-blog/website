import React from 'react';
import styled, { useTheme } from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Typography } from '../Typography/Typography';
import { Link } from '../Link/Link';

export type BlogPostType = 'repo' | 'guide';

export type Test = 'primary' | 'secondary';

interface BlogPostLinkProps {
  url: string;
  slug: string;
  title: React.ReactNode;
  excerpt: React.ReactNode;
  metaData: React.ReactNode;
  blogType: BlogPostType;
}

const StyledGatsbyLink = styled(GatsbyLink)`
  display: block;
  text-decoration: none;
  font-family: inherit;
  color: inherit;
  position: relative;
`;

export const BlogPostLink: React.FC<BlogPostLinkProps> = ({
  url,
  slug,
  title,
  excerpt,
  metaData,
  blogType,
}) => {
  const theme = useTheme();

  const mapTypeToVariant: { [index in BlogPostType]: Test } = {
    repo: 'primary',
    guide: 'secondary',
  };

  return (
    <StyledGatsbyLink to={url} key={slug}>
      <Typography variant="headline" mb={theme.space.xs}>
        {title}
      </Typography>
      {metaData}
      <Typography variant="text" mb={theme.space.m}>
        {excerpt}
      </Typography>
      <Link
        variant={mapTypeToVariant[blogType]}
        display="block"
        component="span"
        marginBottom={theme.space.xxl}
      >
        read more
      </Link>
    </StyledGatsbyLink>
  );
};
