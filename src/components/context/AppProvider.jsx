// react
import { useState } from "react";

// context
import { AppContext } from "./AppContext";
import { INITIAL_VALUE } from "./initialValue";

function AppProvider({ children }) {
  const [state, setState] = useState(INITIAL_VALUE);

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
