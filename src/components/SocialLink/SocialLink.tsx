import React from 'react';
import styled from 'styled-components';

interface SocialLinkProps {
  href: string;
  accessibleIconLabel: string;
}

const StyledSocialLink = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noopener',
}))`
  color: ${(props) => props.theme.colors.grey500};
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 48px;
  height: 48px;
  transition: color 200ms ease-in;
  margin-right: 0;

  &:hover,
  &:focus {
    outline: none;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

const StyledVisuallyHidden = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const SocialLink: React.FC<SocialLinkProps> = ({ href, children, accessibleIconLabel }) => {
  return (
    <StyledSocialLink href={href}>
      {children}
      <StyledVisuallyHidden>
        {accessibleIconLabel}
      </StyledVisuallyHidden>
    </StyledSocialLink>
  )
}