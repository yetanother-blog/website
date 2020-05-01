import React from 'react';
import { ListItem } from '../List/ListItem';
import { Link } from '../Link/Link';
import { Link as GatsbyLink } from 'gatsby';
import { GithubSlugger } from 'github-slugger-typescript';

interface TableOfContentsItemProps {
  to: string;
}

export const TableOfContentsItem: React.FC<TableOfContentsItemProps> = ({
  to,
  children,
}) => {
  const slugger = new GithubSlugger();
  return (
    <ListItem>
      <Link
        variant="tertiary"
        type="inline"
        to={`${location.pathname}#${slugger.slug(to)}`}
        as={GatsbyLink}
      >
        {children}
      </Link>
    </ListItem>
  );
};
