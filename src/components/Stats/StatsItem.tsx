import React from 'react';
import { Link } from '../Link/Link';
import { Typography } from '../Typography/Typography';

export interface StatsItemPros {
  value: string;
  unit: string;
  description: string;
  source: string;
  sourceUrl: string;
}

export const StatsItem: React.FC<StatsItemPros> = ({
  value,
  unit,
  description,
  source,
  sourceUrl,
}) => {
  return (
    <div>
      <Typography
        variant="title"
        color="secondary"
        as="span"
        display="block"
        textAlign="center"
        marginBottom="s"
      >
        {value}
        <small>{unit}</small>
      </Typography>
      <Typography
        variant="smallText"
        as="span"
        display="block"
        textAlign="center"
        marginBottom="m"
      >
        {description}
      </Typography>
      <Typography
        variant="tinyText"
        textAlign="center"
        as="span"
        display="block"
      >
        (Source:&nbsp;
        <Link
          variant="quartenary"
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {source}
        </Link>
        )
      </Typography>
    </div>
  );
};
