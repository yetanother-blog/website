import styled from 'styled-components';

export const Snippet = styled.iframe.attrs(() => ({
  loading: 'lazy',
  sandbox: 'allow-scripts',
}))`
  width: 100%;
  margin-bottom: 0;
  border: 0;
`;
