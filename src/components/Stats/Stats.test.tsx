import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContext } from 'styled-components';
import { theme } from '../../utils/theme';
import { Stats } from './Stats';
import { StatsItem } from './StatsItem';

describe('Stats component', () => {
  it('should render', () => {
    const { container } = render(
      <ThemeContext.Provider value={theme}>
        <Stats>
          <StatsItem
            value="~50"
            unit="%"
            description="Of all top 1m websites by traffic include Google Analytics"
            source="BuiltWith"
            sourceUrl="https://trends.builtwith.com/analytics/Google-Analytics"
          />
          <StatsItem
            value="~46"
            unit="KB"
            description="Size of the Google Analytics JavaScript Snippet"
            source="Google"
            sourceUrl="https://www.google-analytics.com/analytics.js"
          />
        </Stats>
      </ThemeContext.Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
