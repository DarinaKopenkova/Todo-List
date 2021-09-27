import "./ButtonAdd.css";

export function ButtonAdd(props) {
  return (
    <button onClick={props.onClick} className="button-add">
      +
    </button>
  );
}
