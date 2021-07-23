// styles
import { useContext } from "react";
import "./header.css";

// context
import { AppContext } from "../context/AppContext";

// hooks
import useGetThemeClass from "../../hooks/useGetThemeClass";

const CHANGE_THEME = {
  light: "dark",
  dark: "light",
};

function Header() {
  const { setState } = useContext(AppContext);
  const classStringButton = useGetThemeClass("theme-button");

  const handlerThemeButton = () => {
    setState((prevState) => ({
      ...prevState,
      theme: CHANGE_THEME[prevState.theme] || "light",
    }));
  };

  return (
    <header className="header">
      <img src="images/logo-desktop.svg" alt="Logo" />
      <button onClick={handlerThemeButton} className={classStringButton}>
        MODO DARK
      </button>
    </header>
  );
}

export default Header;
