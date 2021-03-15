import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  width: 24px;
  height: 24px;
`;

interface IconProps {
    icon: string;
}

export const Icon: React.FC<IconProps> = ({icon, ...props}) => {
    return <StyledSpan role="img" {...props} dangerouslySetInnerHTML={{
        __html: `${icon}`
    }}/>;
}