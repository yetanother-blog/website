import React from 'react';
import { render } from '@testing-library/react';
import { Snippet } from './Snippet';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';

describe('Snippet component', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <Snippet
          url="https://example.com"
          title="Title is coooool :)"
          height={256}
        />
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
