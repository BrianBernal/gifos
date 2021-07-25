// styles
import { useContext } from "react";
import "./header.css";

// context
import { AppContext } from "../context/AppContext";

// hooks
import useGetThemeClass from "../../hooks/useGetThemeClass";
import useIsDarkMode from "../../hooks/useIsDarkMode";

const CHANGE_THEME = {
  light: "dark",
  dark: "light",
};

function Header() {
  const { setState } = useContext(AppContext);
  const classStringButton = useGetThemeClass("theme-button");
  const imageLogo = useIsDarkMode(
    "images/logo-mobile-modo-noct.svg",
    "images/logo-desktop.svg"
  );

  const handlerThemeButton = () => {
    setState((prevState) => ({
      ...prevState,
      theme: CHANGE_THEME[prevState.theme] || "light",
    }));
  };

  return (
    <header className="header">
      <img src={imageLogo} alt="Logo" className="main-logo" />
      <button onClick={handlerThemeButton} className={classStringButton}>
        MODO DARK
      </button>
    </header>
  );
}

export default Header;
