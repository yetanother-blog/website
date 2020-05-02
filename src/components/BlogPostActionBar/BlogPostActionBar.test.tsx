import React from 'react';
import { render } from '@testing-library/react';
import { BlogPostActionBar } from './BlogPostActionBar';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';

describe('BlogPostActionBar', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <BlogPostActionBar>
          <div>some content</div>
        </BlogPostActionBar>
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
