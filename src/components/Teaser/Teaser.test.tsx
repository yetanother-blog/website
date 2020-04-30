import React from 'react';
import { render } from '@testing-library/react';
import { Teaser } from './Teaser';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';

describe('Teaser component', () => {
  it('should render a teaser w/ content', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <Teaser>Hello World</Teaser>
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
