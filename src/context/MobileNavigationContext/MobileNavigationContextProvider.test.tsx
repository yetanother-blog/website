import { MobileNavigationProps, MobileNavigationContext } from './MobileNavigationContext';
import React from 'react';
import { MobileNavigationContextProvider } from './MobileNavigationContextProvider';
import { render } from '@testing-library/react';

describe('MobileNavigationContextProvider', () => {
  it('should provide default values', () => {
    let val: MobileNavigationProps;
    render(
      <MobileNavigationContextProvider>
        <MobileNavigationContext.Consumer>
          {(context) => {
            val = context;

            return null;
          }}
        </MobileNavigationContext.Consumer>
      </MobileNavigationContextProvider>
    );

    expect(val!.isMobileNavigationOpen).toBe(false);
  });

  it('should change value', () => {
    let val: MobileNavigationProps;
    render(
      <MobileNavigationContextProvider>
        <MobileNavigationContext.Consumer>
          {(context) => {
            val = context;
            context.setIsMobileNavigationOpen(true);

            return null;
          }}
        </MobileNavigationContext.Consumer>
      </MobileNavigationContextProvider>
    );

    expect(val!.isMobileNavigationOpen).toBe(true);
  });
});
