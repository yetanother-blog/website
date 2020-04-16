import styled from 'styled-components';

export const SocialLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener',
}))`
  color: ${(props) => props.theme.colors.grey500};
  text-decoration: none;
  width: 24px;
  height: 24px;
  display: inline-block;
  transition: color 200ms ease-in;

  &:hover,
  &:focus {
    outline: none;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
