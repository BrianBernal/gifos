// styles
import "./imagesGrid.css";

// hooks
import useGetThemeClass from "../../hooks/useGetThemeClass";

function ImagesGrid({ elements = [] }) {
  const sectionStringClass = useGetThemeClass("results-section");

  return (
    <section className={sectionStringClass}>
      {elements.length === 0
        ? "Ingresa una busqueda..."
        : elements.map((i) => <img key={i.url} src={i.url} alt={i.title} />)}
    </section>
  );
}

export default ImagesGrid;
