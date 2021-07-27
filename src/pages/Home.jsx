// react
import { useState } from "react";

// hooks
import useGetThemeClass from "../hooks/useGetThemeClass";
import useFetch from "../hooks/useFetch";

// styles
import "./home.css";

// services
import { searchService } from "../api/services";

// components
import Header from "../components/header/Header";
import ImagesGrid from "../components/imagesGrid/ImagesGrid";
import Loader from "../components/loader/Loader";
import ErrorMessage from "../components/error/ErrorMessage";

function Home() {
  const classStringApp = useGetThemeClass("app");
  const { error, loading, fetchService } = useFetch();
  const [inputText, setInputText] = useState("");
  const [images, setImages] = useState([]);
  const params = { q: inputText, limit: 12 };

  const addImages = (res) => {
    setImages(
      res.data.map((i) => ({
        url: i.images.downsized.url,
        title: i.title,
      }))
    );
  };

  const handleSearchGifs = () => fetchService(searchService(params), addImages);

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
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              type="text"
              placeholder="Busca gifs"
              className="search-input"
            />
            <button className="search-button" onClick={handleSearchGifs}>
              <img src="images/icon-search-mod-noc.svg" alt="Search" />
            </button>
          </div>
          <h2 className="normal-weight results-title">
            Resultados de la búsqueda
          </h2>
        </section>
        {error.isError && <ErrorMessage message={error.error} />}
        {loading ? <Loader /> : <ImagesGrid elements={images} />}
      </div>
    </div>
  );
}

export default Home;
