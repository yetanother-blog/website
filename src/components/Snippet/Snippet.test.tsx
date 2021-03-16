import React from 'react';
import { render } from '@testing-library/react';
import { Snippet } from './Snippet';

describe('Snippet component', () => {
  it('should render', () => {
    const { container } = render(
      <Snippet
        src="data:text/html;charset=utf-8,%3Chtml%3E%3Cbody%3Efoo%3C/body%3E%3C/html%3E"
        title="Title is coooool :)"
        height="256"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
