import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';
import { Card } from './Card';

describe('SocialLink component', () => {
  it('should render social link for twitter', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <Card to="/">Some Content</Card>
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
