import React from 'react';
import { render } from '@testing-library/react';
import { Box } from './Box';

describe('Box component', () => {
  it('should render a box w/ content', () => {
    const { container } = render(
      <Box display="flex" flexDirection={['column', 'row']} justifyContent="space-between">
        <span>Hello Box 🎉</span>
        <a href="#">some link</a>
      </Box>
    );

    expect(container).toMatchSnapshot();
  });
});
