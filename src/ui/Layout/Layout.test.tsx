import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from './layout';
import { ThemeContext } from 'styled-components';
import { theme } from '../theme';

describe(`Layout`, () => {
  it(`renders a header`, () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <Layout>
          <main>
            <h1>hello</h1>
          </main>
        </Layout>
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
