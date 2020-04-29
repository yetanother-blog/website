import React from 'react';
import { Typography } from '../Typography/Typography';
import { useTheme } from 'styled-components';

interface BlogPostMetaDataProps {
  date: React.ReactNode;
  timeToRead: React.ReactNode;
  wordCount: React.ReactNode;
}

export const BlogPostMetaData: React.FC<BlogPostMetaDataProps> = ({
  date,
  timeToRead,
  wordCount,
}) => {
  const theme = useTheme();
  return (
    <Typography
      variant="tinyText"
      fontFamily="Source Code Pro"
      fontWeight="600"
      mb={theme.space.l}
    >
      {date} • {timeToRead}min to read • {wordCount} words
    </Typography>
  );
};
