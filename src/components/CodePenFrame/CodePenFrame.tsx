import React from 'react';

interface CodePenFrameProps {
    url: string;
    title: string;
    height?: number;
}

export const CodePenFrame: React.FC<CodePenFrameProps> = ({url, height = 500, title}) => {
    return <div dangerouslySetInnerHTML={{ __html: `
        <iframe 
            height="${height}"
            style="width: 100%;"
            scrolling="no"
            title="${title}"
            src="${url}?height=${height}&theme-id=light&default-tab=result"
            frameborder="no"
            loading="lazy"
            allowtransparency="true"
            allowfullscreen="true" /> 
    `}}
    />;
}
