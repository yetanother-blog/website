import React from 'react';

export interface MobileNavigationProps {
  setIsMobileNavigationOpen: (isMobileNavigationOpen: boolean) => void;
  isMobileNavigationOpen: boolean;
}

export const MobileNavigationContext = React.createContext<MobileNavigationProps>({
  isMobileNavigationOpen: false,
  setIsMobileNavigationOpen() {},
});
