import React, { createContext } from 'react';    //components

const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export default ColorModeContext;
