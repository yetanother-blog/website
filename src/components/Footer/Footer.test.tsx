import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should render w/ children', () => {
    const { container } = render(<Footer>some footer content</Footer>);
    expect(container).toMatchSnapshot();
  });
});
