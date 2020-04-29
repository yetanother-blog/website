import React from 'react';
import { render } from '@testing-library/react';
import { BlogPostLink } from './BlogPostLink';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';

describe('BlogPostLink component', () => {
  it('should render a BlogPostLink w/ content', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <BlogPostLink
          url="/some-url"
          title="some title"
          slug="some slug"
          excerpt="Some more text..."
          blogType="guide"
          metaData={<div>Some Content </div>}
        />
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
