import React from 'react';
import { render } from '@testing-library/react';
import { BlogPostMetaData } from './BlogPostMetaData';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';

describe('BlogPostMetaData component', () => {
  it('should render a BlogPostMetaData w/ content', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <BlogPostMetaData date="May 25, 2020" wordCount="1337" timeToRead="4" />
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
