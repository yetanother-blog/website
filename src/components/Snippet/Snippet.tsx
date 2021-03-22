import styled from 'styled-components';

export const Snippet = styled.iframe.attrs(() => ({
  loading: 'lazy',
}))`
  width: 100%;
  margin-bottom: 0;
  border: 0;
`;
