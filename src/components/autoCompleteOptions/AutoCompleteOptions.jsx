// styles
import "./auto-complete-options.css";

function AutoCompleteOptions({ options = [], handlerSelectOption = () => { } }) {
  const handleSelection = (option) => () => handlerSelectOption(option);

  const handleEnterKey =
    (option) =>
      ({ key }) => {
        if (key === "Enter") handlerSelectOption(option);
      };

  return (
    <div className={`options-content${options.length ? "" : " display-none"}`}>
      <hr className="divider" />
      <ul className="options-list">
        {options.map((option) => {
          return (
            <li
              key={option}
              className="options-list__item"
              onClick={handleSelection(option)}
              onKeyUp={handleEnterKey(option)}
            >
              <span>{option}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AutoCompleteOptions;
