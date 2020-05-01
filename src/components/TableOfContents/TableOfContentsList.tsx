import React from 'react';
import { List } from '../List/List';
import { TableOfContentsItem } from './TableOfContentsItem';
import { Typography } from '../Typography/Typography';
import { useTheme } from 'styled-components';

interface HeadingsProps {
  value: string;
  depth: number;
}

interface TableOfContentsProps {
  headings: Array<HeadingsProps>;
  depthValue?: number;
}

export const TableOfContentsList: React.FC<TableOfContentsProps> = ({
  headings,
  depthValue = 1,
}) => {
  const theme = useTheme();
  return (
    <div>
      <Typography variant="headline" mb={theme.space.m}>
        Table Of Contents
      </Typography>
      <List>
        {headings
          .filter((heading) => heading.depth <= depthValue)
          .map((heading) => (
            <TableOfContentsItem key={heading.value} to={heading.value}>
              {heading.value}
            </TableOfContentsItem>
          ))}
      </List>
    </div>
  );
};
