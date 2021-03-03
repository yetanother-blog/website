import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';
import { Navigation } from './Navigation';
import { Link } from '../Link/Link';

describe('Navigation component', () => {
  it('should render social link for twitter', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <Navigation>
          <Link variant="tertiary">Guide</Link>
        </Navigation>
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
