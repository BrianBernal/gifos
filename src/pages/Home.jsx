// hooks
import useGetThemeClass from "../hooks/useGetThemeClass";

// styles
import "./home.css";

// components
import Header from "../components/header/Header";
import ImagesGrid from "../components/imagesGrid/ImagesGrid";

function Home() {
  const classStringApp = useGetThemeClass("app");

  return (
    <div className={classStringApp}>
      <div className="main-container">
        <section className="top-section">
          <Header />
          <h1 className="normal-weight">
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
          <h2 className="normal-weight results-title">
            Resultados de la búsqueda
          </h2>
        </section>
        <ImagesGrid />
      </div>
    </div>
  );
}

export default Home;
