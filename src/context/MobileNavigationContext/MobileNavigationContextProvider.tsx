import React, { useState } from 'react';
import { MobileNavigationContext } from './MobileNavigationContext';

export const MobileNavigationContextProvider: React.FC = ({ children }) => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  return (
    <MobileNavigationContext.Provider value={{ isMobileNavigationOpen, setIsMobileNavigationOpen }}>
      {children}
    </MobileNavigationContext.Provider>
  );
};
