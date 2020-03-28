import React from 'react';
import { render } from '@testing-library/react';
import { Layout } from './layout';

describe(`Layout`, () => {
  it(`renders a header`, () => {
    const { container } = render(
      <Layout location="/foo" title="bla">
        <main>
          <h1>hello</h1>
        </main>
      </Layout>
    );

    expect(container).toMatchSnapshot();
  });
});
