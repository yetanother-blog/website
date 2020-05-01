import React from 'react';
import { TableOfContentsList } from './TableOfContentsList';
import { render } from '@testing-library/react';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';

describe('Table Of Contents ui', () => {
  it('should render toc list w/ items', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <TableOfContentsList
          headings={[
            { value: 'some headline', depth: 1 },
            { value: 'some other headline', depth: 1 },
            { value: 'more headlines', depth: 1 },
          ]}
        />
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
