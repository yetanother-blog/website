import React from 'react';
import { Typography } from '../Typography/Typography';
import { useTheme, DefaultTheme } from 'styled-components';
import { Box } from '../Box/Box';

interface BlogPostMetaDataProps {
  date: string;
  formattedDate: React.ReactNode;
  timeToRead: React.ReactNode;
  author: React.ReactNode;
  mb?: keyof DefaultTheme['space'];
}

export const BlogPostMetaData: React.FC<BlogPostMetaDataProps> = ({
  date,
  formattedDate,
  timeToRead,
  author,
  mb = 'l',
}) => {
  const theme = useTheme();
  return (
    <Typography
      variant="tinyText"
      fontFamily="Source Code Pro"
      fontWeight="600"
      mb={theme.space[mb]}
      as="span"
      display="block"
    >
      <time dateTime={date}>{formattedDate}</time> •{' '}
      <Box as="address" display="inline-block">
        {author}
      </Box>{' '}
      •{' '}
      <Box as="span" display="inline-block">
        {`${timeToRead}min read`}
      </Box>
    </Typography>
  );
};
