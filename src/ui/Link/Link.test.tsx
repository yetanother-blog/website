import React from 'react';
import { render } from '@testing-library/react';
import { Link } from './Link';
import { Link as GatsbyLink } from 'gatsby';
import { ThemeContext } from 'styled-components';
import { theme } from '../theme';

describe('Typography component', () => {
  it('should render a link w/ href', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <Link variant="primary" href="/some-link">
          Hello Link 🎉
        </Link>
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render a link w/ gatsby link', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <Link variant="primary" component={GatsbyLink} to="/">
          Hello Link 🎉
        </Link>
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
