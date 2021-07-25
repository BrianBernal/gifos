// hooks
import useGetThemeClass from "../hooks/useGetThemeClass";

// components
import Header from "../components/header/Header";

// styles
import "./home.css";

function Home() {
  const classStringApp = useGetThemeClass("app");

  return (
    <div className={classStringApp}>
      <div className="main-container">
        <div className="top-section">
          <Header />
          <h1>
            ¡Inspírate y busca los mejores <b>GIFS</b>!
          </h1>
          <span className="bg-friends" />
          <div className="form">
            <input
              type="text"
              placeholder="Busca gifs"
              className="search-input"
            />
            <button className="search-button">
              <img src="images/icon-search-mod-noc.svg" alt="Search" />
            </button>
          </div>
          <h2>Resultados de la búsqueda</h2>
        </div>
        <div>List</div>
      </div>
    </div>
  );
}

export default Home;
