// react
import { useContext } from "react";

// context
import { AppContext } from "../context/AppContext";

/**
 * Can concat "dark-" to a base classname
 * @param {string} className base string of className Eg: appClass
 * @returns when it's dark mode returns dark-[string-param]. Else same string
 */
function useGetThemeClass(className) {
  const { state } = useContext(AppContext);
  return state.theme === "dark" ? `${className} dark-${className}` : className;
}

export default useGetThemeClass;
