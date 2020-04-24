import React from 'react';
import { GithubSlugger } from 'github-slugger-typescript';
import { Link } from '../Link/Link';
import { Link as GatsbyLink } from 'gatsby';

interface HeadingsProps {
  value: string;
  depth: number;
}

interface TableOfContentsProps {
  headings: [HeadingsProps];
}

const slugger = new GithubSlugger();

export const TableOfContentsList: React.FC<TableOfContentsProps> = (props) => {
  return (
    <ul>
      {props.headings.map((heading) => (
        <li key={heading.value}>
          <Link to={'#' + slugger.slug(heading.value)} as={GatsbyLink}>
            {heading.value}
          </Link>
        </li>
      ))}
    </ul>
  );
};
