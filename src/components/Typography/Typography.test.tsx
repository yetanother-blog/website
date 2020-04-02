import React from 'react';
import { render } from '@testing-library/react';
import { Typography } from './Typography';

describe('Typography component', () => {
  it('should render a box w/ content', () => {
    const { container } = render(<Typography variant="title">Hello Typography 🎉</Typography>);

    expect(container).toMatchSnapshot();
  });
});
