// react
import { useEffect, useState } from "react";

// hooks
import useGetThemeClass from "../hooks/useGetThemeClass";
import useFetch from "../hooks/useFetch";

// styles
import "./home.css";

// services
import { autocompleteService, searchService } from "../api/services";

// components
import Header from "../components/header/Header";
import ImagesGrid from "../components/imagesGrid/ImagesGrid";
import Loader from "../components/loader/Loader";
import ErrorMessage from "../components/error/ErrorMessage";
import AutoCompleteOptions from "../components/autoCompleteOptions/AutoCompleteOptions";

function Home() {
  const classStringApp = useGetThemeClass("app");
  const { success, error, loading, fetchService } = useFetch();
  const { success: successOptions, fetchService: fetchServiceOptions } =
    useFetch();
  const [inputText, setInputText] = useState("");
  const [images, setImages] = useState([]);
  const [searchOptions, setSearchOptions] = useState([]);
  const [isFocusedInput, setIsFocusedInput] = useState(false);
  const params = { q: inputText, limit: 12 };

  useEffect(() => {
    const { data } = success.res;
    if (Array.isArray(data)) {
      setImages(
        data.map((i) => ({
          url: i.images?.downsized?.url,
          title: i.title,
        }))
      );
    }
  }, [success.res]);

  useEffect(() => {
    const { data } = successOptions.res;
    if (Array.isArray(data)) {
      setSearchOptions(data.map((o) => o.name));
    }
  }, [successOptions.res]);

  const handleSearchGifts = () => {
    fetchService(searchService(params));
    setSearchOptions([]);
  };

  const handleEnterKey = ({ key }) => {
    if (key === "Enter") handleSearchGifts();
  };

  const handleSelectingOption = (option) => {
    setInputText(option);
    fetchService(searchService({ ...params, q: option }));
    setSearchOptions([]);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value);
    if (value.length || value.length % 2 === 0) {
      fetchServiceOptions(autocompleteService({ q: value }));
    }
  };

  const handleClearInputButton = () => {
    setInputText("");
    setSearchOptions([]);
  };

  return (
    <div className={classStringApp}>
      <div className="main-container">
        <section className="top-section">
          <Header />
          <h1 className="normal-weight">
            ¡Inspírate y busca los mejores <b>GIFS</b>!
          </h1>
          <span className="bg-friends" />
          <div className="form-options-container">
            <div
              className={`form${
                searchOptions.length > 0 ? " hide-bottom" : ""
              }${isFocusedInput || searchOptions.length > 0 ? " shadow" : ""}`}
            >
              <label className="search-wrapper">
                <input
                  required
                  value={inputText}
                  onChange={handleInputChange}
                  onKeyUp={handleEnterKey}
                  type="text"
                  placeholder="Busca gifs"
                  className="search-input hide-border hide-background"
                  onBlur={() => setIsFocusedInput(false)}
                  onFocus={() => setIsFocusedInput(true)}
                />
                {inputText.length > 0 && (
                  <button
                    className="close-icon"
                    type="button"
                    onClick={handleClearInputButton}
                  ></button>
                )}
              </label>
              <button
                className="search-button hide-border"
                onClick={handleSearchGifts}
              >
                <img src="images/icon-search-mod-noc.svg" alt="Search" />
              </button>
            </div>
            <AutoCompleteOptions
              handlerSelectOption={handleSelectingOption}
              options={searchOptions}
            />
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
