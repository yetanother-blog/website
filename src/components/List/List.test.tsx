import React from 'react';
import { render } from '@testing-library/react';
import { List } from './List';
import { ListItem } from './ListItem';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';

describe('List component', () => {
  it('should render correctly w/ list item', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <List>
          <ListItem>Hello One</ListItem>
          <ListItem>Hello Two</ListItem>
          <ListItem>Hello Hundred</ListItem>
        </List>
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
