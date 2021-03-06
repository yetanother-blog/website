import React from 'react';
import { render } from '@testing-library/react';
import { BlogPostMetaData } from './BlogPostMetaData';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';

describe('BlogPostMetaData component', () => {
  it('should render a BlogPostMetaData w/ content', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <BlogPostMetaData
          date="2020-05-25 15:00:00.000Z"
          formattedDate="May 25, 2020"
          author="Homer Simpson"
          timeToRead="4"
        />
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
