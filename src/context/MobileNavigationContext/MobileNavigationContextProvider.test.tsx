import { MobileNavigationProps, MobileNavigationContext } from './MobileNavigationContext';
import React, { useEffect } from 'react';
import { MobileNavigationContextProvider } from './MobileNavigationContextProvider';
import { render, screen, waitFor } from '@testing-library/react';

const TestComponent: React.FC<{ value: boolean, set: () => void  }> = (props) => {
  useEffect(props.set);
  return <span>{props.value ? 'isOpen' : 'isClose'}</span>
}

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

  it('should change value', async () => {
    render(
      <MobileNavigationContextProvider>
        <MobileNavigationContext.Consumer>
          {(context) => {
            return (
              <TestComponent 
                value={context.isMobileNavigationOpen} 
                set={() => context.setIsMobileNavigationOpen(true)} 
              />
            );
          }}
        </MobileNavigationContext.Consumer>
      </MobileNavigationContextProvider>
    );

    await waitFor(() => screen.findByText('isOpen'));
  });
});
