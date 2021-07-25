// react
import { useContext } from "react";

// context
import { AppContext } from "../components/context/AppContext";

/**
 * Ask if it is on dark mode
 * @param {any} trueValue return this value if there is dark mode
 * @param {any} falseValue return this value if there is NOT dark mode
 * @returns true or false by default
 */
function useIsDarkMode(trueValue = true, falseValue = false) {
  const { state } = useContext(AppContext);
  return state.theme === "dark" ? trueValue : falseValue;
}

export default useIsDarkMode;
