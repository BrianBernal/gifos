// react
import { StrictMode } from "react";

// styles
import "./App.css";

// context
import AppProvider from "./components/context/AppProvider";

// components
import Home from "./pages/Home";

function App() {
  return (
    <StrictMode>
      <AppProvider>
        <Home />
      </AppProvider>
    </StrictMode>
  );
}

export default App;
