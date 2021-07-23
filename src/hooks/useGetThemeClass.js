// react
import { useContext } from "react";

// context
import { AppContext } from "../components/context/AppContext";

function useGetThemeClass(className) {
  const { state } = useContext(AppContext);
  return state.theme === "dark" ? `${className} dark-${className}` : className;
}

export default useGetThemeClass;
