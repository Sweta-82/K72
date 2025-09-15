import React, { createContext, useState } from 'react';

// Create context
export const NavBarContext = createContext();

function NavContextProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <NavBarContext.Provider value={[open, setOpen]}>
      {children}
    </NavBarContext.Provider>
  );
}

export default NavContextProvider;
