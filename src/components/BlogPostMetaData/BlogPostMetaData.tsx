import React from 'react';
import { Typography } from '../Typography/Typography';
import { useTheme, DefaultTheme } from 'styled-components';

interface BlogPostMetaDataProps {
  date: React.ReactNode;
  timeToRead: React.ReactNode;
  author: React.ReactNode;
  mb?: keyof DefaultTheme['space'];
}

export const BlogPostMetaData: React.FC<BlogPostMetaDataProps> = ({
  date,
  timeToRead,
  author,
  mb = 'l'
}) => {
  const theme = useTheme();
  return (
    <Typography
      variant="tinyText"
      fontFamily="Source Code Pro"
      fontWeight="600"
      mb={theme.space[mb]}
    >
      {date} • {author} • {timeToRead}min read
    </Typography>
  );
};
