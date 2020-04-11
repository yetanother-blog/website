import React from 'react';
import { render } from '@testing-library/react';
import { SocialLink } from './SocialLink';
import { Twitter } from './Twitter';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';

describe('SocialLink component', () => {
  it('should render social link for twitter', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <SocialLink href="https://twitter.com/_yetanotherblog">
          <Twitter />
        </SocialLink>
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
