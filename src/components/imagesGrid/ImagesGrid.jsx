// styles
import "./imagesGrid.css";

// hooks
import useGetThemeClass from "../../hooks/useGetThemeClass";

function ImagesGrid() {
  const sectionStringClass = useGetThemeClass("results-section");

  return <section className={sectionStringClass}>Sin resultados...</section>;
}

export default ImagesGrid;
