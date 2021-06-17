import React from 'react';
import styled from 'styled-components';

export interface SnipperProps {
  url: string;
  title: string;
  height: number;
  defaultTab?: 'result' | 'html' | 'css' | 'js';
}

export const StyledSnippet = styled.iframe`
  display: block;
  overflow: hidden;
  border: 0;
  margin-bottom: ${(props) => props.theme.space.m}px;

  @media (min-width: 992px) {
    width: 780px;
    margin-left: -50px;
  }
`;

export const Snippet: React.FC<SnipperProps> = ({
  url,
  title,
  height,
  defaultTab = 'html',
}) => {
  const encodedURL = encodeURIComponent(url);

  return (
    <StyledSnippet
      src={`https://indiepen.tech/embed/?url=${encodedURL}&tab=${defaultTab}`}
      loading="lazy"
      title={title}
      width="100%"
      height={height}
    />
  );
};
