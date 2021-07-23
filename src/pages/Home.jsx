// hooks
import useGetThemeClass from "../hooks/useGetThemeClass";

// components
import Header from "../components/header/Header";

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
          <input type="text" />
          <button>Search</button>
          <h2>Resultados de la búsqueda</h2>
        </div>
        <div>List</div>
      </div>
    </div>
  );
}

export default Home;
